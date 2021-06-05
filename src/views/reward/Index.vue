<template>
    <div class="reward-page">
        <div class="reward">
            <span class="title">AVAILABLE</span>
            <div class="collect-container">
                <Collect />
                <Collect />
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
        return {};
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
