<template>
    <div class="wallet-page">
        <div class="wallet-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <p class="wallet-title">Connect your wallet</p>
            <div class="wallet-list" @click="goHome">
                <div class="wallet" v-for="wallet in wallets" :key="wallet.id">
                    <img class="wallet-icon" :src="wallet.icon" />
                    <span class="wallet-name">{{ wallet.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WalletIcon from "@/assets/images/wallet-icon.png";
export default {
    name: "Wallet",
    data() {
        return {
            wallets: [
                {
                    icon: WalletIcon,
                    name: "Metamask",
                    id: 1,
                },
                {
                    icon: WalletIcon,
                    name: "Trezor",
                    id: 2,
                },
                {
                    icon: WalletIcon,
                    name: "Ledger",
                    id: 3,
                },
                {
                    icon: WalletIcon,
                    name: "Coinbase",
                    id: 4,
                },
                {
                    icon: WalletIcon,
                    name: "WalletrConnect",
                    id: 5,
                },
                {
                    icon: WalletIcon,
                    name: "Portis",
                    id: 6,
                },
            ],
        };
    },
    methods: {
        goBack() {
            this.$router.push("/email");
        },
        goHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang="scss" scoped>
.wallet-page {
    margin-top: 60px;
}
.wallet-content {
    margin-top: 60px;
    width: 1222px;
    margin: auto;
    color: #ffffff;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #ffffff;
    }
    .wallet-title {
        margin-top: 100px;
        font-family: "Montserrat-Bold";
        font-size: 36px;
        font-weight: 600;
        text-align: center;
    }
    .wallet-list {
        margin: 80px 40px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .wallet {
            border-radius: 10px;
            width: 150px;
            height: 210px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #15131e;
            .wallet-icon {
                width: 80px;
                height: 80px;
                margin-top: 40px;
                margin-bottom: 40px;
            }
        }
    }
}
</style>
