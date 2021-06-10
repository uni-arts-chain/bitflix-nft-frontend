<template>
    <div class="nft-detail-page">
        <div class="nft-detail">
            <span class="back-btn" @click="goback"
                >&lt; BACK TO CHALLENGES</span
            >
            <div class="detail-container">
                <div class="poster-con">
                    <div class="top-time">
                        <span class="time">01:08:37:15</span>
                    </div>
                    <div class="poster">
                        <div class="poster-image">
                            <!-- <img src="@/assets/images/reward/collect1@2x.png" /> -->
                            <div class="video-con">
                                <video
                                    id="nftDetailVideo"
                                    width="265"
                                    height="158"
                                    :src="videoUrl"
                                    poster="@/assets/images/reward/collect1@2x.png"
                                    autoplay
                                    muted
                                    controls
                                    controlslist="nodownload"
                                ></video>
                            </div>
                        </div>
                        <div class="poster-slogan">REWARD</div>
                    </div>

                    <div class="progress">
                        <div class="progress-bar">
                            <div class="bar"></div>
                        </div>
                        <span class="progress-rate">0/9</span>
                    </div>
                </div>
                <div class="desc-con">
                    <div class="title">To be added</div>
                    <div class="sub-title">To be added</div>
                    <div class="h-br"></div>
                    <p class="desc">To be added</p>
                </div>
            </div>
            <div class="recommend-container">
                <div class="recommend-title">What you'll need</div>
                <ActionMovieList class="recommend-list" />
            </div>
        </div>
    </div>
</template>

<script>
import ActionMovieList from "@/components/ActionMovieList";
import Mp4 from "@/assets/video/banner-mp4.mp4";

export default {
    name: "NFTDetail",
    components: {
        ActionMovieList,
    },
    data() {
        return {
            videoUrl: Mp4,
        };
    },
    methods: {
        goback() {
            this.$router.push("/mynft");
        },
    },
};
</script>

<style lang="scss" scoped>
#nftDetailVideo {
    /* 全屏按钮 */
    &::-webkit-media-controls-fullscreen-button {
        display: none;
    }
    /* 播放按钮 */
    // &::-webkit-media-controls-play-button {
    //     display: none;
    // }
    /* 进度条 */
    &::-webkit-media-controls-timeline {
        display: none;
    }
    /* 观看的当前时间 */
    &::-webkit-media-controls-current-time-display {
        display: none;
    }
    /* 剩余时间 */
    &::-webkit-media-controls-time-remaining-display {
        display: none;
    }
    /* 音量按钮 */
    // &::-webkit-media-controls-mute-button {
    //     display: none;
    // }
    // &::-webkit-media-controls-toggle-closed-captions-button {
    //     display: none;
    // }
    /* 音量的控制条 */
    // &::-webkit-media-controls-volume-slider {
    //     display: none;
    // }
    /* 所有控件 */
    // &::-webkit-media-controls-enclosure {
    //     display: none;
    // }
    /* 下载按钮 */
    &::-webkit-media-controls-download-button {
        display: none;
    }
}
.nft-detail-page {
    margin-top: 80px;
    margin-bottom: 67px;
}
.nft-detail {
    width: 1231px;
    margin: auto;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #ffffff;
    }
    .detail-container {
        margin-top: 36px;
        padding: 44px 72px 30px 100px;
        display: flex;
        background: #143361;
        border-radius: 8px;
    }
    .recommend-container {
        margin-top: 82px;
        .recommend-title {
            font-size: 23px;
            font-family: Adobe Heiti Std, Adobe Heiti Std-R;
            // font-weight: R;
            color: #ffffff;
        }
        .recommend-list {
            margin-top: 55px;
        }
    }
}
.desc-con {
    margin-left: 27px;
    margin-top: 73px;
    .title {
        font-size: 42px;
        font-family: Montserrat-ExtraBold, Montserrat;
        // font-weight: ExtraBold;
        font-weight: bolder;

        color: #ffffff;
    }
    .sub-title {
        margin-top: 28px;
        font-size: 20px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #c9caca;
    }
    .h-br {
        margin-top: 18px;
        width: 620px;
        height: 2px;
        background-color: #7d818d;
    }
    .desc {
        margin-top: 25px;
        font-size: 17px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #c9caca;
        font-weight: 600;
        line-height: 30px;
    }
}
.poster-con {
    .top-time {
        .time {
            padding: 13px 20px 14px 27px;
            background-color: #d73cd6;
            font-size: 19px;
            color: #ffffff;
            letter-spacing: 1px;
            font-family: Montserrat-ExtraBold, Montserrat;
            // font-weight: ExtraBold;
            font-weight: bolder;
            display: inline-block;
        }
    }
    .poster {
        position: relative;
        margin-top: 18px;
        padding: 11px;
        height: 283px;
        width: 391px;
        background: #000000;
        border-radius: 11px;
        display: flex;
        align-items: center;
        .poster-image {
            width: 356px;
            height: 168px;
            // margin-left: 82px;
            display: flex;
            align-items: center;
            justify-content: center;
            // .video-con {
            //     width: 265px;
            // }
        }
        .poster-slogan {
            transform: rotateZ(-90deg) translateX(-60px);
            // margin-left: 59px;
            width: 22px;
            font-family: Montserrat-ExtraBold, Montserrat;
            // font-weight: ExtraBold;
            font-weight: bolder;
            font-size: 31px;
            color: #166dce;
        }
    }
    .progress {
        margin-top: 104px;
        display: flex;
        align-items: center;
        .progress-bar {
            width: 328px;
            height: 17px;
            background-color: #828495;
            .bar {
            }
        }
        .progress-rate {
            margin-left: 17px;
            font-size: 24px;
            text-align: center;
            color: #ffffff;
            letter-spacing: 1px;
            font-family: Montserrat-ExtraBold, Montserrat;
            // font-weight: ExtraBold;
            font-weight: bolder;
        }
    }
}
</style>
