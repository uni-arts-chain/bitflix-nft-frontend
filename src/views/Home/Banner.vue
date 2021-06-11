/** * Created by Lay Hunt on 2021-05-24 14:29:58. */
<template>
    <div class="banner">
        <div class="wrapper-video">
            <!-- <AdaptiveVideo
                :source="BannerMp4"
                :isPlay="true"
                :isCover="true"
                :isLoop="true"
            /> -->
            <video
                id="marketplaceVideo"
                ref="video"
                width="100%"
                height="auto"
                :src="videoUrl"
                poster=""
                autoplay
                loop
                muted
            ></video>
        </div>

        <!-- <h2 class="second-title">MOVIE NFT & IMOs</h2> -->
        <p class="desc">
            A Movie NFT (Non-Fungible Token) is a collectible behind the
            scenes(BTS) video clip of an iconic scene or line of dialogue in a
            movie.Everyone remembers Arnold Schwarzenegger's famous movie
            quotes.If Terminator was the IMO (Initial Movie Offering) then the
            BTS video clip of him saying "I'll be back" would be the NFT.
        </p>
        <button class="start-button" @click="goMarketplace">
            START YOUR COLLECTION
        </button>
    </div>
</template>
<script>
// import AdaptiveVideo from "@/components/AdaptiveVideo";
import BannerMp4 from "@/assets/video/banner-mp4.mp4";
export default {
    name: "banner",
    components: {
        // AdaptiveVideo,
    },
    data() {
        return {
            BannerMp4,
            videoUrl: BannerMp4,
        };
    },
    methods: {
        goMarketplace() {
            this.$router.push("/marketplace");
        },
    },
};
</script>
<style lang="scss" scoped>
.banner {
    height: 780px;
    width: 100%;
    color: white;
    overflow: hidden;
    position: relative;
}
.second-title {
    font-size: 52px;
    font-family: "Montserrat-Bold";
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    line-height: 92px;
}
.desc {
    margin: 0 auto;
    margin-top: 565px;
    max-width: 930px;
    font-size: 17px;
    font-family: "Montserrat-Regular";
    font-weight: 600;
    text-align: left;
    color: #ffffff;
    line-height: 30px;
    position: relative;
    z-index: 2;
}
.start-button {
    margin-top: 20px;
    background: linear-gradient(to right, #ba45c8, #2b6bd2);
    width: 368px;
    height: 60px;
    cursor: pointer;
    text-align: center;
    font-size: 17px;
    font-family: "Montserrat-Bold";
    text-align: center;
    color: #ffffff;
    line-height: 30px;
    letter-spacing: 2px;
    position: relative;
    z-index: 2;
}
.wrapper-video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>
