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
    {
        name: "GetTagGroup",
        method: "GET",
        desc: "搜索TAG列表",
        path: "/tag_groups",
        mockPath: "/tag_groups",
        params: {},
        options: {
            unSignature: false,
        },
    },
    {
        name: "GetArtInfo",
        method: "GET",
        desc: "艺术品详情",
        path: "/arts/{:id}",
        mockPath: "/arts/{:id}",
        params: {},
        options: {
            unSignature: false,
        },
    },
    {
        name: "GetPopArts",
        method: "GET",
        desc: "获取热门作品",
        path: "/arts/popular",
        mockPath: "/arts/popular",
        params: {},
        options: {
            unSignature: true,
        },
    },
    {
        name: "GetMovieSet",
        method: "GET",
        desc: "获取推荐MOVIE集合",
        path: "/tag_groups/movies",
        mockPath: "/tag_groups/movies",
        params: {},
        options: {
            unSignature: true,
        },
    },
    {
        name: "GetStarSet",
        method: "GET",
        desc: "获取推荐STAR集合",
        path: "/tag_groups/stars",
        mockPath: "/tag_groups/stars",
        params: {},
        options: {
            unSignature: true,
        },
    },
    {
        name: "GetLatestNFT",
        method: "GET",
        desc: "最新上架NFT",
        path: "/arts/latest",
        mockPath: "/arts/latest",
        params: {},
        options: {
            unSignature: true,
        },
    },
];

export default apiList;
