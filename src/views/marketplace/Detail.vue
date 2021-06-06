<template>
    <div class="detail-page">
        <div class="detail">
            <!-- <span class="back-btn" @click="goback">&lt; BACK TO CHALLENGES</span> -->
            <div class="detail-container">
                <div class="poster-con">
                    <div class="poster-time">
                        <span class="time">MAR 15 2021</span>
                    </div>
                    <div class="poster-image">
                        <!-- <img src="@/assets/images/reward/collect1@2x.png" /> -->
                        <div class="video-con">
                            <video
                                id="marketplaceVideo"
                                ref="video"
                                width="442"
                                height="296"
                                :src="videoUrl"
                                poster="@/assets/images/reward/collect1@2x.png"
                                autoplay
                                muted
                                controls
                                controlslist="nodownload"
                            ></video>
                            <!-- <div class="mute-control" @click="controlMute">开</div> -->
                        </div>
                    </div>
                    <div class="zoom-btn" @click="showImage">
                        <img src="@/assets/images/marketplace/zoom@2x.png" />
                    </div>
                </div>
                <div class="v-br"></div>
                <div class="desc-con">
                    <div class="title">GORDON HAYWARD</div>
                    <div class="sub-title" style="margin-top: 8px">Dunk</div>
                    <div class="sub-title">Base Set (Series 2)</div>
                    <div class="sub-title"># /35000+</div>
                    <div class="info-con">
                        <div>
                            <div class="label">SOLD BY</div>
                            <div class="label">2003 collectors</div>
                        </div>
                        <div>
                            <div class="label2">2076</div>
                            <div class="label">FOR SALE</div>
                        </div>
                    </div>
                    <div class="price-con">
                        $199.00
                        <span class="price-unit">USD</span>
                        <div class="price-desc">Top Sale</div>
                    </div>
                    <div class="share-con">
                        <div class="share-btn">BUYING AVAILABLE</div>
                        <div class="share-icon-con">
                            <img
                                class="search-icon"
                                src="@/assets/images/marketplace/share@2x.png"
                            />
                        </div>
                    </div>
                    <div class="hash-con">
                        <div class="hash-text">
                            NFT HASH :
                            fe48302kfh4indjrk3jufqp2020383nkdh20383nkdh20383nkdh20383nkdh
                        </div>
                        <div class="hash-icon-con">
                            <img
                                class="hash-icon"
                                src="@/assets/images/marketplace/hash@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="expand-con">
                <div class="expand">
                    <div class="expand-text">COLLECTIBLE DETAILS</div>
                    <img
                        class="expand-icon"
                        @click="toogleDetails"
                        src="@/assets/images/marketplace/up-icon@2x.png"
                    />
                </div>
                <transition name="fade">
                    <div v-show="showDetails">
                        <div class="detail-desc">
                            Contested or not, Gordon Hayward is going to take
                            the ball toContested or not, Contested or not,
                            Gordon Hayward is going to take the ball to Gordon
                            Hayward going to take is going to take the ball to
                            going to take is going to take the ball to
                        </div>
                        <div class="base-set">Base set</div>
                    </div>
                </transition>
            </div>
            <div class="expand-con">
                <div class="expand">
                    <div class="expand-text">RECENT SALES HISTORY</div>
                    <img
                        class="expand-icon"
                        @click="toogleHistorys"
                        src="@/assets/images/marketplace/up-icon@2x.png"
                    />
                </div>
                <transition name="fade">
                    <div v-show="showHistorys" class="view-history">
                        <span class="view-btn" @click="goHistory"
                            >VIEW COMPLETE SALES HISTORY</span
                        >
                    </div>
                </transition>
            </div>
            <div class="more-moments">
                <div class="more-moments-title">MORE MOMENTS</div>
                <ActionMovieList class="more-moments-list" />
            </div>
        </div>
    </div>
</template>

<script>
import ActionMovieList from "@/components/ActionMovieList";
import Mp4 from "@/assets/video/banner-mp4.mp4";

export default {
    name: "MarketplaceDetail",
    components: {
        ActionMovieList,
    },
    data() {
        return {
            showDetails: true,
            showHistorys: true,
            videoUrl: Mp4,
            isMuted: true,
        };
    },
    methods: {
        goback() {
            this.$router.push("/");
        },
        goHistory() {
            this.$router.push("/history");
        },
        toogleDetails() {
            this.showDetails = !this.showDetails;
        },
        toogleHistorys() {
            this.showHistorys = !this.showHistorys;
        },
        showImage() {
            if (this.$refs.video) {
                this.$refs.video.requestFullscreen();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
#marketplaceVideo {
    /* 全屏按钮 */
    // &::-webkit-media-controls-fullscreen-button {
    //     display: none;
    // }
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
}
.detail-page {
    margin-top: 74px;
    margin-bottom: 100px;
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
}
.detail {
    width: 1240px;
    margin: auto;
    .detail-container {
        display: flex;
        justify-content: center;
    }
}
.poster-con {
    width: 564px;
    display: flex;
    flex-direction: column;
    .poster-time {
        // width: 11px;
        font-size: 15px;
        font-family: Montserrat, Montserrat-SemiBold;
        // font-weight: SemiBold;
        color: #c9caca;
        line-height: 15px;
        letter-spacing: -1px;
        display: flex;
        justify-content: flex-end;
        .time {
            transform: rotateZ(-90deg) translateX(-50%) translateY(100%);
        }
    }
    .poster-image {
        margin-top: 90px;
        width: 442px;
        height: 296px;
        display: flex;
        align-items: center;
        justify-content: center;
        .video-con {
            position: relative;
            .mute-control {
                position: absolute;
                right: 10px;
                bottom: 30px;
                color: #ffffff;
            }
        }
    }
    .zoom-btn {
        cursor: pointer;
        margin-top: 100px;
        width: 23px;
        height: 23px;
        align-self: flex-end;
        margin-right: 50px;
        img {
            width: 23px;
            height: auto;
        }
    }
}
.v-br {
    height: 167px;
    width: 2px;
    background-color: #c9caca;
    align-self: flex-start;
}
.desc-con {
    margin-left: 16px;
    width: 400px;
    align-self: flex-start;
    // margin-top: 73px;
    .title {
        font-size: 42px;
        font-family: Montserrat, Montserrat-ExtraBold;
        // font-weight: ExtraBold;
        font-weight: bolder;

        color: #ffffff;
    }
    .sub-title {
        font-size: 21px;
        font-family: Montserrat, Montserrat-Light;
        font-weight: 300;
        color: #c9caca;
        line-height: 25px;
        letter-spacing: -1px;
    }
    .info-con {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 2px solid #c9caca;
        .label {
            margin-top: 2px;
            font-size: 15px;
            font-family: Montserrat, Montserrat-Light;
            font-weight: 300;
            color: #dcdddd;
            line-height: 15px;
            letter-spacing: -1px;
        }
        .label2 {
            font-size: 21px;
            font-family: Montserrat, Montserrat-ExtraBold;
            // font-weight: ExtraBold;
            font-weight: bolder;
            color: #ffffff;
            line-height: 16px;
            letter-spacing: -1px;
        }
    }
    .price-con {
        margin-top: 90px;
        font-size: 35px;
        font-family: Montserrat, Montserrat-ExtraBold;
        // font-weight: ExtraBold;
        font-weight: bolder;
        color: #ffffff;
        letter-spacing: -1px;
        .price-unit {
            font-size: 13px;
            font-family: Montserrat, Montserrat-Regular;
            font-weight: 400;
            color: #c9caca;
            position: relative;
            top: -16px;
        }
        .price-desc {
            margin-top: 2px;
            font-size: 14px;
            font-family: Montserrat, Montserrat-Light;
            font-weight: 300;
            color: #dcdddd;
            line-height: 14px;
            letter-spacing: -1px;
        }
    }
    .share-con {
        margin-top: 27px;
        display: flex;
        .share-btn {
            cursor: pointer;
            flex: 1;
            background: linear-gradient(to right, #ba45c8, #2b6bd2);

            line-height: 47px;
            font-size: 16px;
            font-family: Montserrat, Montserrat-Bold;
            font-weight: 700;
            text-align: center;
            color: #ffffff;
            letter-spacing: 1px;
        }
        .share-icon-con {
            cursor: pointer;
            width: 57px;
            height: 47px;
            margin-left: 12px;
            border: 2px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            .search-icon {
                height: 24px;
                width: auto;
            }
        }
    }
    .hash-con {
        margin-top: 19px;
        display: flex;
        align-items: center;
        .hash-text {
            flex: 1;
            font-size: 14px;
            font-family: Montserrat, Montserrat-Light;
            font-weight: 300;
            color: #ffffff;
            line-height: 14px;
            letter-spacing: -1px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .hash-icon-con {
            cursor: pointer;
            width: 57px;
            height: 47px;
            margin-left: 12px;
            border: 2px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            .hash-icon {
                height: 23px;
                width: auto;
            }
        }
    }
}

.expand-con {
    .expand {
        margin-top: 30px;
        height: 91px;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 22px;
        padding-right: 25px;
        .expand-text {
            font-size: 40px;
            font-family: Montserrat, Montserrat-ExtraBold;
            // font-weight: ExtraBold;
            font-weight: bolder;
            color: #ffffff;
        }
        .expand-icon {
            cursor: pointer;
            width: 15px;
            // height: 16px;
        }
    }
    .detail-desc {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 24px;
        font-size: 14px;
        font-family: Montserrat, Montserrat-Regular;
        font-weight: 400;
        color: #c9caca;
        line-height: 21px;
        // letter-spacing: -1px;
    }
    .base-set {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 58px;
        padding-bottom: 35px;
        border-bottom: 2px solid #c9caca;

        font-size: 18px;
        font-family: Montserrat, Montserrat-Bold;
        font-weight: 700;
        color: #ffffff;
        line-height: 17px;
    }
    .view-history {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 72px;
        text-align: center;
        .view-btn {
            cursor: pointer;
            font-size: 12px;
            font-family: Montserrat, Montserrat-Medium;
            font-weight: 500;
            color: #ffffff;
            letter-spacing: 2px;
            border-bottom: 3px solid #ffffff;
        }
    }
}

.more-moments {
    margin-top: 70px;
    .more-moments-title {
        margin-left: 20px;
        font-size: 29px;
        font-family: Montserrat, Montserrat-Bold;
        font-weight: 700;
        color: #ffffff;
        line-height: 26px;
    }
    .more-moments-list {
        margin-top: 80px;
    }
}
</style>
