<template>
    <div class="history-page">
        <div class="history">
            <span class="back-btn" @click="goback"
                >&lt; BACK TO THE LISTING</span
            >
            <BaseTitle class="page-title">SALES HISTORY</BaseTitle>
            <button class="btn">VIEW TOP SALES OF THIS LISTING</button>
            <el-table
                class="table"
                :data="tableData"
                :cell-style="cellStyle"
                :header-cell-style="headerCellStyle"
            >
                <el-table-column width="120">
                    <template>
                        <img
                            width="50px"
                            src="@/assets/images/history-icon@2x.png"
                        />
                    </template>
                </el-table-column>
                <el-table-column
                    prop="moment"
                    label="MOMENT"
                    width="150"
                ></el-table-column>
                <el-table-column
                    prop="price"
                    label="PRICE"
                    width="120"
                ></el-table-column>
                <el-table-column
                    prop="serial"
                    label="SERIAL"
                    width="120"
                ></el-table-column>
                <el-table-column
                    prop="set"
                    label="SET"
                    width="120"
                ></el-table-column>
                <el-table-column prop="series" label="SERIES"></el-table-column>
                <el-table-column
                    prop="buyer"
                    label="BUYER"
                    width="120"
                ></el-table-column>
                <el-table-column
                    prop="seller"
                    label="SELLER"
                    width="120"
                ></el-table-column>
                <el-table-column
                    prop="date"
                    label="DATE / TIME"
                    width="120"
                ></el-table-column>
                <el-table-column label="TX" width="80">
                    <template>
                        <img
                            width="15px"
                            style="cursor: pointer"
                            src="@/assets/images/tx-icon@2x.png"
                        />
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import BaseTitle from "@/components/BaseTitle";

export default {
    name: "History",
    components: {
        [Table.name]: Table,
        [TableColumn.name]: TableColumn,
        BaseTitle,
    },
    data() {
        return {
            tableData: [
                {
                    moment: "DANNY GREEN",
                    price: "$3.00",
                    serial: "Common #2604/35000+",
                    set: "Base Set",
                    series: "2",
                    buyer: "@ViverDeInves...",
                    seller: "@ill_informed_lix...",
                    date: "My 11,21 10:53 PM",
                },
                {
                    moment: "DANNY GREEN",
                    price: "$3.00",
                    serial: "Common #2604/35000+",
                    set: "Base Set",
                    series: "2",
                    buyer: "@ViverDeInves...",
                    seller: "@ill_informed_lix...",
                    date: "My 11,21 10:53 PM",
                },
                {
                    moment: "DANNY GREEN",
                    price: "$3.00",
                    serial: "Common #2604/35000+",
                    set: "Base Set",
                    series: "2",
                    buyer: "@ViverDeInves...",
                    seller: "@ill_informed_lix...",
                    date: "My 11,21 10:53 PM",
                },
            ],
        };
    },
    methods: {
        goback() {
            this.$router.push("/marketplaceDetail");
        },
        cellStyle({ rowIndex }) {
            const style = {
                "background-color": rowIndex % 2 ? "#112440" : "#0D3060",
                "font-size": "13px",
                "font-family": "Montserrat-Bold,Montserrat",
                // "font-weight": "700",
                color: "#ffffff",
                border: "none",
            };
            return style;
        },
        headerCellStyle() {
            const style = {
                "background-color": "#112440",
                "font-size": "13px",
                "font-family": "Montserrat-Bold, Montserrat",
                // "font-weight": "700",
                color: "#ffffff",
                border: "none",
            };
            return style;
        },
    },
};
</script>

<style lang="scss" scoped>
.history-page {
    margin-top: 80px;
    margin-bottom: 200px;
}
.history {
    width: 1231px;
    margin: auto;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #ffffff;
    }
    .page-title {
        margin-top: 36px;
    }
    .btn {
        margin-top: 23px;
        padding: 13px 48px 12px 42px;
        font-size: 14px;
        font-family: Montserrat-Regular, Montserrat;
        // font-weight: 400;
        color: #ffffff;
        letter-spacing: 1px;
        border: 2px solid #ffffff;
        background-color: transparent;
    }
    .table {
        margin-top: 47px;
        background-color: transparent;
    }
}
</style>
