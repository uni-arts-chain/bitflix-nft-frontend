/** * Created by Lay Hunt on 2021-05-31 14:53:59. */
<template>
    <div class="action-movie">
        <div class="wrapper">
            <img class="bg" src="@/assets/images/action-bg@2x.png" />
            <div class="title">{{ title }}</div>
            <!-- <img class="cover" :src="coverUrl" /> -->
            <div class="cover">
                <AdaptiveImage
                    class="cover"
                    width="100%"
                    height="100%"
                    :url="coverUrl"
                    :isOrigin="false"
                />
            </div>
            <img class="coin" v-if="coinUrl" :src="coinUrl" />
            <div class="status" v-if="status === 'out'">SOLD OUT</div>
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
    }
    .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        transform: rotateZ(-13deg);
    }
    .title {
        font-size: inherit;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        line-height: 35px;
        letter-spacing: 1px;
        width: 60%;
        position: absolute;
        top: 40%;
        left: 21px;
        transform: rotateZ(-13deg);
        z-index: 2;
    }
    .cover {
        width: 98%;
        height: 68%;
        position: absolute;
        bottom: 0%;
        left: 3.1%;
        transform: rotateZ(-6.5deg);
        z-index: 1;
    }
    .coin {
        position: absolute;
        z-index: 1;
        top: 30%;
        right: 15px;
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
        transform: rotateZ(-13deg) scale(1.15);
    }
}
</style>
