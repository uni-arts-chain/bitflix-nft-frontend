/** * Created by Lay Hunt on 2021-06-01 15:09:30. */
<template>
    <div class="previous">
        <div
            class="container"
            v-loading="isLoading"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0)"
        >
            <div class="list" v-if="list.length > 0">
                <div class="item" v-for="v in list" :key="v.id" @click="goDetail(v)">
                    <!-- <div class="label">DROPS 2:00 AM CST MAY 15</div>
                    <div class="recommend">RECOMMENDED PACK</div>-->
                    <ActionMovie
                        class="item-img"
                        :title="v.art_type.toUpperCase() + ' NFT'"
                        :coverUrl="v.img_main_file1.url"
                        :coinUrl="getNFTCoinLogo(v)"
                    />
                    <div class="info">
                        <div class="name">{{ v.name }}</div>
                        <div class="series webkit-ellipsis-2">
                            {{ v.series }}
                        </div>
                        <div class="price">{{ v.price | priceFixed }} USDT</div>
                        <!-- <div class="notice">Only 1 left</div> -->
                        <button
                            :disabled="itemId === v.token_id && isApproving"
                            v-if="v.is_owner === true && v.offer_state === 'selling'"
                            @click.stop="() => $emit('resellOrCancelItem', v, false)"
                        >
                            CANCEL{{ itemId === v.token_id && isApproving ? "..." : "" }}
                        </button>
                        <button
                            :disabled="itemId === v.token_id && isApproving"
                            @click.stop="() => $emit('resellOrCancelItem', v, true)"
                            v-else-if="v.is_owner === true"
                        >
                            RESELL{{ itemId === v.token_id && isApproving ? "..." : "" }}
                        </button>
                    </div>
                </div>
            </div>
            <div
                v-if="list.length <= 0 && !isLoading"
                style="min-height: 100px; line-height: 100px; color: white; text-align: center"
            >
                NO DATA
            </div>
        </div>
    </div>
</template>
<script>
import ActionMovie from "@/components/ActionMovie";
import STAR_LOGO from "@/assets/images/cate-coin1.png";
import MOVIE_LOGO from "@/assets/images/cate-coin2.png";
import ACTIVIST_LOGO from "@/assets/images/cate-coin3.png";
import MUSIC_LOGO from "@/assets/images/cate-coin4.png";
import TROHPY_LOGO from "@/assets/images/cate-coin5.png";
export default {
    name: "MovieList",
    components: {
        ActionMovie,
    },
    props: {
        itemId: {
            default: null,
        },
        list: {
            type: Array,
            default: () => [],
        },
        isApproving: {
            type: Boolean,
            default: false,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isMyNft: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            STAR_LOGO,
            MOVIE_LOGO,
            ACTIVIST_LOGO,
            MUSIC_LOGO,
            TROHPY_LOGO,
        };
    },
    methods: {
        goDetail(item) {
            this.$emit("onItemClick", item);
        },
        getNFTCoinLogo(item) {
            let coin = "";
            switch (item.art_type) {
                case "movie":
                    coin = MOVIE_LOGO;
                    break;
                case "star":
                    coin = STAR_LOGO;
                    break;
                case "activist":
                    coin = ACTIVIST_LOGO;
                    break;
                case "music":
                    coin = MUSIC_LOGO;
                    break;
                case "trohpy":
                    coin = TROHPY_LOGO;
                    break;
            }
            return coin;
        },
    },
};
</script>
<style lang="scss" scoped>
.previous {
    position: relative;
}
.line-set {
    position: absolute;
    // bottom: 0;
    top: 150px;
    left: 0;
    width: 100%;
}
.desc {
    font-size: 15px;
    font-family: "Montserrat-Medium";
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10px;
    text-align: left;
    letter-spacing: 0px;
}
.list {
    overflow: hidden;
}
.item {
    width: 260px;
    margin-right: 50px;
    float: left;
    margin-top: 64px;
    margin-bottom: 60px;
    text-align: left;
    .item-img {
        cursor: pointer;
    }
}
.item:nth-child(4n) {
    margin-right: 0;
}
.label {
    font-size: 12px;
    font-family: "Montserrat-Medium";
    font-weight: 500;
    text-align: center;
    color: #3e98fc;
    border: 1px solid #3e98fc;
    border-radius: 15px;
    display: inline-block;
    max-width: 100%;
    padding: 7px 20px;
}
.recommend {
    font-size: 13px;
    font-family: "Montserrat-Medium";
    font-weight: 500;
    text-align: center;
    color: #166dce;
    letter-spacing: 1px;
    background-color: white;
    padding: 4px 0;
    margin-bottom: 45px;
    min-width: 100%;
}
.action-movie {
    margin-left: 10px;
    width: 100%;
    width: 219px;
    height: 221px;
    font-size: 26px;
    margin-bottom: 60px;
}
.info {
    margin-left: 36px;
    .name {
        cursor: pointer;
        font-size: 18px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: left;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #ffffff;
        letter-spacing: 1px;
        margin-bottom: 5px;
    }
    .series {
        margin-top: 10px;
        font-size: 12px;
        font-family: "Montserrat-Regular";
        font-weight: 400;
        text-align: left;
        // color: #c9caca;
        color: #ffffff;
        letter-spacing: 1px;
        margin-bottom: 13px;
    }
    .price {
        font-size: 15px;
        font-family: Montserrat-SemiBold, Montserrat;
        // font-weight: 600;
        text-align: left;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .notice {
        font-size: 13px;
        font-family: "Montserrat-Regular";
        font-weight: 500;
        text-align: left;
        color: #d63ed5;
        letter-spacing: -1px;
    }
    button {
        cursor: pointer;
        width: 100px;
        height: 34px;
        border-radius: 5px;
        background-color: #00000000;
        color: #eeeeee;
        border: 1px solid #eeeeee;
        margin-top: 24px;
        &:disabled {
            cursor: default;
            color: #eeeeee55;
            border: 1px solid #eeeeee55;
        }
    }
}
</style>
