/** * Created by Lay Hunt on 2021-05-31 10:35:51. */
<template>
    <div class="packs">
        <Cate />
        <Featured />
        <Previous />
        <div class="more-body">
            <img class="line3" src="@/assets/images/packs-line3@2x.png" />
            <img class="line4" src="@/assets/images/packs-line-set2@2x.png" />
        </div>
    </div>
</template>
<script>
import Cate from "./Cate.vue";
import Featured from "./Featured";
import Previous from "./Previous";
export default {
    name: "packs",
    components: {
        Cate,
        Featured,
        Previous,
    },
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped>
.more-body {
    height: 329px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 139px;
    position: relative;
}
.line3 {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 0;
}
.line4 {
    position: absolute;
    width: 100%;
    bottom: -120px;
    left: 0;
    z-index: 0;
}
.more {
    font-size: 15px;
    font-family: "Montserrat-Bold";
    font-weight: Bold;
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    padding-bottom: 7px;
    border-bottom: 1px solid #ffffff;
    display: inline-block;
    position: relative;
    z-index: 1;
}
</style>
