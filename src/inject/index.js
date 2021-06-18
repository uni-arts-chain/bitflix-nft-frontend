import Dialog from "@/components/Dialog";
import Alert from "@/components/Alert";
import Notification from "@/components/Notification";
import Wallet from "@/plugins/wallet";
import Icon from "@/plugins/icon";

import detect from "@/plugins/detect";
import http from "@/plugins/http";
import element from "@/plugins/element";
import copy from "clipboard-copy";

export default {
    install: async (vue) => {
        vue.use(Icon);
        vue.use(element);
        vue.use(Notification);
        vue.prototype.$browser = detect.browser;
        vue.prototype.$uniDialog = Dialog;
        vue.prototype.$uniAlert = Alert;
        vue.prototype.$http = http;
        vue.prototype.$wallet = Wallet;
        vue.prototype.$copy = copy;
    },
};
