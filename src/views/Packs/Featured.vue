/** * Created by Lay Hunt on 2021-06-01 15:09:30. */
<template>
    <div class="featured">
        <div class="container">
            <div class="title">FEATURED PACKS</div>
            <div class="list">
                <div class="item" v-for="(v, i) in list" :key="i">
                    <div class="label">DROPS 2:00 AM CST MAY 15</div>
                    <div class="recommend">RECOMMENDED PACK</div>
                    <ActionMovie
                        title="MOVIE NFT"
                        :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                        :coinUrl="`${require('@/assets/images/cate-coin2.png')}`"
                    />
                    <div class="info">
                        <div class="name">RESERVATION: BASE SET</div>
                        <div class="series">Series 2 ⅠRelease 34</div>
                        <div class="price">USD $9.00</div>
                        <div class="notice">Only 1 left</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ActionMovie from "@/components/ActionMovie";
export default {
    name: "featured",
    components: {
        ActionMovie,
    },
    data() {
        return {
            list: [1, 2, 3, 4],
        };
    },
};
</script>
<style lang="scss" scoped>
.title {
    font-size: 27px;
    font-family: "Montserrat-Bold";
    font-weight: Bold;
    margin-top: 51px;
    margin-bottom: 45px;
    text-align: left;
    color: #ffffff;
}
.list {
    overflow: hidden;
}
.item {
    width: 260px;
    margin-right: 50px;
    float: left;
    text-align: left;
}
.item:nth-child(4n) {
    margin-right: 0;
}
.label {
    font-size: 12px;
    font-family: "Montserrat-Medium";
    font-weight: 500;
    text-align: center;
    color: #3e98fc;
    border: 1px solid #3e98fc;
    border-radius: 15px;
    display: inline-block;
    max-width: 100%;
    padding: 7px 20px;
}
.recommend {
    font-size: 13px;
    font-family: "Montserrat-Medium";
    font-weight: 500;
    text-align: center;
    color: #166dce;
    letter-spacing: 1px;
    background-color: white;
    padding: 4px 0;
    margin-bottom: 45px;
    min-width: 100%;
}
.action-movie {
    cursor: pointer;
    margin-left: 10px;
    width: 100%;
    width: 219px;
    height: 221px;
    font-size: 26px;
    margin-top: 64px;
    margin-bottom: 60px;
}
.info {
    margin-bottom: 60px;
    .name {
        font-size: 13px;
        font-family: "Montserrat-Bold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        letter-spacing: 1px;
        margin-bottom: 5px;
    }
    .series {
        font-size: 12px;
        font-family: "Montserrat-Regular";
        font-weight: 400;
        text-align: left;
        color: #c9caca;
        letter-spacing: 1px;
        margin-bottom: 13px;
    }
    .price {
        font-size: 19px;
        font-family: "Montserrat-ExtraBold";
        font-weight: Bold;
        text-align: left;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .notice {
        font-size: 13px;
        font-family: "Montserrat-Regular";
        font-weight: 500;
        text-align: left;
        color: #d63ed5;
        letter-spacing: -1px;
    }
}
</style>
