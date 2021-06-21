<template>
    <div class="record-page">
        <div class="record-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <div class="record-list">
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
                    <div class="btn">
                        {{ record.redeemed ? "Unlock" : "Lock" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from "@/config/network";
import { BigNumber } from "bignumber.js";

export default {
    name: "record",
    data() {
        return {
            records: [],
        };
    },
    mounted() {
        this.requestData();
    },
    methods: {
        goBack() {
            this.$router.push("/lockup");
        },
        requestData() {
            let token = config.tokens.find(
                (v) => v.symbol.toUpperCase() === "BTFLX"
            );
            this.$http.userGetLockHistory({}).then((res) => {
                this.records = res.locks.map((v) => {
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
        }
    }
}
</style>
