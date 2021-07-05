<template>
    <div class="marketplace-search-page">
        <div class="search">
            <div class="top-title">MARKETPLACE</div>
            <div class="search-container">
                <div class="search-content">
                    <input
                        class="search-input"
                        placeholder="Search by Actor, Director, Movie title and genre, and NFT type"
                        v-model="searchVal"
                    />
                    <div class="search-text">LEARN MORE</div>
                </div>
                <div class="start-button" @click="requestSeach">SERACH</div>
            </div>
            <div class="filter-container">
                <div class="input-container">
                    <el-select
                        class="select-input custom-input"
                        clearable
                        v-model="selectFilter"
                        placeholder="Select"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.title"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                    <!-- <div class="v-br"></div>
                    <div class="search-icon-con">
                        <img class="search-icon" src="@/assets/images/marketplace/search@2x.png" />
                    </div>-->
                </div>

                <div class="filters" @click="requestSeach">FILTERS</div>

                <span class="sort-by">SORT BY</span>

                <el-select class="select-container custom-input" clearable v-model="selectSorter">
                    <el-option
                        v-for="item in sorts"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id"
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
            <ActionMovieList
                class="list-container"
                :isLoading="isLoading"
                :list="list"
                @onMovieClick="goDetail"
            />
            <div
                class="pagination"
                v-if="!isLoading && this.currentPage > 1 && this.list.length > 0"
            >
                <icon-svg
                    @click="prev"
                    :disabled="currentPage <= 1"
                    icon-class="left"
                    :class="{ disabled: currentPage <= 1 }"
                />
                <icon-svg
                    @click="next"
                    :disabled="currentPage >= totalPage"
                    style="transform: rotateZ(180deg)"
                    :class="{ disabled: currentPage >= totalPage }"
                    icon-class="left"
                />
            </div>
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
            isLoading: false,
            searchVal: this.$route.query.keyword ? this.$route.query.keyword : "",
            selectFilter: "",
            selectSorter: "",
            options: [],
            sorts: [],
            list: [],
            perPage: 30,
            currentPage: 1,
            total_count: 0,
        };
    },
    mounted() {
        this.setFilter();
        this.requestFilter();
        this.requestSort();
        this.requestSeach();
    },
    computed: {
        totalPage() {
            return Math.ceil(this.total_count / this.perPage);
        },
    },
    methods: {
        setFilter() {
            this.selectFilter = this.$route.query.art_type;
            this.selectSorter = this.$route.query.sort_type;
        },
        replace() {
            let path = "/marketplaceSearch";
            if (this.searchVal) {
                path += "?keyword=" + encodeURIComponent(this.searchVal);
            }
            if (path != this.$route.path + "?keyword=" + this.$route.query.keyword) {
                this.$router.replace(path);
            }
        },
        requestSeach() {
            let params = {
                sort_type: "create_lth",
                per_page: this.perPage,
                page: this.currentPage,
            };
            if (this.selectFilter) {
                params.art_type = this.selectFilter;
            }
            if (this.selectSorter) {
                params.sort_type = this.selectSorter;
            }
            if (this.searchVal) {
                params.keyword = this.searchVal;
                this.replace();
            }
            this.list = [];
            this.isLoading = true;
            this.$http
                .globalGetMarketList(params)
                .then((res) => {
                    this.list = res.list;
                    this.total = res.total_count;
                    this.isLoading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.isLoading = false;
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        requestFilter() {
            this.$http
                .globalGetFilterCate({})
                .then((res) => {
                    this.options = [
                        {
                            id: "",
                            title: "Default",
                        },
                    ].concat(res);
                })
                .catch((err) => {
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        requestSort() {
            this.$http
                .globalGetSortCate({})
                .then((res) => {
                    this.sorts = [
                        {
                            id: "",
                            title: "Default",
                        },
                    ].concat(res);
                })
                .catch((err) => {
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        goDetail() {
            this.$router.push("/marketplaceDetail");
        },
        next() {
            if (this.currentPage < this.totalPage) {
                this.currentPage++;
                this.requestSeach();
            }
        },
        prev() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.requestSeach();
            }
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
        cursor: pointer;
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

.custom-input ::v-deep .el-input__inner {
    background-color: transparent;
    color: white;
}
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    .svg-icon {
        margin: 0 50px;
        cursor: pointer;
    }
    .svg-icon.disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }
}
</style>
