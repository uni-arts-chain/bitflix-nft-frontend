/** * Created by Lay Hunt on 2021-05-24 16:08:43. */
<template>
    <div class="list">
        <div class="container">
            <div class="item" v-for="(v, i) in list" :key="i" @click="goNFT">
                <img class="top" src="@/assets/images/border-arrow-top.png" />
                <img
                    class="bottom"
                    src="@/assets/images/border-arrow-bottom.png"
                />
                <div class="cover">
                    <AdaptiveView
                        :nft="v"
                        :isResponsive="true"
                        :isPreview="true"
                    />
                </div>
                <div class="title">{{ v.name.toUpperCase() }}</div>
                <div class="set-name">Base Set</div>
                <div class="common-name">Common #9472/12000</div>
                <div class="price">1200 USDT</div>
            </div>
            <div class="item" @click="goMyNFT">
                <img class="top" src="@/assets/images/border-arrow-top.png" />
                <img
                    class="bottom"
                    src="@/assets/images/border-arrow-bottom.png"
                />
                <div class="more">MORE ></div>
            </div>
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
            list: [
                {
                    name: "NOMANKIND",
                    img_main_file1: {
                        url:
                            "https://ipfs.pixura.io/ipfs/QmYD7vv6g7UoWrx2t1ru9aKwH6Lituuy6Gi6bxr4b7BgLY/nomankind.jpg",
                    },
                },
                {
                    name: "Lost In The Data Flow",
                    img_main_file1: {
                        url:
                            "https://ipfs.pixura.io/ipfs/QmVtPmHik3zgm4QSUL22Kp8HALgUMUTBTbK777JEXUyZzz/lost-in-the-data-flow.jpg",
                    },
                },
                {
                    name: "Paradise",
                    img_main_file1: {
                        url:
                            "https://ipfs.pixura.io/ipfs/QmVx6RZW6CQcSK47ZWUaXQt86HEMBVQcrxYf74JkHsUABv/paradise.jpg",
                    },
                },
                {
                    name: "TRANSHUMAN ROMANCE",
                    img_main_file1: {
                        url:
                            "https://ipfs.pixura.io/ipfs/QmXMKBFnr5oceJhrZJ2k23tPUqXFfiCGE6pBbGo9QJ5dFj/transhuman-romance.png",
                    },
                },
                {
                    name: "NOMANKIND",
                    img_main_file1: {
                        url:
                            "https://ipfs.pixura.io/ipfs/QmYD7vv6g7UoWrx2t1ru9aKwH6Lituuy6Gi6bxr4b7BgLY/nomankind.jpg",
                    },
                },
                {
                    name: "Lost In The Data Flow",
                    img_main_file1: {
                        url:
                            "https://ipfs.pixura.io/ipfs/QmVtPmHik3zgm4QSUL22Kp8HALgUMUTBTbK777JEXUyZzz/lost-in-the-data-flow.jpg",
                    },
                },
                {
                    name: "Paradise",
                    img_main_file1: {
                        url:
                            "https://ipfs.pixura.io/ipfs/QmVx6RZW6CQcSK47ZWUaXQt86HEMBVQcrxYf74JkHsUABv/paradise.jpg",
                    },
                },
            ],
        };
    },
    methods: {
        goNFT() {
            this.$router.push("/nftdetail");
        },
        goMyNFT() {
            this.$router.push("/mynft");
        },
    },
};
</script>
<style lang="scss" scoped>
.list {
    min-height: 1100px;
    background-image: url(~@/assets/images/home-bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
