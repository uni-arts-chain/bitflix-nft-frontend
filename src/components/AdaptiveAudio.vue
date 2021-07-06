/** * Created by Lay Hunt on 2021-01-26 10:20:17. */
<template>
    <div
        class="video"
        :class="{ origin: !isPreview }"
        ref="videoPlay"
        v-loading="isLoading"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0)"
    >
        <div
            class="video-player-container"
            :class="{ responsive: isResponsive }"
            ref="videoContainer"
        >
            <div class="audio-wrapper" v-if="!isPreview">
                <audio
                    :preload="preload"
                    :src="source"
                    ref="video"
                    class="audio-player"
                    @canplay="canplay"
                    :loop="isLoop"
                    :muted="isMute"
                ></audio>
                <img :src="cover" @load="imgLoad" class="audio-poster" />
            </div>
            <img
                v-else
                :src="cover"
                @load="imgLoad"
                ref="video"
                :class="{
                    'responsive-horizontal': isResponsive && isResponsiveHorizontal,
                    'responsive-vertical': isResponsive && !isResponsiveHorizontal,
                    horizontal: isHorizontal && !isResponsive,
                }"
            />
        </div>
        <div class="video-control" :style="`bottom: ${bottomHeight}px`" v-if="isPlay && !isCover">
            <div class="progress">
                <div class="progress-body">
                    <div class="progress-bar" :style="`width:${progress}%`"></div>
                    <div class="progress-circle" :style="`left:calc(${progress}% - 3px)`"></div>
                </div>
            </div>
            <div class="icon" @click.stop="play" v-if="isPause">
                <icon-svg icon-class="play" />
            </div>
            <div class="icon" @click.stop="pause" v-else>
                <icon-svg icon-class="pause" />
            </div>
            <div class="icon" @click.stop="mute">
                <icon-svg v-if="isMute" icon-class="volume" class="volume" />
                <icon-svg v-else icon-class="mute" class="volume" />
            </div>
            <!-- <div class="icon" @click.stop="fullscreen" v-if="!isFullscreen">
                <icon-svg icon-class="fullscreen" class="fullscreen" />
            </div>
            <div class="icon" @click.stop="smallscreen" v-else>
                <icon-svg icon-class="smallscreen" class="fullscreen" />
            </div> -->
        </div>
    </div>
</template>
<script>
import { BigNumber } from "bignumber.js";
export default {
    name: "video-player",
    props: {
        source: {
            type: String,
            required: true,
            default: "",
        },
        preload: {
            type: String,
            default: "metadata",
        },
        isPreview: {
            type: Boolean,
            default: false,
        },
        isPlay: {
            type: Boolean,
            default: false,
        },
        isLoop: {
            type: Boolean,
            default: false,
        },
        cover: {
            type: String,
            default: "",
        },
        isCover: {
            type: Boolean,
            default: false,
        },
        isResponsive: {
            type: Boolean,
            default: true,
        },
    },
    created() {
        if (this.isPreview) {
            this.isLoading = false;
        }
    },
    data() {
        return {
            isHorizontal: false,
            isMute: false,
            isFullscreen: false,
            isLoading: true,
            isResponsiveHorizontal: false,
            bottomHeight: 0,
            isOpting: false,
            isPause: true,
            currentTime: 0,
            duration: 0,
        };
    },
    computed: {
        progress() {
            return new BigNumber(this.currentTime).div(this.duration).times(100).toFixed(0, 1);
        },
        curTime() {
            let ct = new BigNumber(this.currentTime);
            let minutes = ct.div(60);
            let seconds = ct.mod(60);
            return (
                (minutes.lt(10) ? "0" + minutes.toFixed(0, 1) : minutes.toFixed(0, 1)) +
                ":" +
                (seconds.lt(10) ? "0" + seconds.toFixed(0, 1) : seconds.toFixed(0, 1))
            );
        },
        totalTime() {
            let ct = new BigNumber(this.duration);
            let minutes = ct.div(60);
            let seconds = ct.mod(60);
            return (
                (minutes.lt(10) ? "0" + minutes.toFixed(0, 1) : minutes.toFixed(0, 1)) +
                ":" +
                (seconds.lt(10) ? "0" + seconds.toFixed(0, 1) : seconds.toFixed(0, 1))
            );
        },
    },
    mounted() {
        this.$refs.video.addEventListener("timeupdate", () => {
            this.currentTime = this.$refs.video.currentTime;
        });
    },
    methods: {
        imgLoad() {
            if (!this.isResponsive) {
                let width = this.$refs.video.offsetWidth;
                let height = this.$refs.video.offsetHeight;
                this.isHorizontal = width > height ? true : false;
            } else {
                let obj = this.$refs.video;
                let width = obj ? obj.offsetWidth : "100%";
                let height = obj ? obj.offsetHeight : "230px";
                let boxWidth = this.width;
                let boxHeight = this.height;
                boxWidth = this.$refs.videoContainer ? this.$refs.videoContainer.offsetWidth : 0;
                boxHeight = this.$refs.videoContainer ? this.$refs.videoContainer.offsetHeight : 0;
                if (width < height) {
                    this.isResponsiveHorizontal = height <= boxHeight ? false : true;
                } else {
                    this.isResponsiveHorizontal = width <= boxWidth ? true : false;
                }
            }
            this.$emit("ImgLoaded", {
                height: this.$refs.videoPlay.offsetHeight,
                width: this.$refs.videoPlay.offsetWidth,
            });
            this.isLoading = false;
        },
        canplay() {
            if (!this.isResponsive) {
                let width = this.$refs.video.offsetWidth;
                let height = this.$refs.video.offsetHeight;
                this.isHorizontal = width > height ? true : false;
                this.isLoading = false;
            } else {
                let obj = this.$refs.video;
                let width = obj ? obj.offsetWidth : "100%";
                let height = obj ? obj.offsetHeight : "230px";
                let boxWidth = this.width;
                let boxHeight = this.height;
                boxWidth = this.$refs.videoContainer ? this.$refs.videoContainer.offsetWidth : 0;
                boxHeight = this.$refs.videoContainer ? this.$refs.videoContainer.offsetHeight : 0;
                if (width < height) {
                    this.isResponsiveHorizontal = height <= boxHeight ? false : true;
                } else {
                    this.isResponsiveHorizontal = width <= boxWidth ? true : false;
                }
                this.isLoading = false;
            }
            let width = this.$refs.video.offsetWidth;
            let height = this.$refs.video.offsetHeight;

            if (width < height) {
                if (this.$refs.video.offsetHeight > this.$refs.videoContainer.offsetHeight) {
                    let rato = this.$refs.video.offsetHeight / this.$refs.video.offsetWidth;
                    this.$emit("ImgLoaded", {
                        height: this.$refs.videoContainer.offsetHeight,
                        width: this.$refs.videoContainer.offsetHeight / rato,
                    });
                } else {
                    this.$emit("ImgLoaded", {
                        height: this.$refs.video.offsetHeight,
                        width: this.$refs.video.offsetWidth,
                    });
                }
            } else {
                if (this.$refs.video.offsetWidth > this.$refs.videoContainer.offsetWidth) {
                    let rato = this.$refs.video.offsetWidth / this.$refs.video.offsetHeight;
                    this.$emit("ImgLoaded", {
                        height: this.$refs.videoContainer.offsetWidth / rato,
                        width: this.$refs.videoContainer.offsetWidth,
                    });
                    this.bottomHeight =
                        (this.$refs.videoContainer.offsetHeight -
                            this.$refs.videoContainer.offsetWidth / rato) /
                        2;
                } else {
                    this.$emit("ImgLoaded", {
                        height: this.$refs.video.offsetHeight,
                        width: this.$refs.video.offsetWidth,
                    });
                }
            }

            this.duration = this.$refs.video.duration;
        },
        play() {
            this.$refs.video.play();
            this.isPause = false;
        },
        pause() {
            this.$refs.video.pause();
            this.isPause = true;
        },
        mute() {
            this.isMute = !this.isMute;
            this.$refs.video.muted = !this.isMute;
        },
        fullscreen() {
            this.$refs.videoPlay.requestFullscreen();
            this.isFullscreen = true;
        },
        smallscreen() {
            document.exitFullscreen();
            this.isFullscreen = false;
        },
    },
};
</script>
<style lang="scss" scoped>
.video {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.video.origin {
    width: 296px;
    height: 296px;
    position: relative;
    overflow: hidden;
}
.video-player-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    video {
        height: 100%;
        width: auto;
    }
    video.horizontal {
        height: auto;
        width: 100%;
    }
}
.video-player-container.responsive {
    video {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        transition: opacity 0.3s ease;
        opacity: 1;
    }

    video.responsive-horizontal {
        width: 100%;
        height: auto;
    }

    video.responsive-vertical {
        height: 100%;
        width: auto;
    }

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        transition: opacity 0.3s ease;
        opacity: 1;
    }

    img.responsive-horizontal {
        width: 100%;
        height: auto;
    }

    img.responsive-vertical {
        height: 100%;
        width: auto;
    }
}
.video-control {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding-right: 10px;
    background: linear-gradient(
        180deg,
        transparent 0,
        rgb(0, 0, 0, 0.02) 10%,
        rgb(0, 0, 0, 0.1) 30%,
        rgba(0, 0, 0, 0.3) 90%
    );
    .icon {
        font-size: 22px;
        color: white;
        margin: 0 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .progress {
        width: 100%;
        padding: 0 20px;
        height: 100%;
        position: relative;
        .progress-body {
            position: absolute;
            height: 3px;
            width: calc(90% - 40px);
            left: 50%;
            border-radius: 2px;
            background-color: rgba(218, 218, 218, 0.32);
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
        .progress-bar {
            position: absolute;
            width: 0%;
            height: 3px;
            border-radius: 2px;
            background-color: white;
        }
        .progress-circle {
            position: absolute;
            top: -3px;
            left: -3px;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background-color: white;
        }
    }
}

.video:hover .video-control {
    opacity: 1;
}

.audio-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    img.audio-poster {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
}
</style>
