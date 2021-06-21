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
    mounted() {
        this.$store.dispatch("user/InitWallet").catch((err) => {
            if (err.code === 100) {
                this.$store.dispatch("user/Quit");
            }
        });
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
    methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

#app {
    // text-align: center;
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
