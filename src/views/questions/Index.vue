<template>
    <div class="questions-page">
        <div class="questions">
            <div class="question question-top">
                <div class="question-left">
                    <div class="left-con">
                        <img
                            class="question-image"
                            src="@/assets/images/questions/image1@2x.png"
                        />
                    </div>
                </div>
                <div class="question-right">
                    <div class="right-con">
                        <div class="title">To be added</div>
                        <p class="desc">To be added</p>
                        <button class="start-button">
                            LEARN MORE ABOUT BITFLIX
                        </button>
                    </div>
                </div>
            </div>
            <div class="question question-odd">
                <div class="question-left">
                    <div class="left-con">
                        <div class="title">COLLECT EPIC BITFLIX MOMENTS</div>
                        <p class="desc">To be added</p>
                    </div>
                </div>
                <div class="question-right">
                    <div class="right-con">
                        <img
                            class="question-image"
                            src="@/assets/images/questions/image2@2x.png"
                        />
                    </div>
                </div>
                <img
                    class="line-set"
                    src="@/assets/images/packs-line-set@2x.png"
                />
            </div>
            <div class="question question-even">
                <img
                    class="line-set"
                    src="@/assets/images/packs-line-set_reverse@2x.png"
                />
                <div class="question-left">
                    <div class="left-con">
                        <img
                            class="question-image"
                            src="@/assets/images/questions/image3@2x.png"
                        />
                    </div>
                </div>
                <div class="question-right">
                    <div class="right-con">
                        <div class="title">CLASSIC MOVIE SCENES</div>
                        <p class="desc">To be added</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Questions",
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.questions-page {
    // margin-top: 80px;
    // margin-bottom: 157px;
}
.questions {
    .question {
        position: relative;
        min-height: 540px;
        display: flex;
        align-items: center;
        .question-left,
        .question-right {
            width: 50%;
            z-index: 1;
        }
        .question-left {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }
    .question-top {
        .left-con {
            margin-right: 120px;
        }
        .question-image {
            max-height: 365px;
        }
        .right-con {
            margin-left: 16px;
            max-width: 595px;
        }
    }
    .question-odd {
        .left-con {
            margin-right: 55px;
            max-width: 530px;
        }
        .right-con {
            margin-left: 35px;
        }
        .question-image {
            max-height: 270px;
        }
    }
    .question-even {
        .left-con {
            margin-right: 80px;
        }
        .right-con {
            margin-left: 35px;
            max-width: 530px;
        }
        .question-image {
            max-height: 270px;
        }
    }
}

.line-set {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.title {
    font-size: 47px;
    font-family: Montserrat-ExtraBold, Montserrat;
    // font-weight: ExtraBold;
    font-weight: bolder;
    color: #ffffff;
    line-height: 46px;
}

.desc {
    margin-top: 24px;
    max-width: 500px;
    font-size: 17px;
    font-family: "Montserrat-Regular";
    font-weight: 600;
    color: #ffffff;
    line-height: 30px;
}
.start-button {
    width: 100%;
    margin-top: 30px;
    background: linear-gradient(to right, #ba45c8, #2b6bd2);
    // width: 368px;
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
</style>
