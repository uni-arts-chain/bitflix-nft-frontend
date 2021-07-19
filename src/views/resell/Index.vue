<template>
    <div class="marketplace-page">
        <div class="top-container">
            <div class="top-title">EXPLORE RESELL</div>
            <div class="search-container">
                <input
                    class="search-input"
                    placeholder="Search by Actor, Director, Movie title and genre, and NFT type"
                    v-model="searchVal"
                />
                <div class="v-br"></div>
                <div class="search-icon-con" @click="goSearch">
                    <img
                        class="search-icon"
                        width="16px"
                        src="@/assets/images/marketplace/search.png"
                    />
                </div>
            </div>
        </div>

        <!--        <div class="move-container">-->
        <!--            <div class="move-content">-->
        <!--                <BaseTitle>SEARCH BY MOVIE AND GENRE</BaseTitle>-->
        <!--                <MovieList-->
        <!--                    :isLoading="isMovieLoading"-->
        <!--                    class="move-list"-->
        <!--                    :list="movieList"-->
        <!--                    @onItemClick="goDetail($event, true)"-->
        <!--                />-->
        <!--            </div>-->
        <!--        </div>-->

        <!--        <div class="star-container">-->
        <!--            <div class="star-content">-->
        <!--                <BaseTitle>SEARCH BY ACTOR AND DIRECTOR</BaseTitle>-->
        <!--                <StarList-->
        <!--                    :isLoading="isActorLoading"-->
        <!--                    :list="starList"-->
        <!--                    class="star-list"-->
        <!--                    @onItemClick="goDetail($event, true)"-->
        <!--                />-->
        <!--            </div>-->
        <!--            <img class="line" src="@/assets/images/packs-line@2x.png" />-->
        <!--            <img class="line2" src="@/assets/images/packs-line2@2x.png" />-->
        <!--        </div>-->

        <div class="latest-container">
            <div class="latest-content">
                <div class="latest-title-con">
                    <BaseTitle>SEARCH BY NFT TYPE</BaseTitle>
                </div>
                <ActionMovieList
                    :isLoading="isTypeLoading"
                    :list="nftList"
                    class="latest-list"
                    @onItemClick="goDetail"
                />
            </div>
        </div>
        <div class="latest-container">
            <div class="latest-content">
                <div class="latest-title-con">
                    <BaseTitle>LATEST LISTINGS</BaseTitle>
                    <div class="more-btn" @click="goSearchList">EXPLORE RESELL</div>
                </div>
                <ActionMovieList
                    :isLoading="isLastLoading"
                    :list="latestList"
                    class="latest-list"
                    @onItemClick="goDetail"
                />
            </div>
        </div>
        <div style="position: relative; height: 330px; margin-bottom: 160px">
            <img class="line3" src="@/assets/images/packs-line3@2x.png" />
        </div>
    </div>
</template>

<script>
// import MovieList from "@/views/marketplace/components/MovieList";
import BaseTitle from "@/components/BaseTitle";
// import StarList from "@/views/marketplace/components/StarList";
import ActionMovieList from "@/components/ActionMovieList";

export default {
    name: "resell",
    components: {
        // MovieList,
        BaseTitle,
        // StarList,
        ActionMovieList,
    },
    data() {
        return {
            searchVal: "",
            isMovieLoading: false,
            isActorLoading: false,
            isTypeLoading: false,
            isLastLoading: false,

            movieList: [],
            starList: [],
            nftList: [],
            latestList: [],
        };
    },
    mounted() {
        this.requestMovieData("movie");
        this.requestNFTData();
        this.requestStarData();
        this.requestLatestData();
    },
    methods: {
        requestMovieData() {
            this.isMovieLoading = true;
            this.$http
                .globalGetMovieSet({})
                .then((res) => {
                    this.isMovieLoading = false;
                    this.movieList = res;
                })
                .catch((err) => {
                    this.isMovieLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        requestNFTData() {
            let params = {
                per_page: 8,
                page: 1,
            };
            this.isTypeLoading = true;
            this.$http
                .globalGetResellList(params)
                .then((res) => {
                    this.isTypeLoading = false;
                    this.nftList = res.list.filter((v, i) => i < 8).reverse();
                })
                .catch((err) => {
                    this.isTypeLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        requestLatestData() {
            this.isLastLoading = true;
            this.$http
                .globalGetLatestNFT({
                    per_page: 4,
                    page: 1,
                })
                .then((res) => {
                    this.isLastLoading = false;
                    this.latestList = res;
                })
                .catch((err) => {
                    this.isLastLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        requestStarData() {
            this.isActorLoading = true;
            this.$http
                .globalGetStarSet({})
                .then((res) => {
                    this.isActorLoading = false;
                    this.starList = res;
                })
                .catch((err) => {
                    this.isActorLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        goSearch() {
            // let path = "/marketplaceSearch";
            let path = "/resellSearch";
            let queryStr = "";
            if (this.searchVal) {
                queryStr += "?keyword=" + encodeURIComponent(this.searchVal);
            }
            this.$router.push(path + queryStr);
        },
        goDetail(item, isTag = false) {
            if (isTag) {
                this.$router.push("/resellSearch?tags=" + item.id);
            } else {
                this.$router.push({
                    path: "/marketplaceDetail/" + item.id,
                    query: { type: "resell" },
                });
            }
        },
        goSearchList() {
            this.$router.push("/resellSearch");
        },
    },
};
</script>

<style lang="scss" scoped>
.line {
    pointer-events: none;
    position: absolute;
    // bottom: -202px;
    bottom: 85px;
    width: 100%;
    left: 0;
    z-index: 0;
}
.line2 {
    pointer-events: none;
    position: absolute;
    // bottom: -540px;
    bottom: -150px;
    width: 100%;
    left: 0;
    z-index: 0;
}
.line3 {
    pointer-events: none;
    position: absolute;
    width: 100%;
    bottom: -100px;
    left: 0;
    z-index: 0;
}

.top-container {
    height: 283px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top-title {
        font-size: 45px;
        font-family: Montserrat-ExtraBold, Montserrat-Bold, Montserrat;
        // font-weight: ExtraBold;
        font-weight: bolder;
        color: #ffffff;
    }
    .search-container {
        margin-top: 40px;
        width: 787px;
        height: 39px;
        border: 2px solid #ffffff;
        display: flex;
        align-items: center;
        .search-input {
            flex: 1;
            background-color: transparent;
            padding-left: 20px;
            color: #ffffff;
            height: 100%;
            font-family: Montserrat-SemiBold, Montserra;
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
}

.move-container {
    padding-top: 83px;
    padding-bottom: 50px;
    background: #0d1c33;
    .move-content {
        width: 1222px;
        margin: auto;
        z-index: 2;
        position: relative;
        .move-list {
            margin-top: 58px;
        }
    }
}

.star-container {
    position: relative;
    padding-top: 83px;
    padding-bottom: 50px;
    background: #061121;
    .star-content {
        width: 1222px;
        margin: auto;
        position: relative;
        z-index: 2;
        .star-list {
            margin-top: 85px;
        }
    }
}

.latest-container {
    padding-top: 83px;
    padding-bottom: 50px;
    min-height: 500px;
    background: #0d1c33;
    .latest-content {
        width: 1222px;
        margin: auto;
        .latest-title-con {
            display: flex;
            justify-content: space-between;
            .more-btn {
                height: 28px;
                cursor: pointer;
                border-bottom: 2px solid #ffffff;
                font-size: 19px;
                font-family: Montserrat-Medium, Montserrat;
                // font-weight: 500;
                color: #ffffff;
            }
        }
        .latest-list {
            margin-top: 77px;
        }
    }
}
</style>
