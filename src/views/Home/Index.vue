/** * Created by Lay Hunt on 2021-05-24 11:19:21. */
<template>
    <div class="index">
        <Banner />
        <Cate />
        <List />
    </div>
</template>
<script>
import Banner from "./Banner";
import Cate from "./Cate";
import List from "./List";
export default {
    name: "index",
    components: {
        Banner,
        Cate,
        List,
    },
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped>
.index {
    text-align: center;
}
</style>
