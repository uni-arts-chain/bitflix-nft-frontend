<template>
    <div class="marketplace-page">
        <div class="top-container">
            <div class="top-title">EXPLORE THE MARKETPLACE</div>
            <div class="search-container">
                <input
                    class="search-input"
                    placeholder="Search by stars, movies, and sets"
                    v-model="searchVal"
                />
                <div class="v-br"></div>
                <div class="search-icon-con" @click="goSearch">
                    <img
                        class="search-icon"
                        src="@/assets/images/marketplace/search@2x.png"
                    />
                </div>
            </div>
        </div>

        <div class="move-container">
            <div class="move-content">
                <BaseTitle>SEARCH BY MOVIE</BaseTitle>
                <MovieList class="move-list" @handleClick="goSearch" />
            </div>
        </div>

        <div class="star-container">
            <div class="star-content">
                <BaseTitle>SEARCH BY STAR</BaseTitle>
                <StarList class="star-list" @handleClick="goSearch" />
            </div>
            <img class="line" src="@/assets/images/packs-line@2x.png" />
            <img class="line2" src="@/assets/images/packs-line2@2x.png" />
        </div>

        <div class="latest-container">
            <div class="latest-content">
                <div class="latest-title-con">
                    <BaseTitle>LATEST LASTINGS</BaseTitle>
                    <div class="more-btn" @click="goSearchList">
                        EXPLORE MARKETPLACE
                    </div>
                </div>
                <ActionMovieList class="latest-list" @onMovieClick="goDetail" />
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
        };
    },
    methods: {
        goSearch() {
            this.$router.push("/marketplaceSearch");
        },
        goDetail() {
            this.$router.push("/marketplaceDetail");
        },
        goSearchList() {
            this.$router.push("/marketplaceSearchList");
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
        font-family: Montserrat, Montserrat-ExtraBold;
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
                font-family: Montserrat, Montserrat-Medium;
                font-weight: 500;
                color: #ffffff;
            }
        }
        .latest-list {
            margin-top: 77px;
        }
    }
}
</style>
