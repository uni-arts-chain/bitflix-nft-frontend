/** * Created by Lay Hunt on 2021-05-31 14:53:59. */
<template>
    <div class="action-movie">
        <div class="wrapper">
            <div class="content">
                <div class="title">{{ title }}</div>
                <!-- <img class="cover" :src="coverUrl" /> -->
                <div class="cover">
                    <AdaptiveImage
                        class="cover"
                        width="100%"
                        height="100%"
                        :isPreview="true"
                        :cover="coverUrl"
                        :isOrigin="false"
                    />
                </div>
                <img class="coin" v-if="coinUrl" :src="coinUrl" />
                <div class="status" v-if="status === 'out'">SOLD OUT</div>
            </div>
        </div>
    </div>
</template>
<script>
import AdaptiveImage from "@/components/AdaptiveImage";
export default {
    name: "action-movie",
    components: {
        AdaptiveImage,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        coverUrl: {
            type: String,
            required: true,
        },
        coinUrl: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "",
        },
    },
};
</script>
<style lang="scss" scoped>
.action-movie {
    .wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        padding-top: 34%;
        padding-left: 2.3%;
        background: url(~@/assets/images/action-bg@2x.png) no-repeat;
        background-size: 100% 100%;
        transform: rotateZ(-12deg);
    }
    .content {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .title {
        font-size: inherit;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        line-height: 35px;
        letter-spacing: 1px;
        width: calc(100% - 80px);
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 2;
    }
    .cover {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }
    .coin {
        position: absolute;
        z-index: 1;
        top: 10px;
        right: 10px;
        width: 21%;
    }
    .status {
        position: absolute;
        z-index: 2;
        top: 80px;
        left: 10px;
        background-color: #ffffff;
        font-size: 30px;
        padding: 6px 20px;
        text-align: center;
        color: #000;
        font-family: "Montserrat-Bold";
        transform: scale(1.15);
    }
}
</style>
