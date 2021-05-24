import { NODE_ENV } from "@/config";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home/Index.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(
                /* webpackChunkName: "session" */ "@/views/Session/Login.vue"
            ),
    },
];

if (NODE_ENV !== "production" || window.NODE_CONFIG.env === "development") {
    routes.push({
        path: "/faucet",
        name: "Faucet",
        component: () =>
            import(
                /* webpackChunkName: "Session" */ "@/views/Session/Faucet.vue"
            ),
    });
}

routes.push({
    path: "*",
    name: "NotFound",
    component: () =>
        import(
            /* webpackChunkName: "Session" */ "@/views/Session/NotFound.vue"
        ),
});

export default routes;
