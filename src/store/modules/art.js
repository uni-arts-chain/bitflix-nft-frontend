import http from "@/plugins/http";
// import rpc from "@/plugins/rpc";
// import { BigNumber } from "bignumber.js";
// import { ComputeBlockTimestamp } from "@/utils";
// import _ from "lodash";

export default {
    namespaced: true,
    state: {
        categories: [],
        themes: [],
        materials: [],

        ART_OFFLINE: 1,
        ART_ONLINE: 2,
        ART_ON_AUCTION: 3,
        ART_WAITING_AUCTION: 4,
        ART_ON_SALE: 5,
        ART_AUCTIONED: 6,

        ART_TYPE_SINGLE: 1,
        ART_TYPE_SEPERABLE: 3,

        art: {
            img_detail_file1: {},
            img_detail_file2: {},
            img_detail_file3: {},
            img_detail_file4: {},
            img_detail_file5: {},
        },
        auctionInfo: {},
        auctionList: [],
        saleInfo: {},
        separableInfo: {
            Owner: [],
        },
        saleSeparableIdList: [],
        saleSeparableOrderList: [],
        unsubSeparableInfoList: () => {},
        saleOrderId: -1,
        transactionList: [],
        signatureList: [],

        subQueue: [],

        isSending: false,
    },
    mutations: {
        SET_CATEGORIES: (state, data) => {
            state.categories = data.map((v) => {
                v.cate_label = "categories";
                return v;
            });
        },
        SET_THEMES: (state, data) => {
            state.themes = data.map((v) => {
                v.cate_label = "themes";
                return v;
            });
        },
    },

    actions: {
        GetThemes({ commit }) {
            http.globalGetThemes({}).then((data) => {
                commit("SET_THEMES", data);
            });
        },
    },
};
