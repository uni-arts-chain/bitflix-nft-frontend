/** * Created by Lay Hunt on 2020-11-17 18:22:12. */
<template>
    <nav :class="theme">
        <div class="container">
            <div class="logo" @click="goHome"></div>
            <ul class="link-group">
                <li>
                    <router-link
                        to="/"
                        :class="{ active: activeTab == 'PACKS' }"
                        >PACKS</router-link
                    >
                </li>
                <li>
                    <router-link
                        to="/"
                        :class="{ active: activeTab == 'PACKS' }"
                        >MARKETPLACE</router-link
                    >
                </li>
                <li>
                    <router-link
                        to="/"
                        :class="{ active: activeTab == 'PACKS' }"
                        >COMMON QUESTIONS</router-link
                    >
                </li>
            </ul>
            <div class="session">
                <router-link to="/login" class="login"> LOG IN </router-link>
                <router-link to="/" class="sign-up"> SIGN UP </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {};
    },
    computed: {
        theme() {
            return this.$store.state.global.theme;
        },
        user() {
            return this.$store.state.user.info;
        },
        activeTab() {
            let routeName = "";
            switch (this.$route.name) {
                case "Home":
                    routeName = "PACKS";
                    break;
            }

            return routeName;
        },
    },
    methods: {
        goHome() {
            if (this.$route.path !== "/") {
                this.$router.push("/");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
nav {
    min-height: 71px;
}
nav.dark {
    background-color: black;
    .logo,
    ul li > a {
        color: white;
    }
}
.logo {
    width: 110px;
    height: 34px;
    background-image: url(~@/assets/images/logo.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 33px;
    padding-bottom: 33px;
    height: 80px;
}

ul {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
        padding-left: 71px;
        > a {
            font-family: "Montserrat-Bold";
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            color: #ffffff;
            display: inline-block;
            letter-spacing: 0px;
        }
        .active {
            font-weight: 600;
            color: white;
        }
    }
    li:last-child {
        padding-right: 0px;
    }
}

.session {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .login {
        font-family: "Montserrat-Bold";
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
        padding: 8px 24px;
    }
    .sign-up {
        margin-left: 26px;
        font-family: "Montserrat-Bold";
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
        padding: 8px 24px;
        background: linear-gradient(to right, #ba45c8, #2b6bd2);
    }
}
</style>
