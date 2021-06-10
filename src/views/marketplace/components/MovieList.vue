<template>
    <div class="movie-list">
        <div v-for="(item, index) in 3" :key="index" @click="onClick(item)">
            <div class="movie">
                <img
                    class="movie-poster"
                    src="@/assets/images/marketplace/movie2@2x.png"
                />
                <div class="movie-tire">COMMON TIER</div>
                <div class="movie-size">Contains 5 Moments</div>
                <div class="size-value">Price: 14-1200USDT</div>
                <!-- <div class="value-unit">MIN</div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieList",
    data() {
        return {};
    },
    methods: {
        onClick(item) {
            this.$emit("handleClick", item);
        },
    },
};
</script>

<style lang="scss" scoped>
.movie-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
            text-align: center;
            padding-bottom: 18px;
            border-bottom: 3px solid #ffffff;
        }
        .movie-size {
            margin-top: 16px;
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
