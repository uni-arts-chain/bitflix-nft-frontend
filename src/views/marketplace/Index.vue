<template>
    <div class="marketplace-page">
        <div class="top-container">
            <div class="top-title">EXPLORE MARKETPLACE</div>
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

        <div class="move-container">
            <div class="move-content">
                <BaseTitle>SEARCH BY MOVIE AND GENRE</BaseTitle>
                <MovieList
                    :isLoading="isMovieLoading"
                    class="move-list"
                    :list="movieList"
                    @onItemClick="goDetail"
                />
            </div>
        </div>

        <div class="star-container">
            <div class="star-content">
                <BaseTitle>SEARCH BY ACTOR AND DIRECTOR</BaseTitle>
                <StarList
                    :isLoading="isActorLoading"
                    :list="starList"
                    class="star-list"
                    @onItemClick="goDetail"
                />
            </div>
            <img class="line" src="@/assets/images/packs-line@2x.png" />
            <img class="line2" src="@/assets/images/packs-line2@2x.png" />
        </div>

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
                    <BaseTitle>LATEST LASTINGS</BaseTitle>
                    <div class="more-btn" @click="goSearchList">EXPLORE MARKETPLACE</div>
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
import MovieList from "./components/MovieList";
import StarList from "./components/StarList";
import BaseTitle from "@/components/BaseTitle";
import ActionMovieList from "@/components/ActionMovieList";

export default {
    name: "Marketplace",
    components: {
        MovieList,
        BaseTitle,
        StarList,
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
        this.requestData("movie");
        this.requestNFTData();
        this.requestStarData();
    },
    methods: {
        requestData(type) {
            let params = {
                sort_type: "create_lth",
                art_type: "movie",
            };
            if (type) {
                params.art_type = type;
            }
            this.isMovieLoading = true;
            this.$http
                .globalGetMarketList(params)
                .then((res) => {
                    if (type == "movie") {
                        this.isMovieLoading = false;
                        this.movieList.splice(0, 0, ...res.list.filter((_, i) => i < 3));
                    }
                })
                .catch((err) => {
                    this.isMovieLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        requestNFTData() {
            let params = {
                sort_type: "create_lth",
            };
            this.isTypeLoading = true;
            this.isLastLoading = true;
            this.$http
                .globalGetMarketList(params)
                .then((res) => {
                    this.isTypeLoading = false;
                    this.isLastLoading = false;
                    this.nftList = res.list.filter((v, i) => i < 8).reverse();
                    this.latestList = res.list.filter((v, i) => i < 8).reverse();
                })
                .catch((err) => {
                    this.isTypeLoading = false;
                    this.isLastLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        requestStarData() {
            let params = {
                sort_type: "create_lth",
                art_type: "star",
            };
            this.isActorLoading = true;
            this.$http
                .globalGetMarketList(params)
                .then((res) => {
                    this.isActorLoading = false;
                    this.starList.splice(0, 0, ...res.list.filter((_, i) => i < 5));
                })
                .catch((err) => {
                    this.isActorLoading = false;
                    console.log(err);
                    this.$notify.error(err.head && err.head.msg);
                });
        },
        // requestMovie() {
        //     this.$requestMoive("movie");
        // },
        goSearch() {
            let path = "/marketplaceSearch";
            if (this.searchVal) {
                path = "/marketplaceSearch?keyword=" + encodeURIComponent(this.searchVal);
            }
            this.$router.push(path);
        },
        goDetail(item) {
            this.$router.push("/marketplaceDetail/" + item.id);
        },
        goSearchList() {
            this.$router.push("/marketplaceSearch");
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
