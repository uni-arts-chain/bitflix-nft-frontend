<template>
    <div class="searchlist-page">
        <div class="list-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <ActionMovieList class="list" @onItemClick="goDetail" />
        </div>
    </div>
</template>

<script>
import ActionMovieList from "@/components/ActionMovieList";

export default {
    name: "SearchList",
    components: {
        ActionMovieList,
    },
    methods: {
        goDetail(item) {
            console.log(item);
            this.$router.push("/marketplaceDetail/" + item.id);
        },
        goBack() {
            this.$router.push("/marketplace");
        },
    },
};
</script>

<style lang="scss" scoped>
.searchlist-page {
    margin-top: 60px;
}
.list-content {
    margin-top: 60px;
    width: 1222px;
    margin: auto;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #ffffff;
    }
    .list {
        margin-top: 77px;
    }
}
</style>
