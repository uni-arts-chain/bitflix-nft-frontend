/** * Created by Lay Hunt on 2021-05-31 14:53:59. */
<template>
    <div class="action-movie">
        <div class="wrapper">
            <img class="bg" src="@/assets/images/action-bg@2x.png" />
            <div class="title">{{ title }}</div>
            <img class="cover" :src="coverUrl" />
            <img class="coin" v-if="coinUrl" :src="coinUrl" />
        </div>
    </div>
</template>
<script>
export default {
    name: "action-movie",
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
        left: 8%;
        transform: rotateZ(-13deg);
        z-index: 1;
    }
    .coin {
        position: absolute;
        z-index: 1;
        top: 30%;
        right: 15px;
        width: 21%;
    }
}
</style>
