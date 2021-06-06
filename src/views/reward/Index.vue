<template>
    <div class="reward-page">
        <div class="reward">
            <span class="title">AVAILABLE</span>
            <div class="collect-container">
                <Collect v-bind="collect1" />
                <Collect v-bind="collect2" />
            </div>
        </div>
    </div>
</template>

<script>
import Collect from "./Collect";

export default {
    name: "Reward",
    components: {
        Collect,
    },
    data() {
        return {
            collect1: {
                time: "01:08:37:15",
                title: "Cool Cats Challenge 4",
                desc: "Collect 10 Moments to get this reward",
            },
            collect2: {
                time: "01:08:37:15",
                title: "Cool Cats Challenge 5",
                desc: "Collect 10 Moments to get this reward",
                colorStyle: {
                    "background-color": "#6499E5",
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.reward-page {
    margin-top: 80px;
    margin-bottom: 157px;
}
.reward {
    width: 1231px;
    margin: auto;
    .title {
        margin-left: 9px;
        height: 82px;
        padding-bottom: 10px;
        border-bottom: 4px #ffffff solid;

        font-size: 17px;
        font-family: Montserrat, Montserrat-SemiBold;
        font-weight: SemiBold;
        color: #ffffff;
    }
    .collect-container {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
