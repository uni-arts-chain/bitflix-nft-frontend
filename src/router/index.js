// import { NODE_ENV } from "@/config";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home/Index.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "session" */ "@/views/Session/Login.vue"),
    },
    {
        path: "/packs",
        name: "Packs",
        component: () => import(/* webpackChunkName: "packs" */ "@/views/Packs/Index.vue"),
    },
    {
        path: "/packs/detail/:id",
        name: "Packs",
        component: () => import(/* webpackChunkName: "packs" */ "@/views/Packs/Detail.vue"),
    },
    {
        path: "/reward",
        name: "reward",
        component: () => import(/* webpackChunkName: "reward" */ "@/views/reward/Index"),
    },
    {
        path: "/nftdetail",
        name: "nftdetail",
        component: () => import(/* webpackChunkName: "nftdetail" */ "@/views/myNFT/Detail"),
    },
    {
        path: "/mynft",
        name: "mynft",
        component: () => import(/* webpackChunkName: "myNFT" */ "@/views/myNFT/Index"),
    },
    {
        path: "/questions",
        name: "questions",
        component: () => import(/* webpackChunkName: "questions" */ "@/views/questions/Index"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import(/* webpackChunkName: "signUp" */ "@/views/Session/SignUp"),
    },
    {
        path: "/email",
        name: "email",
        component: () => import(/* webpackChunkName: "email" */ "@/views/Session/Email"),
    },
    {
        path: "/history",
        name: "history",
        component: () => import(/* webpackChunkName: "history" */ "@/views/history/Index"),
    },
    {
        path: "/marketplace",
        name: "marketplace",
        component: () => import(/* webpackChunkName: "marketplace" */ "@/views/marketplace/Index"),
    },
    {
        path: "/marketplaceSearch",
        name: "marketplaceSearch",
        component: () =>
            import(/* webpackChunkName: "marketplaceSearch" */ "@/views/marketplace/Search"),
    },
    {
        path: "/marketplaceSearchList",
        name: "marketplaceSearchList",
        component: () =>
            import(
                /* webpackChunkName: "marketplaceSearchList" */ "@/views/marketplace/SearchList"
            ),
    },
    {
        path: "/marketplaceDetail/:id",
        name: "marketplaceDetail",
        component: () =>
            import(/* webpackChunkName: "marketplaceDetail" */ "@/views/marketplace/Detail"),
    },
    {
        path: "/lockup",
        name: "lockup",
        component: () => import(/* webpackChunkName: "lockup" */ "@/views/lockupBFX/Index"),
    },
    {
        path: "/lockupRecord",
        name: "lockupRecord",
        component: () => import(/* webpackChunkName: "lockupRecord" */ "@/views/lockupBFX/Record"),
    },
    {
        path: "/wallet",
        name: "wallet",
        component: () => import(/* webpackChunkName: "wallet" */ "@/views/Session/Wallet"),
    },
];

// if (NODE_ENV !== "production" || window.NODE_CONFIG.env === "development") {
//     routes.push({
//         path: "/faucet",
//         name: "Faucet",
//         component: () =>
//             import(
//                 /* webpackChunkName: "Session" */ "@/views/Session/Faucet.vue"
//             ),
//     });
// }

routes.push({
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "Session" */ "@/views/Session/NotFound.vue"),
});

export default routes;
