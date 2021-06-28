/** * Created by Lay Hunt on 2021-05-31 10:44:38. */
<template>
    <div class="cate">
        <div class="cate-top">
            <div class="container">
                <div class="title">PACKS</div>
                <div class="cate-wrapper">
                    <div class="item">
                        <AdaptiveVideo
                            width="100%"
                            height="100%"
                            :isLoop="true"
                            :source="packVideo"
                            :isPlay="true"
                        />
                        <!-- <img
                            class="item-title"
                            src="@/assets/images/packs-cate-title@2x.png"
                            alt=""
                        />
                        <h2 class="item-h2-title">MOVIE NFT</h2>
                        <p class="item-desc">To be added</p>
                        <div class="label-text">
                            <span>RESERVE YOUR PACK NOW</span>
                        </div>
                        <ActionMovie
                            title="MOVIE NFT"
                            :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                            :coinUrl="`${require('@/assets/images/cate-coin2.png')}`"
                        /> -->
                    </div>
                    <div class="item">
                        <img
                            style="height: 100%"
                            src="@/assets/images/packs/banner-item.jpeg"
                            alt=""
                        />
                        <!-- <div class="action-movie-wrapper">
                            <div class="wrapper">
                                <img class="bg" src="@/assets/images/action-bg@2x.png" />
                                <div class="title">ACTIVIST NFT</div>
                                <img class="cover" src="@/assets/images/action-cover@2x.png" />
                                <img class="coin" src="@/assets/images/cate-coin2.png" />
                            </div>
                        </div>
                        <div class="tilte-body">
                            <h2 class="item-h2-title">ACTIVIST NFT</h2>
                            <p class="item-desc">To be added</p>
                        </div> -->
                    </div>
                </div>
            </div>
            <img class="line" src="@/assets/images/packs-line@2x.png" />
            <img class="line2" src="@/assets/images/packs-line2@2x.png" />
        </div>
        <!-- <div class="section">
            <div class="container">
                <div class="section-title">
                    OPEN PACKS TO FIND EXCITING NEW MOMENTS
                </div>
                <div class="section-cate-body">
                    <div class="section-cate">
                        <div class="section-cate-title">To be added</div>
                        <div class="section-cate-desc"></div>
                    </div>
                    <div class="section-cate">
                        <div class="section-cate-title">To be added</div>
                        <div class="section-cate-desc"></div>
                    </div>
                    <div class="section-cate">
                        <div class="section-cate-title">
                            To be added
                        </div>
                        <div class="section-cate-desc"></div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
// import ActionMovie from "@/components/ActionMovie";
import AdaptiveVideo from "@/components/AdaptiveVideo";
import packVideo from "@/assets/video/pack-item.mp4";
export default {
    name: "cate",
    components: {
        // ActionMovie,
        AdaptiveVideo,
    },
    data() {
        return {
            packVideo,
        };
    },
};
</script>
<style lang="scss" scoped>
.cate {
    position: relative;
    overflow: hidden;
    .cate-top {
        background-color: black;
        position: relative;
        .container {
            overflow: hidden;
            z-index: 1;
            position: relative;
        }
        .container > .title {
            font-size: 60px;
            font-family: "Montserrat-Bold";
            font-weight: Bold;
            text-align: left;
            margin-top: 10px;
            color: #ffffff;
            margin-bottom: 50px;
        }
        .container > .title::after {
            content: "";
            height: 6px;
            width: 40px;
            background-color: white;
            display: block;
        }
    }
}

.line {
    position: absolute;
    bottom: -202px;
    width: 100%;
    left: 0;
    z-index: 0;
}

.line2 {
    position: absolute;
    bottom: -540px;
    width: 100%;
    left: 0;
    z-index: 0;
}

.item {
    height: 416px;
    /* float: left; */
    cursor: pointer;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.item:nth-child(1) {
    /* background-image: url(~@/assets/images/cate-bg@2x.png); */
    width: 700px;
}
.item:nth-child(2) {
    margin-left: 10px;
    /* background: linear-gradient(to top, rgba(186, 69, 200, 1), rgba(43, 107, 210, 1)); */
    width: 278px;
}
.item:nth-child(2)::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-image: url(~@/assets/images/cate-bg2@2x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.cate-wrapper {
    overflow: hidden;
    margin-bottom: 52px;
    display: flex;
    justify-content: center;
}
.item-title {
    width: 261px;
    margin-left: 21px;
    margin-top: 40px;
    margin-bottom: 154px;
}
.item-h2-title {
    position: relative;
    z-index: 3;
    font-size: 43px;
    font-family: "Montserrat-Bold";
    font-weight: Bold;
    text-align: left;
    color: #ffffff;
    line-height: 41px;
}
.item-h2-title {
    position: relative;
    z-index: 3;
    font-size: 43px;
    font-family: "Montserrat-Bold";
    font-weight: Bold;
    text-align: left;
    color: #ffffff;
    line-height: 41px;
    margin-left: 32px;
}
.item-desc {
    font-size: 14px;
    font-family: "Montserrat-Bold";
    font-weight: Bold;
    text-align: left;
    color: #ffffff;
    line-height: 41px;
    margin-left: 32px;
    position: relative;
    z-index: 3;
}
.label-text {
    width: 100%;
    font-size: 32px;
    height: 103px;
    display: flex;
    z-index: 0;
    align-items: center;
    position: absolute;
    bottom: -4px;
    background: url(~@/assets/images/cate-item-label@2x.png) 100%/100% no-repeat;
    background-position: 0 2px;
    > span {
        font-family: "Montserrat-Bold";
        position: absolute;
        bottom: 5px;
        left: 24px;
        transform: rotateZ(-5deg);
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        line-height: 29px;
    }
}
.action-movie {
    position: absolute;
    right: 70px;
    top: 60px;
    transform: rotateZ(-10deg);
    width: 267px;
    height: 256px;
    font-size: 30px;
}
.action-movie-wrapper {
    width: 300px;
    height: 329px;
    position: absolute;
    right: -8%;
    .wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        /* transform: rotateZ(-13deg); */
    }
    .title {
        font-size: 30px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        line-height: 35px;
        letter-spacing: 1px;
        width: 60%;
        position: absolute;
        top: 40%;
        left: 7%;
        /* transform: rotateZ(-13deg); */
        z-index: 2;
    }
    .cover {
        width: 98%;
        height: 68%;
        position: absolute;
        bottom: -2%;
        left: 4%;
        /* transform: rotateZ(-13deg); */
        z-index: 1;
    }
    .coin {
        position: absolute;
        z-index: 1;
        bottom: 5%;
        right: 2%;
        width: 60px;
        height: 60px;
    }
}
.tilte-body {
    position: absolute;
    bottom: 20px;
    z-index: 3;
    .item-h2-title {
        font-size: 34px;
        margin-left: 20px;
        line-height: 34px;
    }
    .item-desc {
        margin-left: 20px;
        line-height: 20px;
    }
}

.section {
    background-color: rgba(0, 0, 0, 0.5);
    height: 422px;
    position: relative;
    .container {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
    }
    .section-title {
        font-size: 36px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: center;
        color: #ffffff;
        margin-bottom: 54px;
    }
    .section-cate {
        margin: 0 20px;
    }
    .section-cate-title {
        min-width: 380px;
    }
    .section-cate-title,
    .section-cate-title > span {
        max-width: 380px;
        font-size: 17px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: center;
        color: #ffffff;
        letter-spacing: 0px;
        margin-bottom: 12px;
    }
    .section-cate-desc {
        max-width: 380px;
        font-size: 14px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: center;
        color: #ffffff;
        letter-spacing: 0px;
    }
    .section-cate-body {
        display: flex;
        justify-content: space-between;
    }
}
</style>
