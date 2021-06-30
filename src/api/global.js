const apiList = [
    {
        name: "GetMarketList",
        method: "GET",
        desc: "获取市场",
        path: "/arts/lists",
        mockPath: "/arts/lists",
        params: {
            keyword: "",
            art_type: "",
            page: "",
            per_page: "",
            sort_type: "",
        },
        options: {
            unSignature: false,
        },
    },
    {
        name: "GetFilterCate",
        method: "GET",
        desc: "搜索过滤项",
        path: "/arts/art_types",
        mockPath: "/arts/art_types",
        params: {},
        options: {
            unSignature: false,
        },
    },
    {
        name: "GetSortCate",
        method: "GET",
        desc: "搜索排序项",
        path: "/arts/sort_types",
        mockPath: "/arts/sort_types",
        params: {},
        options: {
            unSignature: false,
        },
    },
];

export default apiList;
