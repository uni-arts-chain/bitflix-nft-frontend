<template>
    <div class="record-page">
        <div class="record-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <div class="record-list">
                <div class="record" v-for="record in records" :key="record.id">
                    <div>
                        <div class="lab">Time</div>
                        <div class="val">{{ record.time }}</div>
                    </div>
                    <div>
                        <div class="lab">Number</div>
                        <div class="val">{{ record.number }} BFX</div>
                    </div>
                    <div class="btn">
                        {{ record.status === "lock" ? "Unlock" : "Lock" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "record",
    data() {
        return {
            records: [
                {
                    id: 1,
                    time: "2020.08.30",
                    number: "80000 ",
                    status: "lock",
                },
                {
                    id: 2,
                    time: "2020.08.30",
                    number: "80000 ",
                    status: "lock",
                },
            ],
        };
    },
    methods: {
        goBack() {
            this.$router.push("/lockupBFX");
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
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
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
            border: 2px solid #c9caca;
            border-radius: 8px;
            color: #ffffff;
            background-color: #0c3061;
            .lab {
                font-family: Adobe Heiti Std, Adobe Heiti Std-R;
                font-size: 15px;
            }
            .val {
                font-family: Adobe Heiti Std, Adobe Heiti Std-R;
                font-size: 13px;
            }
            .btn {
                cursor: pointer;
                border-radius: 20px;
                font-family: Adobe Heiti Std, Adobe Heiti Std-R;
                font-size: 16px;
                font-weight: 500;
                padding: 8px 24px;
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
            }
        }
    }
}
</style>
