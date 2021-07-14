<template>
    <div class="mynft-page">
        <div class="list-content">
            <div class="list-title-con">
                <BaseTitle>MY NFT</BaseTitle>
                <div class="display-name">{{ connectedAccount }}</div>
            </div>
            <ActionMovieList :list="cardList" class="list" @onMovieClick="goDetail" />
        </div>
    </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle";
import ActionMovieList from "@/components/ActionMovieList";

export default {
    name: "mynft",
    components: {
        BaseTitle,
        ActionMovieList,
    },
    data: () => ({
        cardList: [],
    }),
    computed: {
        connectedAccount() {
            return this.$store.state.user.connectedAccount;
        },
    },
    created() {
        this.requestCardData(1, 30);
    },
    methods: {
        goDetail() {
            this.$router.push("/nftdetail");
        },
        requestCardData(page, per_page) {
            this.$http.userOwnArts({ page, per_page }).then((res) => {
                this.cardList = res.list;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.mynft-page {
    margin-top: 60px;
}
.list-content {
    margin-top: 60px;
    width: 1222px;
    margin: auto;
    .list-title-con {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .display-name {
            // height: 28px;
            // cursor: pointer;
            // border-bottom: 2px solid #ffffff;
            font-size: 16px;
            font-family: Montserrat-Medium, Montserrat;
            // font-weight: 500;
            color: #c9caca;
        }
    }
    .list {
        margin-top: 77px;
    }
}
</style>
