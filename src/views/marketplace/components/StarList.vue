<template>
    <div class="star-list">
        <div class="item-wrapper" v-for="(item, index) in list" :key="index" @click="onClick(item)">
            <div class="star">
                <!-- <img class="star-image" src="@/assets/images/marketplace/star.png" /> -->
                <AdaptiveImage
                    :isPreview="true"
                    :cover="item.img.url"
                    :isOrigin="false"
                    width="230px"
                    height="333px"
                />
                <div class="star-name-con">
                    <div class="star-name">{{ item.title.toUpperCase() }}</div>
                    <div class="short-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdaptiveImage from "@/components/AdaptiveImage";
export default {
    name: "StarList",
    data() {
        return {};
    },
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        AdaptiveImage,
    },
    methods: {
        onClick(item) {
            this.$emit("onItemClick", item);
        },
    },
};
</script>

<style lang="scss" scoped>
.star-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    // overflow: hidden;
    .item-wrapper {
        margin-right: 23px;
        margin-bottom: 20px;
        margin-right: 18px;
    }
    .item-wrapper:nth-child(5n) {
        margin-right: 0;
    }
    .star {
        cursor: pointer;
        width: 230px;
        height: 333px;
        position: relative;
        .star-image {
            height: 100%;
            max-width: 100%;
        }
        .star-name-con {
            position: absolute;
            padding: 0 12px;
            width: 100%;
            bottom: 27px;
            .star-name {
                font-size: 15px;
                font-family: Montserrat-ExtraBold, Montserrat;
                font-weight: bolder;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                color: #ffffff;
            }
            .short-line {
                margin-top: 12px;
                width: 25px;
                height: 6px;
                background-color: #ffffff;
            }
        }
    }
}
</style>
