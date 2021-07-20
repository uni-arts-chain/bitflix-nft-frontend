<template>
    <div class="mynft-page">
        <div class="list-content">
            <div class="list-title-con">
                <BaseTitle>MY NFT</BaseTitle>
                <div class="display-name">{{ connectedAccount }}</div>
            </div>
            <ActionMovieList
                :is-loading="isLoading"
                :is-approving="isApproving"
                :item-id="itemId"
                :list="cardList"
                class="list"
                @onMovieClick="goDetail"
                @resellOrCancelItem="resellOrCancelItem"
            />
            <el-dialog-helper ref="priseDialog" width="30%">
                <div class="priceForm">
                    <div>转售价格</div>
                    <div>
                        <input v-model="itemPrice" />
                        <span>USDT</span>
                    </div>
                </div>
                <div slot="footer" slot-scope="scope" class="priceButton">
                    <el-button @click="scope.close(true)" type="primary"> 出售 </el-button>
                </div>
            </el-dialog-helper>
        </div>
    </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle";
import ActionMovieList from "@/components/ActionMovieList";
import Resell from "@/plugins/contracts/Resell";
import ERC721 from "@/plugins/contracts/Erc721";
import config from "@/config/network";
import { BigNumber } from "bignumber.js";
import ElDialogHelper from "@/components/Dialog/ElDialogHelper";
import { toBN } from "web3-utils";

export default {
    name: "mynft",
    components: {
        ElDialogHelper,
        BaseTitle,
        ActionMovieList,
    },
    data: () => ({
        isLoading: false,
        isApproving: false,
        cardList: [],
        itemPrice: 0,
        itemId: null,
    }),
    computed: {
        connectedAccount() {
            return this.$wallet.connectedAccount;
        },
    },
    created() {
        this.requestCardData(1, 30);
    },
    methods: {
        goDetail() {
            this.$router.push("/nftdetail");
        },
        requestCardData(page, per_page) {
            this.isLoading = true;
            this.$http.userOwnArts({ page, per_page }).then((res) => {
                this.isLoading = false;
                this.cardList = res.list;
            });
        },
        async resellOrCancelItem(item, bool) {
            this.itemId = item.token_id;
            this.itemPrice = item.price;
            if (bool) {
                await this.resellItem(item);
            } else {
                await this.cancelItem(item);
            }
            this.requestCardData(1, 30);
        },
        async resellItem(item) {
            const bool = await this.$refs["priseDialog"].open(() => {
                const reg = /^[0-9]+(.[0-9]+)?$/;
                if (!reg.test(this.itemPrice)) {
                    throw new Error("输入有误");
                }
            });
            if (!bool) {
                return;
            }
            this.isApproving = true;
            let nftToken = config.nfts.BitflixNFT;
            let unitToken = config.tokens.find((v) => {
                const symbol = v.symbol?.toUpperCase();
                const itemSymbols = item.currency_code?.toUpperCase();
                if (symbol && itemSymbols && symbol === itemSymbols) {
                    return true;
                }
            });
            let OtcMarketPlaceAddress = config.contracts.OtcMarketPlace;
            let erc721 = new ERC721(nftToken.address, nftToken.symbol);
            // 在合约erc721上授权我钱包内的token_id可以被市场合约操作

            erc721
                .approve(
                    this.connectedAccount,
                    OtcMarketPlaceAddress,
                    item.token_id,
                    async (err, txHash) => {
                        if (err) {
                            console.log(err);
                        }
                        if (txHash) {
                            this.$notify.success(txHash);
                            console.log(txHash);
                        }
                    }
                )
                .then(async (receipt) => {
                    console.log("receipt: ", receipt);
                    let price = toBN(new BigNumber(this.itemPrice).shiftedBy(unitToken.decimals));
                    await Resell.createOffer(
                        this.connectedAccount,
                        item.token_id,
                        price,
                        async (err, txHash) => {
                            if (err) {
                                console.log(err);
                            }
                            if (txHash) {
                                this.isApproving = false;
                                console.log(txHash);
                                this.$notify.success(txHash);
                            }
                        }
                    )
                        .then(async (receipt) => {
                            console.log("receipt: ", receipt);
                        })
                        .catch((err) => {
                            this.isApproving = false;
                            console.log(err);
                            this.$notify.error(
                                (err.head && err.head.msg) ||
                                    err.message ||
                                    (err.data && err.data.message)
                            );
                        });
                })
                .catch((err) => {
                    console.log(err);
                    this.isApproving = false;
                    this.$notify.error(
                        (err.head && err.head.msg) || err.message || (err.data && err.data.message)
                    );
                });
        },
        async cancelItem(item) {
            this.isApproving = true;
            await Resell.closeOffer(this.connectedAccount, item.offer_id, async (err, txHash) => {
                if (err) {
                    console.log(err);
                }
                if (txHash) {
                    console.log(txHash);
                    this.isApproving = false;
                    this.$notify.success(txHash);
                }
            })
                .then(async (receipt) => {
                    this.isApproving = false;
                    console.log("receipt: ", receipt);
                })
                .catch((err) => {
                    console.log(err);
                    this.$notify.error(
                        (err.head && err.head.msg) || err.message || (err.data && err.data.message)
                    );
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.mynft-page {
    margin-top: 60px;
}
.list-content {
    margin-top: 60px;
    width: 1222px;
    margin: auto;
    .list-title-con {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .display-name {
            // height: 28px;
            // cursor: pointer;
            // border-bottom: 2px solid #ffffff;
            font-size: 16px;
            font-family: Montserrat-Medium, Montserrat;
            // font-weight: 500;
            color: #c9caca;
        }
    }
    .list {
        margin-top: 77px;
    }
}
.priceForm {
    color: white;
    display: flex;
    margin-bottom: 20px;
    div {
        flex: 1;
        text-align: center;
        input {
            background-color: #0c1e33 !important;
            border-bottom: 1px solid white;
            width: 50px;
        }
    }
}
.priceButton {
    text-align: center;
    .el-button {
        width: 80%;
        border: 1px solid white;
        background-color: #00000000;
    }
}
</style>
