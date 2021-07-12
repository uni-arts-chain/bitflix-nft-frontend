<template>
    <div class="movie-list">
        <div class="item-wrapper" v-for="(item, index) in list" :key="index" @click="onClick(item)">
            <div class="movie">
                <!-- <img class="movie-poster" src="@/assets/images/marketplace/movie2@2x.png" /> -->
                <!-- <img class="movie-poster" :src="item.img_main_file1.url" /> -->
                <AdaptiveImage
                    :isPreview="true"
                    :cover="item.img.url"
                    :isOrigin="false"
                    width="341px"
                    height="175px"
                />
                <div class="movie-tire">{{ item.title.toUpperCase() }}</div>
                <div class="movie-size">Contains {{ item.art_count }} NFTs</div>
                <div class="size-value">
                    Price: {{ item.lowest_price | priceFixed }} ~
                    {{ item.highest_price | priceFixed }} USDT
                </div>
                <!-- <div class="value-unit">MIN</div> -->
            </div>
        </div>
    </div>
</template>

<script>
import AdaptiveImage from "@/components/AdaptiveImage";
export default {
    name: "MovieList",
    components: {
        AdaptiveImage,
    },
    data() {
        return {};
    },
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        onClick(item) {
            this.$emit("onItemClick", item);
        },
    },
};
</script>

<style lang="scss" scoped>
.movie-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .item-wrapper {
        margin-right: 23px;
        margin-bottom: 20px;
    }
    .item-wrapper:nth-child(3n) {
        margin-right: 0;
    }
    .movie {
        cursor: pointer;
        width: 391px;
        height: 393px;
        border: 8px solid #0c234c;
        padding: 40px 22px 20px 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .movie-poster {
            max-height: 175px;
        }
        .movie-tire {
            margin-top: 22px;
            font-size: 21px;
            font-family: Montserrat-ExtraBold, Montserrat;
            // font-weight: ExtraBold;
            font-weight: bolder;
            color: #ffffff;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            padding-bottom: 18px;
            border-bottom: 3px solid #ffffff;
        }
        .movie-size {
            margin-top: 16px;
            min-height: 18px;
            font-size: 13px;
            font-family: Montserrat-SemiBold;
            color: #b2b3b7;
            font-weight: 600;
        }
        .size-value {
            margin-top: 10px;
            font-size: 18px;
            // font-family: 04b09, 04b09-Regular;
            // font-family: Montserrat-SemiBold, Montserra;
            // font-weight: 400;
            font-family: Montserrat-ExtraBold;
            color: #ffffff;
        }
        .value-unit {
            margin-top: 2px;
            font-size: 13px;
            font-family: Montserrat-SemiBold, Montserra;
            // font-weight: SemiBold;
            color: #b2b3b7;
        }
    }
}
</style>
