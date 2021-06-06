<template>
    <div class="collect">
        <div class="top-time">
            <span class="time" :style="colorStyle">{{ time }}</span>
        </div>
        <div class="collect-content">
            <div class="title">{{ title }}</div>
            <div class="sub-title">{{ desc }}</div>

            <div class="poster">
                <div class="poster-image">
                    <img src="@/assets/images/reward/collect1@2x.png" />
                </div>
                <div class="poster-slogan">REWARD</div>
            </div>

            <div class="progress">
                <div class="progress-bar">
                    <div class="bar"></div>
                </div>
                <span class="progress-rate">0/9</span>
            </div>
            <div class="more-btn">VIEW MORE DETAILS ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Reward",
    props: {
        colorStyle: {
            type: Object,
            default: () => ({
                "background-color": "#d73cd6",
            }),
        },
        time: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        desc: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.collect {
    position: relative;
    padding-top: 28px;
}
.top-time {
    margin-left: 31px;
    .time {
        padding: 13px 20px 14px 27px;
        // background-color: #d73cd6;
        font-size: 19px;
        color: #ffffff;
        letter-spacing: 1px;
        font-family: Montserrat, Montserrat-ExtraBold;
        // font-weight: ExtraBold;
        font-weight: bolder;
    }
}
.collect-content {
    background: #0c3061;
    padding: 33px 30px 34px 31px;
    .title {
        font-size: 30px;
        color: #ffffff;
        font-family: Montserrat, Montserrat-ExtraBold;
        // font-weight: ExtraBold;
        font-weight: bolder;
    }
    .sub-title {
        margin-top: 2px;
        font-size: 17px;
        font-family: Montserrat, Montserrat-SemiBold;
        // font-weight: SemiBold;
        font-weight: 500;
        color: #818394;
    }
    .poster {
        position: relative;
        margin-top: 22px;
        padding: 11px;
        height: 283px;
        background: #000000;
        border-radius: 11px;
        display: flex;
        align-items: center;
        .poster-image {
            width: 356px;
            height: 197px;
            margin-left: 82px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                max-height: 100%;
            }
        }
        .poster-slogan {
            transform: rotateZ(-90deg) translateX(-60px);
            margin-left: 59px;
            width: 22px;
            font-family: Montserrat, Montserrat-ExtraBold;
            // font-weight: ExtraBold;
            font-weight: bolder;
            font-size: 31px;
            color: #166dce;
        }
    }
}
.progress {
    margin-top: 58px;
    display: flex;
    align-items: center;
    .progress-bar {
        width: 466px;
        height: 17px;
        background-color: #828495;
        .bar {
        }
    }
    .progress-rate {
        margin-left: 13px;
        font-size: 24px;
        text-align: center;
        color: #ffffff;
        letter-spacing: 1px;
        font-family: Montserrat, Montserrat-ExtraBold;
        // font-weight: ExtraBold;
        font-weight: bolder;
    }
}
.more-btn {
    margin-top: 11px;
    cursor: pointer;
    font-size: 17px;
    font-family: Montserrat, Montserrat-SemiBold;
    // font-weight: SemiBold;
    font-weight: 500;
    text-align: right;
    color: #818394;
    margin-right: 20px;
    &:hover {
        color: #ffffff;
    }
}
</style>
