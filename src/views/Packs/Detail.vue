/** * Created by Lay Hunt on 2021-06-01 17:31:01. */
<template>
    <div class="detail">
        <div class="content">
            <div
                class="left-bg"
                :style="`${tabBgWidth ? 'width:' + tabBgWidth + 'px' : ''}`"
            ></div>
            <div
                class="right-bg"
                :style="`${tabBgWidth ? 'width:' + tabBgWidth + 'px' : ''}`"
            ></div>
            <div class="container" ref="container">
                <img
                    class="bg-arrow"
                    src="@/assets/images/packs-detail-arrow@2x.png"
                />
                <div class="nft">
                    <AdaptiveView :nft="BannerMp4" />
                </div>
                <div class="tab">
                    <div class="tag-item">
                        <router-link to="/packs">&lt; PACKS</router-link>
                    </div>
                </div>
                <div class="form-wrapper">
                    <div class="form-content">
                        <div class="form-content-container">
                            <div class="nft-name">
                                BASE SET (SERIES 2, RELEASE 33)
                            </div>
                            <div class="total-amount">307500 Total</div>
                            <div class="nft-label">NOW ON SALE!</div>
                            <div class="price-body">
                                <div class="price">
                                    <div class="value">$9.00</div>
                                    <div class="unit">USD</div>
                                </div>
                                <div class="balance">307500 LEFT</div>
                            </div>
                            <div class="button-group">
                                <button>JOIN DROP</button>
                                <div class="share"></div>
                            </div>
                            <div class="learn-about">
                                LEARN ABOUT OUR DROP PROCESS
                            </div>
                            <div class="requirements">
                                <div class="requirements-title">
                                    Requirements
                                </div>
                                <div class="requirements-desc">
                                    This pack release is only accessible to
                                    those who reserved a slot earlier in the
                                    week. If you didn't reserve your spot for
                                    this week's release, make sure to reserve
                                    your spot for the next Base Set Pack Release
                                    on May 14!
                                </div>
                            </div>
                            <div class="enter-button">
                                ENTER SHOWCASE CONTEST >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="container">
                <div class="info-body">
                    <el-collapse accordion v-model="activeNames">
                        <el-collapse-item name="1">
                            <template slot="title">
                                <div class="collapse-title">PACK DETAILS</div>
                            </template>
                            <div class="info-desc">
                                <div class="info-sub-label">
                                    <span>SOLD BY</span
                                    ><span style="font-weight: 400"
                                        >Bitflix</span
                                    >
                                </div>
                                <div class="info-desc-content">
                                    <div class="info-sub-title">
                                        Pack details
                                    </div>
                                    <div class="info-sub-desc">
                                        <p>Bitflix Test</p>
                                    </div>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AdaptiveView from "@/components/AdaptiveView";
import Mp4 from "@/assets/video/banner-mp4.mp4";
import { Collapse, CollapseItem } from "element-ui";
export default {
    name: "detail",
    components: {
        AdaptiveView,
        [Collapse.name]: Collapse,
        [CollapseItem.name]: CollapseItem,
    },
    data() {
        return {
            tabBgWidth: 0,
            activeNames: ["1"],
            BannerMp4: {
                img_main_file1: {
                    url: Mp4,
                },
            },
        };
    },
    mounted() {
        window.addEventListener("resize", () => {
            let widthBg =
                (window.innerWidth - this.$refs.container.offsetWidth) / 2;
            if (widthBg <= 0) {
                widthBg = 0;
            }
            this.tabBgWidth = widthBg;
        });
    },
};
</script>
<style lang="scss" scoped>
.detail {
    min-height: 1400px;
}
.content {
    width: 100%;
    height: 600px;
    background-image: url(~@/assets/images/packs-detail-content-bg@2x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .container {
        position: relative;
        height: 100%;
    }
    .nft {
        width: 595px;
        height: 399px;
        position: absolute;
        top: 50%;
        left: 80px;
        z-index: 3;
        transform: translateY(-50%);
    }
    .left-bg {
        position: absolute;
        left: 0;
        top: 0;
        height: 38px;
        background: black;
        width: calc((100% - 1200px) / 2);
    }
    .right-bg {
        position: absolute;
        right: 0;
        top: 0;
        height: 38px;
        background: black;
        width: calc((100% - 1200px) / 2);
    }
    .tab {
        height: 38px;
        .tag-item {
            width: calc(100% - 400px);
            background: black;
            height: 100%;
            font-size: 17px;
            line-height: 38px;
            text-align: left;
            color: #ffffff;
        }
        .tag-item > span {
            cursor: pointer;
        }
    }
    .form-wrapper {
        width: 400px;
        height: 1226px;
        background: black;
        position: absolute;
        right: 0;
    }
    .form-content {
        position: relative;
        z-index: 3;
        .nft-name {
            font-size: 36px;
            max-width: 80%;
            line-height: 38px;
            font-family: "Montserrat-Bold";
            font-weight: ExtraBold;
            text-align: left;
            color: #ffffff;
            margin-bottom: 7px;
        }
        .total-amount {
            font-size: 13px;
            font-family: "Montserrat-Regular";
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            letter-spacing: 0px;
            margin-bottom: 19px;
        }
        .nft-label {
            font-size: 12px;
            font-family: "Montserrat-Bold";
            font-weight: Bold;
            text-align: center;
            color: #d63ed5;
            border: 1px solid #d63ed5;
            padding: 10px 20px;
            display: inline-block;
            border-radius: 20px;
        }
        .price-body {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 33px;
            .price {
                display: flex;
                align-items: flex-start;
                .value {
                    font-size: 35px;
                    font-family: "Montserrat-Bold";
                    font-weight: Bold;
                    text-align: left;
                    color: #ffffff;
                    letter-spacing: -1px;
                    margin-right: 10px;
                }
                .unit {
                    font-size: 13px;
                    font-family: "Montserrat-Regular";
                    font-weight: 400;
                    text-align: left;
                    color: #c9caca;
                    letter-spacing: 0px;
                }
            }
            .balance {
                font-size: 17px;
                font-family: "Montserrat-Regular";
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                letter-spacing: 0px;
            }
        }
        .button-group {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            > button {
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
                width: 291px;
                cursor: pointer;
                height: 43px;
                font-size: 14px;
                font-family: "Montserrat-Bold";
                font-weight: 700;
                text-align: center;
                color: #ffffff;
            }
            .share {
                cursor: pointer;
                border: 2px solid white;
                width: 50px;
                height: 42px;
                background: url(~@/assets/images/share.png) no-repeat;
                background-size: 19px 21px;
                background-position: center;
            }
        }
        .learn-about {
            margin-top: 18px;
            cursor: pointer;
            width: 291px;
            font-size: 12px;
            font-family: "Montserrat-Bold";
            font-weight: Bold;
            text-align: left;
            color: #9fa0a0;
            letter-spacing: 1px;
            padding-bottom: 3px;
            border-bottom: 2px solid #9fa0a0;
            margin-bottom: 74px;
        }
        .requirements {
            margin-top: 74px;
            padding-top: 41px;
            border-top: 2px solid #9fa0a0;
            .requirements-title {
                font-size: 18px;
                font-family: "Montserrat-Bold";
                font-weight: Bold;
                text-align: left;
                color: #ffffff;
                letter-spacing: 0px;
            }
            .requirements-desc {
                margin-top: 19px;
                font-size: 13px;
                font-family: "Montserrat-Medium";
                font-weight: 500;
                text-align: left;
                color: #9fa0a0;
                line-height: 18px;
            }
        }
        .enter-button {
            font-size: 12px;
            font-family: "Montserrat-Bold";
            font-weight: Bold;
            text-align: center;
            color: #ffffff;
            letter-spacing: 1px;
            padding: 13px 0;
            width: 100%;
            border: 2px solid white;
            margin-top: 15px;
            cursor: pointer;
        }
    }
    .form-content::before {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        left: -38px;
        top: 0;
        z-index: 0;
        border-top: 48px solid black;
        border-left: 48px solid black;
        border-right: 48px solid transparent;
        border-bottom: 48px solid transparent;
    }
    .form-content-container {
        position: relative;
        z-index: 1;
        padding: 37px 24px;
        text-align: left;
    }
    .bg-arrow {
        position: absolute;
        bottom: 0;
        left: 100px;
        width: 210px;
    }
}
.info {
    .info-body {
        width: calc(100% - 400px);
        padding: 45px 0;
        padding-right: 20px;
    }
    .el-collapse {
        border-color: transparent;
    }
    .el-collapse-item {
        ::v-deep .el-collapse-item__header {
            padding: 20px 21px;
            background-color: black;
            height: 85px;
            border-color: transparent;
        }
        ::v-deep .el-collapse-item__wrap {
            background-color: transparent;
            border-color: transparent;
        }
        ::v-deep .el-collapse-item__arrow {
            color: white;
            font-size: 23px;
            font-weight: 600;
        }
    }
    .collapse-title {
        font-size: 40px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
    }
    .info-desc {
        padding-top: 15px;
        display: flex;
        .info-sub-label {
            width: 180px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid #b5b5b5;
            > span {
                width: 88px;
                line-height: 30px;
                font-size: 21px;
                font-family: "Montserrat";
                font-weight: 300;
                text-align: left;
                color: #ffffff;
                letter-spacing: -1px;
                display: flex;
                flex-direction: column;
            }
        }
        .info-desc-content {
            width: calc(100% - 180px);
        }
        .info-sub-title {
            font-size: 17px;
            font-family: "Montserrat-Bold";
            font-weight: Bold;
            text-align: left;
            margin-left: 25px;
            color: #ffffff;
        }
        .info-sub-desc {
            margin-left: 25px;
            padding-bottom: 70px;
            p {
                font-size: 13px;
                font-family: "Montserrat-Regular";
                font-weight: 400;
                line-height: 18px;
                text-align: left;
                color: #ffffff;
                margin-top: 20px;
            }
        }
    }
}
</style>
