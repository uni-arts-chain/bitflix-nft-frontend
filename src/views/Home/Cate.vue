/** * Created by Lay Hunt on 2021-05-24 15:25:12. */
<template>
    <div class="cate">
        <!-- <div class="cate-top">
            <div class="cate-item" style="width: 32%" @click="goLockUp">
                <div class="item-title1">Lock up</div>
                <div class="item-title2">BITFLIX</div>
                <img
                    src="@/assets/images/flower.png"
                    style="width: auto; height: 80px; margin: 4px 0"
                />
            </div>
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
        </div> -->
        <svg class="desc-title" id="s9" width="830" height="90">
            <defs>
                <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0">
                    <stop offset="0%" stop-color="#ffbcfd" />
                    <stop offset="100%" stop-color="#529ae3" />
                </linearGradient>
            </defs>
            <text font-size="110" x="0" y="90" fill="url(#g3)">
                COLLECT MOVIE NFTS - CONNECT WITH STARS
            </text>
        </svg>
        <div class="card-cate-group container">
            <div class="card-cate-item" @click="goMarketplaceDetail('star')">
                <ActionMovie
                    title="STAR NFT"
                    :coverUrl="`${require('@/assets/images/nftType/star.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin1.png')}`"
                />
                <span>STAR</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('movie')">
                <ActionMovie
                    title="MOVIE NFT"
                    :coverUrl="`${require('@/assets/images/nftType/movie.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin2.png')}`"
                />
                <span>MOVIE</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('music')">
                <ActionMovie
                    title="MUSIC NFT"
                    :coverUrl="`${require('@/assets/images/nftType/music.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin4.png')}`"
                />
                <span>MUSIC</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('activist')">
                <ActionMovie
                    title="ACTIVIST NFT"
                    :coverUrl="`${require('@/assets/images/nftType/activist.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin3.png')}`"
                />
                <span>ACTIVIST</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('trophy')">
                <ActionMovie
                    title="TROPHY NFT"
                    :coverUrl="`${require('@/assets/images/nftType/trophy.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin5.png')}`"
                />
                <span>TROPHY</span>
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
        goLockUp() {
            this.$router.push("/lockup");
        },
        goMarketplaceDetail(artType) {
            this.$router.push("/marketplaceSearch?art_type=" + artType);
        },
    },
};
</script>
<style lang="scss" scoped>
.cate {
    background-image: url(~@/assets/images/home-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 600px;
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
    height: 328px;
    display: flex;
    justify-content: space-between;
}
.card-cate-group.container {
    width: 1200px;
}
.card-cate-item {
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background-image: url(~@/assets/images/card-bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
        width: 170px;
        height: 170px;
        font-size: 19px;
        margin-top: 23px;
        margin-bottom: 30px;
    }
}
</style>
