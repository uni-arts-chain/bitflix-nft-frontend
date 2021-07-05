/** * Created by Lay Hunt on 2021-05-24 16:08:43. */
<template>
    <div
        class="list"
        v-loading="isLoading"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0)"
    >
        <div class="container">
            <div class="item" v-for="(v, i) in list" :key="i" @click="goNFT(v.id)">
                <img class="top" src="@/assets/images/border-arrow-top.png" />
                <img class="bottom" src="@/assets/images/border-arrow-bottom.png" />
                <div class="cover">
                    <AdaptiveView :nft="v" :isResponsive="true" :isPreview="true" />
                </div>
                <div class="title">{{ v.name.toUpperCase() }}</div>
                <!-- <div class="set-name">Base Set</div> -->
                <div class="common-name webkit-ellipsis-2">{{ v.details }}</div>
                <div class="price">
                    {{ v.price }} {{ v.currency_code ? v.currency_code.toUpperCase() : "" }}
                </div>
            </div>
            <div class="item" @click="goMyNFT" v-if="list.length > 7">
                <img class="top" src="@/assets/images/border-arrow-top.png" />
                <img class="bottom" src="@/assets/images/border-arrow-bottom.png" />
                <div class="more">MORE ></div>
            </div>
        </div>
        <div
            v-if="list.length <= 0 && !isLoading"
            style="min-height: 100px; line-height: 100px; color: white; text-align: center"
        >
            NO DATA
        </div>
    </div>
</template>
<script>
import AdaptiveView from "@/components/AdaptiveView";
export default {
    name: "list",
    components: {
        AdaptiveView,
    },
    data() {
        return {
            list: [],
            isLoading: false,
        };
    },
    mounted() {
        this.requestData();
    },
    methods: {
        requestData() {
            this.isLoading = true;
            this.$http
                .globalGetPopArts({})
                .then((res) => {
                    this.list = res;
                    this.isLoading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.isLoading = false;
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        goNFT(id) {
            this.$router.push("/marketplaceDetail/" + id);
        },
        goMyNFT() {
            this.$router.push("/mynft");
        },
    },
};
</script>
<style lang="scss" scoped>
.list {
    min-height: 400px;
    background-image: url(~@/assets/images/home-bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 200px;
}
.container {
    display: flex;
    flex-wrap: wrap;
}
.item:nth-child(4n) {
    margin-right: 0;
}
.item {
    height: 383px;
    width: 263px;
    position: relative;
    overflow: hidden;
    margin-right: 49px;
    margin-bottom: 49px;
    .top {
        position: absolute;
        top: 0;
        left: 0;
        width: 49px;
        height: 49px;
    }
    .bottom {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 49px;
        height: 49px;
    }
    .cover {
        width: 247px;
        height: 247px;
        background-image: url(~@/assets/images/img-bg.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 12px;
        margin-left: 16px;
        padding-top: 12px;
        padding-right: 30px;
        padding-bottom: 12px;
    }
    .title {
        padding-left: 16px;
        font-size: 18px;
        font-family: "Montserrat-Bold";
        text-align: left;
        color: #ffffff;
        line-height: 33px;
        margin-bottom: 8px;
    }
    .set-name {
        padding-left: 16px;
        font-size: 14px;
        font-family: "Montserrat-Regular";
        font-weight: 800;
        text-align: left;
        color: #ffffff;
        line-height: 14px;
    }
    .common-name {
        padding-left: 16px;
        font-size: 14px;
        font-family: "Montserrat-Regular";
        font-weight: 800;
        text-align: left;
        color: #a0a2a5;
        line-height: 25px;
        min-height: 25px;
        overflow: hidden;
        display: block;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 14px;
    }
    .price {
        padding-left: 16px;
        font-size: 14px;
        font-family: "Montserrat-Regular";
        font-weight: 800;
        text-align: left;
        color: #ffffff;
        line-height: 25px;
    }
    .more {
        height: 100%;
        font-size: 18px;
        font-family: "Montserrat-Bold";
        text-align: center;
        color: #ffffff;
        line-height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
}
</style>
