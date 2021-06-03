/** * Created by Lay Hunt on 2021-06-01 17:31:01. */
<template>
    <div class="detail">
        <div class="content">
            <div
                class="left-bg"
                :style="`${tabBgWidth ? 'width:' + tabBgWidth + 'px' : ''}`"
            ></div>
            <div
                class="right-bg"
                :style="`${tabBgWidth ? 'width:' + tabBgWidth + 'px' : ''}`"
            ></div>
            <div class="container" ref="container">
                <img
                    class="bg-arrow"
                    src="@/assets/images/packs-detail-arrow@2x.png"
                />
                <div class="tab">
                    <div class="tag-item">
                        <router-link to="/packs">&lt; PACKS</router-link>
                    </div>
                </div>
                <div class="form-wrapper">
                    <div class="form-content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "detail",
    data() {
        return {
            tabBgWidth: 0,
        };
    },
    mounted() {
        let widthBg =
            (window.innerWidth - this.$refs.container.offsetWidth) / 2;
        if (widthBg <= 0) {
            widthBg = 0;
        }
        this.tabBgWidth = widthBg;
    },
};
</script>
<style lang="scss" scoped>
.detail {
    min-height: 1400px;
}
.content {
    width: 100%;
    height: 600px;
    background-image: url(~@/assets/images/packs-detail-content-bg@2x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .container {
        position: relative;
        height: 100%;
    }
    .left-bg {
        position: absolute;
        left: 0;
        top: 0;
        height: 38px;
        background: black;
        width: calc((100% - 1200px) / 2);
    }
    .right-bg {
        position: absolute;
        right: 0;
        top: 0;
        height: 38px;
        background: black;
        width: calc((100% - 1200px) / 2);
    }
    .tab {
        height: 38px;
        .tag-item {
            width: calc(100% - 400px);
            background: black;
            height: 100%;
            font-size: 17px;
            line-height: 38px;
            text-align: left;
            color: #ffffff;
        }
        .tag-item > span {
            cursor: pointer;
        }
    }
    .form-wrapper {
        width: 400px;
        height: 1226px;
        background: black;
        position: absolute;
        right: 0;
    }
    .form-content {
        position: relative;
        z-index: 3;
    }
    .form-content::after {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        left: -38px;
        top: 0;
        border-top: 48px solid black;
        border-left: 48px solid black;
        border-right: 48px solid transparent;
        border-bottom: 48px solid transparent;
    }
    .bg-arrow {
        position: absolute;
        bottom: 0;
        left: 100px;
        width: 210px;
    }
}
</style>
