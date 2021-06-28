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
            A Movie NFT is a collectible behind-the-scenes moment from a movie. If Terminator was
            the BITFLIX IMO, then the BTS video clip of Arnold Schwarzenegger’s iconic phrase “I’ll
            be back” would be the Movie NFT.
        </p>
        <button class="start-button" @click="goMarketplace">START YOUR COLLECTION</button>
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
    height: 714px;
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
    margin-top: 515px;
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
    background-color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    video {
        height: 100%;
        width: auto;
    }
}
</style>
