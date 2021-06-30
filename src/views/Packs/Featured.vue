/** * Created by Lay Hunt on 2021-06-01 15:09:30. */
<template>
    <div class="featured">
        <div class="container">
            <div class="title">PURCHASE YOUR MYSTERY NFT PACK !</div>
            <div class="desc">
                *NFT Pack includes 1x Movie… 1x Star… 1x Activist… and 1x Music… with a chance to
                win an additional Trophy NFT! A physical prop or memorabilia from the IMO,
                autographed by the star and shipped to your home address.
            </div>
            <div class="title">FEATURED PACKS</div>
            <div class="list">
                <ActionMovieList :list="movies" @onMovieClick="goDetail" />
                <!-- <div class="item" v-for="(v, i) in list" :key="i">
                    <div class="label">DROPS 2:00 AM CST MAY 15</div>
                    <div class="recommend">RECOMMENDED PACK</div>
                    <ActionMovie
                        @click.native="goDetail(v)"
                        title="MOVIE NFT"
                        :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                        :coinUrl="`${require('@/assets/images/cate-coin2.png')}`"
                    />
                    <div class="info">
                        <div class="name">RESERVATION: BASE SET</div>
                        <div class="series">To be added</div>
                        <div class="price">USD $9.00</div>
                        <div class="notice">Only 1 left</div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import ActionMovieList from "@/components/ActionMovieList";
export default {
    name: "featured",
    components: {
        ActionMovieList,
    },
    data() {
        return {
            movies: [
                {
                    name: "KHEM NIRCH",
                    series:
                        " To be addedo be addedo be addedo be addedo be addedobe addedo be added",
                    price: "1200",
                    img_main_file1: { url: "" },
                    id: 1,
                },
                {
                    name: "KHEM NIRCH",
                    series:
                        " To be addedo be addedo be addedo be addedo be addedobe addedo be added",
                    price: "1200",
                    img_main_file1: { url: "" },
                    id: 2,
                },
                {
                    name: "KHEM NIRCH",
                    series:
                        " To be addedo be addedo be addedo be addedo be addedobe addedo be added",
                    price: "1200",
                    status: "out",
                    img_main_file1: { url: "" },
                    id: 3,
                },
                {
                    name: "KHEM NIRCH",
                    series:
                        " To be addedo be addedo be addedo be addedo be addedobe addedo be added",
                    price: "1200",
                    status: "out",
                    img_main_file1: { url: "" },
                    id: 4,
                },
            ],
        };
    },
    methods: {
        goDetail(item) {
            this.$router.push("/packs/detail/" + item.id);
        },
    },
};
</script>
<style lang="scss" scoped>
.desc {
    font-size: 22px;
    font-family: "Montserrat";
    margin-top: 51px;
    margin-bottom: 105px;
    text-align: left;
    color: #ffffff;
}
.title {
    font-size: 27px;
    font-family: "Montserrat-Bold";
    font-weight: Bold;
    margin-top: 51px;
    margin-bottom: 45px;
    text-align: left;
    color: #ffffff;
}
.list {
    overflow: hidden;
}
.item {
    width: 260px;
    margin-right: 50px;
    float: left;
    text-align: left;
}
.item:nth-child(4n) {
    margin-right: 0;
}
.label {
    font-size: 12px;
    font-family: "Montserrat-Medium";
    font-weight: 500;
    text-align: center;
    color: #3e98fc;
    border: 1px solid #3e98fc;
    border-radius: 15px;
    display: inline-block;
    max-width: 100%;
    padding: 7px 20px;
}
.recommend {
    font-size: 13px;
    font-family: "Montserrat-Medium";
    font-weight: 500;
    text-align: center;
    color: #166dce;
    letter-spacing: 1px;
    background-color: white;
    padding: 4px 0;
    margin-bottom: 45px;
    min-width: 100%;
}
.action-movie {
    cursor: pointer;
    margin-left: 10px;
    width: 100%;
    width: 219px;
    height: 221px;
    font-size: 26px;
    margin-top: 64px;
    margin-bottom: 60px;
}
.info {
    margin-bottom: 60px;
    .name {
        font-size: 13px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        letter-spacing: 1px;
        margin-bottom: 5px;
    }
    .series {
        font-size: 12px;
        font-family: "Montserrat-Regular";
        font-weight: 400;
        text-align: left;
        color: #c9caca;
        letter-spacing: 1px;
        margin-bottom: 13px;
    }
    .price {
        font-size: 19px;
        font-family: "Montserrat-ExtraBold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .notice {
        font-size: 13px;
        font-family: "Montserrat-Regular";
        font-weight: 500;
        text-align: left;
        color: #d63ed5;
        letter-spacing: -1px;
    }
}
</style>
