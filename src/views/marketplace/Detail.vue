<template>
    <div class="detail-page">
        <div class="detail">
            <span class="back-btn" @click="goback">&lt; BACK</span>
            <div
                class="detail-container"
                v-loading="isLoading"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0)"
            >
                <div class="poster-con">
                    <!-- <div class="poster-time">
                        <span class="time">MAR 15 2021</span>
                    </div>-->
                    <div class="poster-image">
                        <AdaptiveView width="100%" height="100%" :nft="info" />
                    </div>
                    <!-- <div class="zoom-btn" @click="showImage">
                        <img src="@/assets/images/marketplace/zoom@2x.png" />
                    </div> -->
                </div>
                <div class="v-br" v-if="!isLoading"></div>
                <div class="desc-con" v-if="!isLoading">
                    <div class="title">{{ info.name }}</div>
                    <!-- <div class="sub-title" style="margin-top: 8px">To</div>
                    <div class="sub-title">be added</div>
                    <div class="sub-title"># /35000+</div>-->
                    <div class="info-con">
                        <div>
                            <div class="label">Transzction</div>
                            <div class="label">number</div>
                        </div>
                        <div>
                            <div class="label2">{{ info.trades_count }}</div>
                            <div class="label" style="text-align: center">Time</div>
                        </div>
                    </div>
                    <div class="price-con">
                        {{ info.price | priceFixed }}
                        <span class="price-unit">{{
                            info.currency_code ? info.currency_code.toUpperCase() : "USDT"
                        }}</span>
                        <!-- <div class="price-desc">Top Sale</div> -->
                    </div>
                    <div
                        class="buy-btn"
                        :disabled="isOwner || !isSelling"
                        v-loading="isPurchasing || isApproving"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.7)"
                        @click="buy"
                    >
                        {{ isOwner ? "MINE" : isSelling ? "BUY" : "Unpurchasable".toUpperCase() }}
                    </div>
                    <!-- <div class="share-con">
                        <div class="share-btn">BUYING AVAILABLE</div>
                        <div class="share-icon-con">
                            <img
                                class="search-icon"
                                src="@/assets/images/marketplace/share@2x.png"
                            />
                        </div>
                    </div>-->
                    <div class="hash-con">
                        <div class="hash-text">NFT HASH : {{ info.tx_hash }}</div>
                        <div class="hash-icon-con" @click="copy(info.tx_hash)">
                            <img class="hash-icon" src="@/assets/images/marketplace/hash@2x.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="expand-con">
                <div class="expand">
                    <div class="expand-text">COLLECTIBLE DETAILS</div>
                    <img
                        class="expand-icon"
                        @click="toogleDetails"
                        src="@/assets/images/marketplace/up-icon@2x.png"
                    />
                </div>
                <transition name="fade">
                    <div v-show="showDetails">
                        <div class="detail-desc">
                            {{ info.details }}
                        </div>
                        <div class="base-set"></div>
                    </div>
                </transition>
            </div>
            <!-- <div class="expand-con">
                <div class="expand">
                    <div class="expand-text">RECENT SALES HISTORY</div>
                    <img
                        class="expand-icon"
                        @click="toogleHistorys"
                        src="@/assets/images/marketplace/up-icon@2x.png"
                    />
                </div>
                <transition name="fade">
                    <div v-show="showHistorys" class="view-history">
                        <span class="view-btn" @click="goHistory">VIEW COMPLETE SALES HISTORY</span>
                    </div>
                </transition>
            </div> -->
            <div class="more-moments">
                <div class="more-moments-title">MORE MOMENTS</div>
                <ActionMovieList :list="momentList" class="more-moments-list" />
            </div>
        </div>
    </div>
</template>

<script>
import ActionMovieList from "@/components/ActionMovieList";
import AdaptiveView from "@/components/AdaptiveView";
import config from "@/config/network";
import ERC20 from "@/plugins/contracts/Erc20";
import MarketPlace from "@/plugins/contracts/MarketPlace";
import { BigNumber } from "bignumber.js";

export default {
    name: "MarketplaceDetail",
    components: {
        ActionMovieList,
        AdaptiveView,
    },
    data() {
        return {
            showDetails: true,
            showHistorys: true,
            isMuted: true,
            id: this.$route.params.id,
            isLoading: false,
            isMomentLoading: false,
            info: {
                property_url: "",
            },
            momentList: [],
            ERC20: {},
            MarketPlace: {},
            isApproving: false,
            isPurchasing: false,
            allowance: new BigNumber(0),
        };
    },
    mounted() {
        if (this.connectedAccount) {
            this.init();
        }
    },
    watch: {
        isLogin(value) {
            if (value) {
                this.requestSimilarData();
            }
        },
        connectedAccount(value) {
            if (value) {
                this.init();
            }
        },
    },
    computed: {
        isLogin() {
            return this.$store.state.user.info.token;
        },
        connectedAccount() {
            return this.$wallet.connectedAccount;
        },
        isApproved() {
            return new BigNumber(this.allowance).gte(9999999);
        },
        isOwner() {
            return this.info.is_owner;
        },
        isSelling() {
            return this.info.offer_state == "selling";
        },
    },
    methods: {
        async init() {
            this.isLoading = true;
            this.$http
                .globalGetArtInfo(
                    {},
                    {
                        id: this.id,
                    }
                )
                .then(async (res) => {
                    this.isLoading = false;
                    this.info = res;

                    let token = config.tokens.find(
                        (v) => v.symbol.toLowerCase() == this.info.currency_code.toLowerCase()
                    );

                    this.ERC20 = new ERC20(token.address, token.symbol, token.decimals);

                    this.allowance = (
                        await this.ERC20.allowance(
                            this.connectedAccount,
                            config.contracts.MarketPlace
                        )
                    ).toNumber();
                    this.MarketPlace = new MarketPlace();
                })
                .catch((err) => {
                    this.isLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
            if (this.isLogin) {
                this.requestSimilarData();
            }
        },
        requestSimilarData() {
            this.isMomentLoading = true;
            this.$http
                .userGetArtSimilar({})
                .then((res) => {
                    this.isMomentLoading = false;
                    this.momentList = res.list;
                })
                .catch((err) => {
                    this.isMomentLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        goback() {
            history.go(-1);
        },
        copy(str) {
            this.$copy(str);
            this.$notify.success("Copied");
        },
        goHistory() {
            this.$router.push("/history");
        },
        toogleDetails() {
            this.showDetails = !this.showDetails;
        },
        toogleHistorys() {
            this.showHistorys = !this.showHistorys;
        },
        showImage() {
            if (this.$refs.video) {
                this.$refs.video.requestFullscreen();
            }
        },
        async buy() {
            if (this.isOwner || !this.isSelling || this.isApproving || this.isPurchasing) return;
            if (!this.connectedAccount || !this.isLogin) {
                this.$router.push("/login?back=" + encodeURIComponent(this.$route.path));
                return;
            }
            if (!this.isApproved) {
                this.approve();
                return;
            }
            this.buyItem();
        },
        async buyItem() {
            this.isPurchasing = true;
            console.log("allowance: ", this.allowance);
            console.log("account: ", this.connectedAccount);
            console.log("Offer ID: ", this.info.offer_id);
            this.MarketPlace.buyItem(this.connectedAccount, this.info.offer_id, (err, txHash) => {
                if (err) {
                    console.log(err);
                }
                if (txHash) {
                    console.log(txHash);
                    this.isPurchasing = false;
                    this.$notify.success(txHash);
                    this.init();
                }
                this.isApproving = false;
            })
                .then((receipt) => {
                    console.log("receipt: ", receipt);
                })
                .catch((err) => {
                    console.log(err);
                    this.isPurchasing = false;
                    this.$notify.error((err.head && err.head.msg) || (err.message && err.message));
                });
        },
        async approve() {
            this.isApproving = true;
            console.log(this.connectedAccount, config.contracts.MarketPlace);
            this.ERC20.approveMax(
                this.connectedAccount,
                config.contracts.MarketPlace,
                async (err, txHash) => {
                    if (err) {
                        console.log(err);
                    }
                    if (txHash) {
                        console.log(txHash);
                    }
                    this.isApproving = false;
                }
            )
                .then(async (receipt) => {
                    console.log("receipt: ", receipt);
                    this.allowance = (
                        await this.ERC20.allowance(
                            this.connectedAccount,
                            config.contracts.MarketPlace
                        )
                    ).toNumber();
                    this.buyItem();
                })
                .catch((err) => {
                    console.log(err);
                    this.isApproving = false;
                    this.$notify.error(
                        (err.head && err.head.msg) || err.message || (err.data && err.data.message)
                    );
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.back-btn {
    cursor: pointer;
    font-size: 17px;
    font-family: Adobe Heiti Std, Adobe Heiti Std-R;
    // font-weight: R;
    color: #ffffff;
}
.detail-page {
    margin-top: 74px;
    margin-bottom: 100px;
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
}
.detail {
    width: 1240px;
    margin: auto;
    .detail-container {
        display: flex;
        justify-content: center;
    }
}
.poster-con {
    width: 564px;
    display: flex;
    flex-direction: column;
    .poster-time {
        // width: 11px;
        font-size: 15px;
        font-family: Montserrat-SemiBold, Montserra;
        // font-weight: SemiBold;
        color: #c9caca;
        line-height: 15px;
        letter-spacing: -1px;
        display: flex;
        justify-content: flex-end;
        .time {
            transform: rotateZ(-90deg) translateX(-50%) translateY(100%);
        }
    }
    .poster-image {
        margin-top: 90px;
        width: 442px;
        height: 296px;
        display: flex;
        align-items: center;
        justify-content: center;
        .video-con {
            position: relative;
            .mute-control {
                position: absolute;
                right: 10px;
                bottom: 30px;
                color: #ffffff;
            }
        }
    }
    .zoom-btn {
        cursor: pointer;
        margin-top: 100px;
        width: 23px;
        height: 23px;
        align-self: flex-end;
        margin-right: 50px;
        img {
            width: 23px;
            height: auto;
        }
    }
}
.v-br {
    height: 167px;
    width: 2px;
    background-color: #c9caca;
    align-self: flex-start;
}
.desc-con {
    margin-left: 16px;
    width: 400px;
    align-self: flex-start;
    // margin-top: 73px;
    .title {
        font-size: 42px;
        font-family: Montserrat-ExtraBold, Montserrat;
        // font-weight: ExtraBold;
        font-weight: bolder;
        max-width: 100%;
        word-break: break-word;
        color: #ffffff;
    }
    .sub-title {
        font-size: 21px;
        font-family: Montserrat-Light, Montserrat;
        // font-weight: 300;
        color: #c9caca;
        line-height: 25px;
        letter-spacing: -1px;
    }
    .info-con {
        margin-top: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 2px solid #c9caca;
        .label {
            margin-top: 4px;
            font-size: 15px;
            font-family: Montserrat-Light, Montserrat;
            // font-weight: 300;
            color: #dcdddd;
            line-height: 15px;
            // letter-spacing: -1px;
        }
        .label2 {
            font-size: 21px;
            font-family: Montserrat-ExtraBold, Montserrat;
            // font-weight: ExtraBold;
            font-weight: bolder;
            color: #ffffff;
            line-height: 16px;
            letter-spacing: -1px;
        }
    }
    .price-con {
        margin-top: 90px;
        font-size: 32px;
        // font-family: Montserrat-ExtraBold, Montserrat;
        font-family: Montserrat-Bold;
        // font-weight: ExtraBold;
        // font-weight: bolder;
        color: #ffffff;
        letter-spacing: -1px;
        .price-unit {
            font-size: 13px;
            font-family: Montserrat-Regular, Montserrat;
            font-weight: 400;
            color: #c9caca;
            position: relative;
            top: -4px;
        }
        .price-desc {
            margin-top: 2px;
            font-size: 14px;
            font-family: Montserrat-Light, Montserrat;
            // font-weight: 300;
            color: #dcdddd;
            line-height: 14px;
            letter-spacing: -1px;
        }
    }
    .buy-btn {
        margin-top: 30px;
        margin-right: 60px;
        background: linear-gradient(to right, #ba45c8, #2b6bd2);
        line-height: 47px;
        font-size: 16px;
        // font-family: Montserrat-ExtraBold, Montserrat;
        font-family: Montserrat-Bold;
        font-weight: 700;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        letter-spacing: 1px;
    }
    .buy-btn[disabled] {
        background: #666;
        opacity: 0.7;
        cursor: not-allowed;
    }
    .share-con {
        margin-top: 27px;
        display: flex;
        .share-btn {
            cursor: pointer;
            flex: 1;
            background: linear-gradient(to right, #ba45c8, #2b6bd2);

            line-height: 47px;
            font-size: 16px;
            font-family: Montserrat-ExtraBold, Montserrat;
            font-weight: 700;
            text-align: center;
            color: #ffffff;
            letter-spacing: 1px;
        }
        .share-icon-con {
            cursor: pointer;
            width: 57px;
            height: 47px;
            margin-left: 12px;
            border: 2px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            .search-icon {
                height: 24px;
                width: auto;
            }
        }
    }
    .hash-con {
        margin-top: 19px;
        display: flex;
        align-items: center;
        .hash-text {
            flex: 1;
            font-size: 14px;
            font-family: Montserrat-Light, Montserrat;
            // font-weight: 300;
            color: #ffffff;
            line-height: 14px;
            letter-spacing: -1px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .hash-icon-con {
            cursor: pointer;
            width: 57px;
            height: 47px;
            margin-left: 12px;
            border: 2px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            .hash-icon {
                height: 23px;
                width: auto;
            }
        }
    }
}

.expand-con {
    .expand {
        margin-top: 30px;
        height: 91px;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 22px;
        padding-right: 25px;
        .expand-text {
            font-size: 40px;
            font-family: Montserrat-ExtraBold, Montserrat;
            // font-weight: ExtraBold;
            font-weight: bolder;
            color: #ffffff;
        }
        .expand-icon {
            cursor: pointer;
            width: 15px;
            // height: 16px;
        }
    }
    .detail-desc {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 24px;
        font-size: 14px;
        font-family: Montserrat-Regular, Montserrat;
        // font-weight: 400;
        color: #c9caca;
        line-height: 21px;
        // letter-spacing: -1px;
    }
    .base-set {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 38px;
        padding-bottom: 35px;
        border-bottom: 2px solid #c9caca;

        font-size: 18px;
        font-family: Montserrat-Bold, Montserrat;
        // font-weight: 700;
        color: #ffffff;
        line-height: 17px;
    }
    .view-history {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 72px;
        text-align: center;
        .view-btn {
            cursor: pointer;
            font-size: 12px;
            font-family: Montserrat-Medium, Montserrat;
            // font-weight: 500;
            color: #ffffff;
            letter-spacing: 2px;
            border-bottom: 3px solid #ffffff;
        }
    }
}

.more-moments {
    margin-top: 70px;
    .more-moments-title {
        margin-left: 20px;
        font-size: 29px;
        font-family: Montserrat-Bold, Montserrat;
        // font-weight: 700;
        color: #ffffff;
        line-height: 26px;
    }
    .more-moments-list {
        margin-top: 80px;
    }
}
</style>
