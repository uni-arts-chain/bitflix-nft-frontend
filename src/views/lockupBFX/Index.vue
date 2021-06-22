<template>
    <div class="lockup-page">
        <div class="lockup-content">
            <BaseTitle>LOCK UP BFX</BaseTitle>
            <div class="lockup">
                <div>
                    <p class="lockup-title">
                        Stake {{ token.symbol }} to receive USDT spending quota
                    </p>
                    <div class="input-wrapper">
                        <input class="input" v-model="amount" />
                        <span class="unit">{{ token.symbol }}</span>
                    </div>
                    <p class="desc desc-1">
                        {{ token.symbol }} Balance: {{ balance }}
                    </p>
                    <p class="desc">{{ token.symbol }} Staked: {{ staked }}</p>
                    <p class="desc">Spending Quota: ${{ quote }}</p>
                </div>
                <button
                    class="btn active btn-1"
                    @click="lock"
                    v-if="isApproved"
                    v-loading="isLocking"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)"
                >
                    Lock up
                </button>
                <button
                    class="btn active btn-1"
                    v-loading="isApproving"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)"
                    @click="approve"
                    v-else
                >
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
            balance: 0,
            lockRate: 0,
            allowance: 0,
            staked: 0,
            tokenErc20: {},
            lockDuration: 0,
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
        quote() {
            return new BigNumber(this.staked).times(this.lockRate).toString();
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
            this.bitflixPoint = new BitflixPoint();
            this.allowance = await this.getApproved();
            this.balance = await this.getBalance();
            this.lockRate = await this.getLockRate();
            this.getLockTotal();
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
        async getBalance() {
            let balance = await this.tokenErc20.balanceOf(
                this.connectedAccount
            );
            return balance.toString();
        },
        async getLockRate() {
            let lockRate = await this.bitflixPoint.getLockRate();
            return lockRate.toString();
        },
        getLockTotal() {
            this.$http
                .userGetLockTotal({})
                .then((res) => {
                    this.staked = new BigNumber(res.amount)
                        .shiftedBy(-parseInt(this.token.decimals))
                        .toString();
                })
                .catch((err) => {
                    this.$notify.error(err.head ? err.head.msg : err.message);
                });
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
            let amountNumber = new BigNumber(this.amount);
            if (amountNumber.isZero() || amountNumber.isNaN()) {
                this.$notify.error("Invalid input value");
                return;
            }
            this.isLocking = true;
            this.bitflixPoint
                .lock(
                    this.connectedAccount,
                    this.amount || 0,
                    (err, txHash) => {
                        this.isLocking = false;
                        if (!err) {
                            console.log(txHash);
                            this.amount = "";
                            this.$notify.success("Locked successfully");
                        }
                    }
                )
                .then((receipt) => {
                    console.log("receipt: ", receipt);
                })
                .catch((err) => {
                    this.isLocking = false;
                    console.log(err);
                    this.$notify.error(err.message);
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
            overflow: hidden;
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
