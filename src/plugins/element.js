import {
    Loading,
    Breadcrumb,
    BreadcrumbItem,
    Checkbox,
    Tabs,
    TabPane,
    Radio,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

// 设置语言
locale.use(lang);

export default {
    install: (vue) => {
        vue.use(Loading.directive);
        vue.use(Breadcrumb);
        vue.use(BreadcrumbItem);
        vue.use(Checkbox);
        vue.use(Radio);
        vue.use(Tabs);
        vue.use(TabPane);
        vue.use(Menu);
        vue.use(Submenu);
        vue.use(MenuItem);
        vue.use(MenuItemGroup);
    },
};
