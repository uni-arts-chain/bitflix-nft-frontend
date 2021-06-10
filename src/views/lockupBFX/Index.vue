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
                        <input class="input" />
                        <span class="unit">BFX</span>
                    </div>
                    <p class="desc desc-1">BTFLX Balance: 65413.2642</p>
                    <p class="desc">BTFL XStaked: 10000</p>
                    <p class="desc">Spending Quota: $100</p>
                </div>
                <button class="btn active btn-1">Lock up</button>
                <button class="btn btn-2" @click="goRecord">
                    Lock up record
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle";

export default {
    name: "lockup",
    components: {
        BaseTitle,
    },
    methods: {
        goRecord() {
            this.$router.push("/lockupRecord");
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
