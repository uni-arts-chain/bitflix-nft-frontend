<template>
    <div class="star-list">
        <div v-for="(item, index) in list" :key="index" @click="onClick(item)">
            <div class="star">
                <!-- <img class="star-image" src="@/assets/images/marketplace/star.png" /> -->
                <AdaptiveImage
                    :isOrigin="false"
                    :url="item.img_main_file1.url"
                    width="230px"
                    height="333px"
                />
                <div class="star-name-con">
                    <div class="star-name">{{ item.name.toUpperCase() }}</div>
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
            this.$emit("handleClick", item);
        },
    },
};
</script>

<style lang="scss" scoped>
.star-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // overflow: hidden;
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
            left: 12px;
            bottom: 27px;
            .star-name {
                font-size: 15px;
                font-family: Montserrat-ExtraBold, Montserrat;
                font-weight: bolder;
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
