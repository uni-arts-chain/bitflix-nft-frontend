<template>
    <div id="app">
        <Navbar class="navbar" v-if="!isSession" />
        <main class="main" v-if="!isLoading">
            <router-view />
        </main>
        <main class="main loading" v-else v-loading="true"></main>
        <Footer class="footer" v-if="!isSession" />
    </div>
</template>

<script>
import Navbar from "@/views/Layout/Navbar.vue";
import Footer from "@/views/Layout/Footer.vue";
export default {
    components: { Navbar, Footer },
    name: "App",
    data() {
        return {
            isLoading: false,
        };
    },
    async created() {
        // this.isLoading = true;
        // await this.$rpc.api.isReady;
        // await this.initChainInfo();
        // await this.$extension.isReady();
        // await this.getInfo();
        // this.isLoading = false;
    },
    computed: {
        isSession() {
            switch (this.$route.path) {
                case "/login":
                case "/signup":
                    return true;
            }
            return false;
        },
    },
    methods: {
        async getInfo() {
            if (this.$store.state.user.info.token) {
                await this.$store.dispatch("user/GetInfo");
            }
            await this.$store.dispatch("art/GetCategories");
            await this.$store.dispatch("art/GetThemes");
            await this.$store.dispatch("art/GetMaterials");
        },
        async initChainInfo() {
            let specVersion = await this.$rpc.api.runtimeVersion.specVersion;
            let properties = await this.$rpc.api.rpc.system.properties();
            properties = properties.toJSON();
            let initialBlcok = await this.$rpc.api.rpc.chain.getBlock();
            let blockHeight = initialBlcok.block.header.number.toString();
            let timestamp = initialBlcok.block.extrinsics[0].method.args[0].toString();
            properties.timestamp = timestamp;
            properties.blockHeight = blockHeight;
            await this.$store.dispatch("global/SetChain", {
                specVersion: specVersion.toString(),
                ...properties,
            });
            console.log(
                "GenesisHash: ",
                await this.$rpc.api.genesisHash.toHex()
            );

            this.$http
                .globalGetCurrencies({})
                .then((res) => {
                    this.$store.dispatch("global/SetSymbol", res);
                })
                .catch((err) => {
                    console.log(err);
                    this.$notify.error(err.head ? err.head.msg : err);
                });
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

#app {
    text-align: center;
    color: #020202;
    min-height: 100%;
    background: #0c1e33;
    display: flex;
    flex-direction: column;
}

.navbar,
.footer {
    flex: 0 0 auto;
}

.main {
    flex: 1 0 auto;
}
</style>
