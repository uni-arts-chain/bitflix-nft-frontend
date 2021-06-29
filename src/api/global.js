const apiList = [
    {
        name: "GetMarketList",
        method: "GET",
        desc: "获取Banner",
        path: "/arts/lists",
        mockPath: "/arts/lists",
        params: {
            keyword: "",
            art_type: "",
            page: "",
            per_page: "",
        },
        options: {
            unSignature: false,
        },
    },
];

export default apiList;
