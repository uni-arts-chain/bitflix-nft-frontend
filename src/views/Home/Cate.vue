/** * Created by Lay Hunt on 2021-05-24 15:25:12. */
<template>
    <div class="cate">
        <div class="cate-top">
            <div class="cate-item" style="width: 32%" @click="goPacks">
                <div class="item-title1">GRAB & OPEN</div>
                <div class="item-title2">PACKS</div>
                <img src="@/assets/images/cube.png" />
            </div>
            <div class="cate-item" @click="goMarketplace">
                <div class="item-title1">BUILD AN EPIC</div>
                <div class="item-title2">COLLECTION</div>
                <img src="@/assets/images/card.png" />
            </div>
            <div class="cate-item" style="width: 32%" @click="goReward">
                <div class="item-title1">WIN EXCLUSIVE</div>
                <div class="item-title2">REWARDS</div>
                <img
                    src="@/assets/images/flower.png"
                    style="width: auto; height: 80px; margin: 4px 0"
                />
            </div>
        </div>
        <svg class="desc-title" id="s9" width="760" height="90">
            <defs>
                <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0">
                    <stop offset="0%" stop-color="#ffbcfd" />
                    <stop offset="100%" stop-color="#529ae3" />
                </linearGradient>
            </defs>
            <text font-size="110" x="0" y="90" fill="url(#g3)">
                SELECT YOUR FAVORITE MOVIE HIGHLIGHTS
            </text>
        </svg>
        <div class="card-cate-group container">
            <div class="card-cate-item">
                <ActionMovie
                    title="STAR NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin1.png')}`"
                />
                <span>STAR</span>
            </div>
            <div class="card-cate-item">
                <ActionMovie
                    title="MOVIE NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin2.png')}`"
                />
                <span>MOVIE</span>
            </div>
            <div class="card-cate-item">
                <ActionMovie
                    title="ACTIVISE NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin3.png')}`"
                />
                <span>ACTIVISE</span>
            </div>
        </div>
    </div>
</template>
<script>
import ActionMovie from "@/components/ActionMovie";
export default {
    name: "cate",
    components: {
        ActionMovie,
    },
    data() {
        return {};
    },
    methods: {
        goPacks() {
            this.$router.push("/packs");
        },
        goMarketplace() {
            this.$router.push("/marketplace");
        },
        goReward() {
            this.$router.push("/reward");
        },
    },
};
</script>
<style lang="scss" scoped>
.cate {
    background-image: url(~@/assets/images/home-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 1000px;
}
.cate-top {
    margin: 0 auto;
    width: 1088px;
    height: 361px;
    background-image: url(~@/assets/images/cate.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.cate-item {
    cursor: pointer;
    width: 36%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    > div {
        font-size: 17px;
        font-family: "Montserrat-Bold";
        text-align: left;
        margin-bottom: 10px;
    }
    .item-title2 {
        font-size: 36px;
        margin-bottom: 28px;
    }
    > img {
        width: 78px;
    }
}
.desc-title {
    margin-bottom: 52px;
    text {
        font-size: 29px;
        font-family: "Montserrat-Bold";
        text-align: left;
        color: #ffffff;
        line-height: 51px;
        letter-spacing: 3px;
    }
}
.card-cate-group {
    height: 418px;
    background-image: url(~@/assets/images/card-group.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
}
.card-cate-item {
    width: 29%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding-top: 23px;
    > span {
        font-size: 27px;
        font-family: "Montserrat-Medium";
        text-align: left;
        color: #ffffff;
        line-height: 61px;
        letter-spacing: 0px;
    }
    .action-movie {
        width: 239px;
        height: 252px;
        font-size: 30px;
        margin-top: 23px;
        margin-bottom: 30px;
    }
}
</style>
