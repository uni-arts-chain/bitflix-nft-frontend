import Vue from "vue";
import App from "@/views/App.vue";
import router from "@/plugins/router";
import store from "@/store/index";
import inject from "@/inject/index";
import "@/filters";
import UaParser from "ua-parser-js";
import "@/assets/styles/reset.scss";
import { MobileLocation } from "@/config";

const up = new UaParser();
up.setUA(window.navigator.userAgent);
if (up.getDevice().type === "mobile") {
    window.location.href = MobileLocation;
}

Vue.config.productionTip = false;

Vue.use(inject);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
