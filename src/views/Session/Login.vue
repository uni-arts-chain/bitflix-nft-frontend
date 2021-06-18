/** * Created by Lay Hunt on 2021-05-24 18:16:31. */
<template>
    <div class="login">
        <div class="form">
            <div class="top-line"></div>
            <img class="logo" src="@/assets/images/logo-login.png" />
            <div class="desc">Sigin in to dapper</div>
            <span class="name">for BITFLIX</span>
            <div class="wallet-list">
                <div class="wallet" @click="connectMetaMask">
                    <icon-svg
                        class="icon"
                        style="font-size: 70px"
                        icon-class="metamask"
                    />
                    <span class="wallet-name">MetaMask</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {};
    },
    methods: {
        connectMetaMask() {
            this.$wallet
                .connect()
                .then(() => {
                    this.notify.success("Success");
                })
                .catch(() => {});
        },
    },
};
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.form {
    display: inline-block;
    min-width: 445px;
    position: relative;
    min-height: 327px;
    background-color: white;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    overflow: hidden;
    text-align: left;
    padding-left: 24px;
    padding-right: 24px;
}
.top-line {
    width: 100%;
    height: 6px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(to right, #d63ed5, #166dce);
}
.logo {
    width: 145px;
    margin-left: 64px;
    margin-top: 55px;
}
.desc {
    font-size: 25px;
    margin-left: 64px;
    font-family: "Montserrat-Medium";
    font-weight: 600;
    text-align: left;
    margin-top: 10px;
    color: #166dce;
    margin-bottom: 6px;
}
.name {
    font-size: 17px;
    margin-left: 64px;
    font-family: "Montserrat-Regular";
    font-weight: 600;
    text-align: left;
    color: #818394;
}

.wallet-list {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.wallet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 30px;
    margin-right: 30px;
    .icon {
        font-size: 30px;
    }
    .wallet-name {
        margin-top: 10px;
        font-size: 22px;
    }
}
</style>
