/** * Created by Lay Hunt on 2020-11-17 18:22:12. */
<template>
    <footer>
        <div class="container v-br">
            <span class="desc"
                >Copyright © 2021 Bitflix Foundation -All Rights Reserved.</span
            >
        </div>
    </footer>
</template>

<script>
import { NODE_ENV } from "@/config";
export default {
    name: "footerbar",
    computed: {
        isProd() {
            return (
                NODE_ENV === "production" &&
                window.NODE_CONFIG.env !== "development"
            );
        },
    },
};
</script>

<style lang="scss" scoped>
footer {
    background: transparent;
}
.container {
    height: 89px;
}
.v-br {
    border-top: 2px solid #c9caca;
}
.desc {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100%;
    font-weight: blod;
    margin: 0 auto;
    max-width: 808px;
    width: 100%;
    // border-top: 2px solid white;
    font-size: 15px;
    font-family: "Montserrat-Regular";
    font-weight: 800;
    text-align: center;
    color: #ffffff;
    letter-spacing: 0px;
}
</style>
