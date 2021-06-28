<template>
    <div class="record-page">
        <div class="record-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <div
                class="record-list"
                v-loading="isLoading"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0)"
            >
                <div class="record" v-for="record in records" :key="record.id">
                    <div>
                        <div class="lab">Time</div>
                        <div class="val">
                            {{ record.time | dateFormat }}
                        </div>
                    </div>
                    <div>
                        <div class="lab">Number</div>
                        <div class="val">{{ record.amount }} BFX</div>
                    </div>
                    <div
                        class="btn"
                        :class="{
                            disabled: !canRedeem(record) || record.redeemed,
                        }"
                    >
                        {{ canRedeem(record) ? "Unlock" : "Lock" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from "@/config/network";
import { BigNumber } from "bignumber.js";
import { BitflixPoint } from "@/plugins/contracts/BitflixPoint";

export default {
    name: "record",
    data() {
        return {
            records: [],
            lockDuration: 0,
            isLoading: false,
            bitflixPoint: {},
        };
    },
    mounted() {
        if (this.isConnected) {
            this.init();
        }
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
            return this.$wallet.connectedAccount;
        },
        isConnected() {
            return this.$wallet.isConnected;
        },
    },
    methods: {
        async init() {
            this.bitflixPoint = new BitflixPoint();
            this.lockDuration = await this.getLockDuration().toString();
            this.requestData();
        },
        async getLockDuration() {
            let duration = await this.bitflixPoint.getLockDuration();
            return duration.toString();
        },
        goBack() {
            this.$router.push("/lockup");
        },
        canRedeem(item) {
            let now = +(new Date().getTime() / 1000);
            let time = new BigNumber(item.time).plus(this.lockDuration);
            return time.lt(now);
        },
        requestData() {
            this.isLoading = true;
            let token = config.tokens.find((v) => v.symbol.toUpperCase() === "BTFLX");
            this.$http
                .userGetLockHistory({})
                .then((res) => {
                    this.isLoading = false;
                    this.records = res.list.locks.map((v) => {
                        return {
                            id: v.id,
                            time: v.startTime,
                            redeemed: v.redeemed,
                            amount: new BigNumber(v.amount).shiftedBy(
                                -parseInt(token.decimals).toString()
                            ),
                            user: v.user,
                        };
                    });
                })
                .catch((err) => {
                    this.$notify.error(err.head ? err.head.msg : err.message);
                    this.isLoading = false;
                    if (err.head && err.head.code == 1032) {
                        this.$router.push("/login");
                        this.$store.dispatch("user/Quit");
                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.record-page {
    margin-top: 60px;
}
.record-content {
    width: 1222px;
    margin: auto;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Montserrat-SemiBold, Montserrat;
        // font-weight: R;
        color: #ffffff;
    }
    .record-list {
        margin-top: 66px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .record {
            margin-top: 20px;
            width: 805px;
            height: 110px;
            padding: 0px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #c9caca;
            border-radius: 8px;
            color: #ffffff;
            background-color: #0c3061;
            .lab {
                font-family: Montserrat-SemiBold, Montserra;
                font-weight: 500;
                font-size: 15px;
            }
            .val {
                margin-top: 10px;
                font-family: Montserrat-SemiBold, Montserra;
                font-size: 13px;
            }
            .btn {
                cursor: pointer;
                border-radius: 20px;
                // font-family: Montserrat-SemiBold, Montserra;
                font-family: "Montserrat-Bold";
                font-size: 14px;
                padding: 8px 32px;
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
            }
            .btn.disabled {
                cursor: not-allowed;
                opacity: 0.7;
                background: linear-gradient(to right, #444444, #444444);
            }
        }
    }
}
.record-content ::v-deep .el-loading-mask {
    font-size: 24px;
}
</style>
