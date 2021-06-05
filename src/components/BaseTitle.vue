<template>
    <div>
        <div class="page-title">
            <slot></slot>
        </div>
        <div class="short-line"></div>
    </div>
</template>

<script>
export default {
    name: "BaseTitle",
};
</script>

<style lang="scss" scoped>
.page-title {
    // margin-top: 36px;
    font-size: 45px;
    font-family: Montserrat, Montserrat-ExtraBold;
    // font-weight: ExtraBold;
    font-weight: bolder;
    color: #ffffff;
}
.short-line {
    width: 38px;
    height: 6px;
    background-color: #ffffff;
}
</style>
