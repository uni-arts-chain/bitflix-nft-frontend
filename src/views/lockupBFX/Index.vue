<template>
    <div class="lockup-page">
        <div class="lockup-content">
            <BaseTitle>LOCK UP BFX</BaseTitle>
            <div class="lockup">
                <div>
                    <p class="lockup-title">
                        Stake BTFLX to receive USDT spending quota
                    </p>
                    <div class="input-wrapper">
                        <input class="input" v-model="amount" />
                        <span class="unit">{{ token.symbol }}</span>
                    </div>
                    <!-- <p class="desc desc-1">{{ token.symbol }} Balance: 65413.2642</p> -->
                    <!-- <p class="desc">{{ token.symbol }} Staked: 10000</p> -->
                    <!-- <p class="desc">Spending Quota: $100</p> -->
                </div>
                <button
                    class="btn active btn-1"
                    @click="lock"
                    v-if="isApproved"
                >
                    Lock up
                </button>
                <button class="btn active btn-1" @click="approve" v-else>
                    Approve
                </button>
                <button class="btn btn-2" @click="goRecord">
                    Lock up record
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle";
import { BigNumber } from "bignumber.js";
import { BitflixPoint, Erc20 } from "@/plugins/contracts";
import config from "@/config/network";

export default {
    name: "lockup",
    data() {
        return {
            amount: "",
            token: {},
            allowance: 0,
            tokenErc20: {},
            isApproving: false,
            isLocking: false,
        };
    },
    components: {
        BaseTitle,
    },
    watch: {
        isConnected(value) {
            if (value) {
                this.init();
            }
        },
    },
    computed: {
        connectedAccount() {
            return this.$store.state.user.connectedAccount;
        },
        isConnected() {
            return this.$store.state.user.isConnected;
        },
        isApproved() {
            return new BigNumber(this.allowance).gte(9999999);
        },
    },
    mounted() {
        if (this.isConnected) {
            this.init();
        }
    },
    methods: {
        async init() {
            this.token = config.tokens.find(
                (v) => v.symbol.toUpperCase() === "BTFLX"
            );
            this.tokenErc20 = new Erc20(
                this.token.address,
                this.token.symbol,
                this.token.decimals
            );
            let result = await this.getApproved();
            console.log(result);
            this.allowance = await this.getApproved();
        },
        goRecord() {
            this.$router.push("/lockupRecord");
        },
        async getApproved() {
            let amount = (
                await this.tokenErc20.allowance(
                    this.connectedAccount,
                    config.contracts.BitflixPoint
                )
            ).toString();
            return amount;
        },
        approve() {
            if (!this.connectedAccount) {
                this.$router.push("/login");
                return;
            }
            this.isApproving = true;
            this.tokenErc20
                .approveMax(
                    this.connectedAccount,
                    config.contracts.BitflixPoint,
                    (err, txHash) => {
                        this.isApproving = false;
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(txHash);
                        }
                    }
                )
                .then((receipt) => {
                    console.log("receipt: ", receipt);
                })
                .catch((err) => {
                    console.log(err);
                    this.isApproving = false;
                });
        },
        lock() {
            this.isLocking = true;
            let bitflixPoint = new BitflixPoint();
            bitflixPoint
                .lock(
                    this.connectedAccount,
                    this.amount || 0,
                    (err, txHash) => {
                        this.isLocking = false;
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(txHash);
                        }
                    }
                )
                .then((receipt) => {
                    console.log("receipt: ", receipt);
                })
                .catch((err) => {
                    this.isLocking = false;
                    console.log(err);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.lockup-page {
    margin-top: 60px;
    margin-bottom: 60px;
}
.lockup-content {
    margin-top: 60px;
    width: 1222px;
    margin: auto;
    .lockup {
        color: #ffffff;
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .lockup-title {
            font-family: Montserrat-SemiBold, Montserrat;
            font-size: 20px;
            // font-weight: 600;
        }
        .input-wrapper {
            margin-top: 16px;
            width: 560px;
            height: 60px;
            border-radius: 10px;
            background-color: #ffffff;
            display: flex;
            padding: 10px 20px;
            color: #000000;
            align-items: center;
            .input {
                flex: 1;
                font-size: 18px;
                font-family: Montserrat-SemiBold, Montserrat;
            }
            .unit {
                font-size: 18px;
                font-family: Montserrat-SemiBold, Montserrat;
            }
        }
        .desc {
            margin-top: 4px;
            line-height: 1.5;
            font-size: 15px;
            font-family: Montserrat-SemiBold, Montserrat;
        }
        .desc-1 {
            margin-top: 20px;
        }

        .btn {
            cursor: pointer;
            border-radius: 30px;
            font-family: Montserrat-SemiBold, Montserrat;
            font-size: 20px;
            padding: 16px;
            width: 360px;
            background: transparent;

            &.active {
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
                font-weight: 600;
            }
            &:hover {
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
                font-weight: 600;
            }
            &.btn-1 {
                margin-top: 80px;
            }
            &.btn-2 {
                margin-top: 20px;
            }
        }
    }
}
</style>
