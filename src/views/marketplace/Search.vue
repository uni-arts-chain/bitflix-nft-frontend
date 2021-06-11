<template>
    <div class="marketplace-search-page">
        <div class="search">
            <div class="top-title">MARKETPLACE</div>
            <div class="search-container">
                <div class="search-content">
                    <input
                        class="search-input"
                        placeholder="Search by stars, movies, and sets"
                        v-model="searchVal"
                    />
                    <div class="search-text">LEARN MORE</div>
                </div>
                <div class="start-button">BUYING AVAILABLE</div>
            </div>
            <div class="filter-container">
                <div class="input-container">
                    <el-select
                        class="select-input custom-input"
                        clearable
                        v-model="selectVals"
                        multiple
                        collapse-tags
                        placeholder="请选择"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <!-- <div class="v-br"></div>
                    <div class="search-icon-con">
                        <img class="search-icon" src="@/assets/images/marketplace/search@2x.png" />
                    </div>-->
                </div>

                <div class="filters">FILTERS (1)</div>

                <span class="sort-by">SORT BY</span>

                <el-select
                    class="select-container custom-input"
                    clearable
                    v-model="selectVal"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>

                <div class="more-btn">
                    <img
                        width="20"
                        class="search-icon"
                        src="@/assets/images/marketplace/more@2x.png"
                    />
                </div>
            </div>
            <ActionMovieList class="list-container" @onMovieClick="goDetail" />
        </div>
    </div>
</template>

<script>
import ActionMovieList from "@/components/ActionMovieList";
import { Select, Option } from "element-ui";

export default {
    name: "MarketplaceSearch",
    components: {
        ActionMovieList,
        [Select.name]: Select,
        [Option.name]: Option,
    },
    data() {
        return {
            searchVal: "",
            selectVal: "",
            selectVals: [],
            options: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
        };
    },
    methods: {
        goDetail() {
            this.$router.push("/marketplaceDetail");
        },
    },
};
</script>

<style lang="scss" scoped>
.search {
    width: 1230px;
    margin: auto;
}
.top-title {
    font-size: 45px;
    font-family: Montserrat-ExtraBold, Montserrat;
    // font-weight: ExtraBold;
    font-weight: bolder;
    color: #ffffff;
}
.search-container {
    margin-top: 40px;
    width: 1156px;
    // width: 872px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-content {
        width: 872px;
        border: 2px solid #ffffff;
        display: flex;
        align-items: center;
        height: 100%;
        background-color: #000000;
        .search-input {
            flex: 1;
            background-color: transparent;
            padding-left: 20px;
            color: #ffffff;
            height: 100%;
            font-family: Montserrat-SemiBold, Montserra;
        }
        .search-text {
            font-size: 12px;
            font-family: Montserrat-Medium, Montserrat;
            // font-weight: 500;
            color: #ffffff;
            letter-spacing: 1px;
            margin-right: 18px;
            border-bottom: 2px solid #ffffff;
            padding-bottom: 4px;
        }
    }
    .start-button {
        // margin-left: 23px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 263px;
        background: linear-gradient(to right, #ba45c8, #2b6bd2);
        cursor: pointer;
        // text-align: center;
        font-size: 12px;
        font-family: Montserrat-Medium, Montserrat;
        // font-weight: 500;
        color: #ffffff;
        // line-height: 30px;
        letter-spacing: 1px;
    }
}
.filter-container {
    width: 1156px;
    height: 44px;
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .input-container {
        width: 640px;
        border: 2px solid #ffffff;
        display: flex;
        align-items: center;
        .select-input {
            font-family: Montserrat-SemiBold, Montserra;
            flex: 1;
            background-color: transparent;
            color: #ffffff;
            height: 100%;
        }
        .v-br {
            width: 2px;
            height: 22px;
            background-color: #ffffff;
        }
        .search-icon-con {
            cursor: pointer;
            width: 33px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .search-icon {
                max-width: 100%;
            }
        }
    }
    .filters {
        width: 133px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        font-size: 12px;
        font-family: Montserrat-Medium, Montserrat;
        // font-weight: 500;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .sort-by {
        // width: 60px;
        font-size: 12px;
        // line-height: 42px;
        font-family: Montserrat-Medium, Montserrat;
        // font-weight: 500;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .select-container {
        width: 197px;
        border: 2px solid #ffffff;
    }
    .more-btn {
        height: 100%;
        width: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
    }
}
.list-container {
    margin-top: 80px;
}
</style>

<style>
.custom-input .el-input__inner {
    background-color: transparent;
}
</style>
