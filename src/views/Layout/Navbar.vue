/** * Created by Lay Hunt on 2020-11-17 18:22:12. */
<template>
    <nav :class="theme">
        <div class="container">
            <div class="logo" @click="goHome"></div>
            <ul class="link-group">
                <li>
                    <router-link
                        to="/packs"
                        :class="{ active: activeTab == 'PACKS' }"
                        >PACKS</router-link
                    >
                </li>
                <li>
                    <router-link
                        to="/marketplace"
                        :class="{ active: activeTab == 'PACKS' }"
                        >MARKETPLACE</router-link
                    >
                </li>
                <li class="questions">
                    <router-link
                        to="/questions"
                        :class="{ active: activeTab == 'PACKS' }"
                        >COMMON QUESTIONS</router-link
                    >
                    <div class="questions-menu" @click="goQuestions">
                        <div class="menu">
                            <div class="footer-bar">
                                <dl>
                                    <dt>ABOUT</dt>
                                    <dd>Overview</dd>
                                    <dd>What is Bitflix?</dd>
                                    <dd>Ways to Collect: Sets</dd>
                                    <dd>FAQ</dd>
                                </dl>
                                <dl style="margin-top: 45px">
                                    <dt>BLOG</dt>
                                    <dd>Latest Announcements</dd>
                                    <dd>Developer Diaries</dd>
                                    <dd>Getting Started Guides</dd>
                                    <dd>Latest Drop Details</dd>
                                </dl>
                            </div>
                            <div class="icon-menu-con">
                                <div class="icon-menu">
                                    <div class="icon-desc">LEARN MORE</div>
                                    <div class="icon-wrapper">
                                        <img
                                            class="icon"
                                            src="@/assets/images/questions/question3.jpeg"
                                        />
                                    </div>

                                    <div class="icon-desc">
                                        How to play Bitflix
                                    </div>
                                </div>
                                <div class="icon-menu">
                                    <div class="icon-desc">LATEST POST</div>
                                    <div class="icon-wrapper">
                                        <img
                                            class="icon"
                                            src="@/assets/images/questions/question2.png"
                                        />
                                    </div>
                                    <div class="icon-desc">Developer Diary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link
                        to="/lockupBFX"
                        :class="{ active: activeTab == 'PACKS' }"
                        >LOCK UP BFX</router-link
                    >
                </li>
            </ul>
            <div class="session">
                <router-link to="/login" class="login">LOG IN</router-link>
                <router-link to="/signup" class="sign-up">SIGN UP</router-link>
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
        goQuestions() {
            this.$router.push("/questions");
        },
    },
};
</script>

<style lang="scss" scoped>
nav {
    min-height: 71px;
    display: flex;
    justify-content: center;
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
    cursor: pointer;
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
        padding-left: 45px;
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

.questions {
    .questions-menu {
        z-index: -1;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s;

        width: 100%;
        // height: 300px;
        padding: 50px 70px;
        position: absolute;
        left: 0px;
        top: 70px;
        background-color: #0c3061;
    }
    &:hover {
        .questions-menu {
            z-index: 10;
            opacity: 1;
            transform: translateY(0px);
        }
    }
    .menu {
        display: flex;
        .footer-bar dl {
            font-size: 14px;
            font-family: Montserrat, Montserrat-ExtraBold;
            // font-weight: ExtraBold;
            font-weight: bolder;
            color: #ffffff;
            line-height: 26px;
            letter-spacing: 1px;
        }
        .icon-menu-con {
            margin-left: 150px;
            display: flex;
            .icon-menu {
                margin-left: 24px;
                .icon-wrapper {
                    width: 287px;
                    height: 287px;
                    margin-top: 13px;
                    margin-bottom: 14px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .icon {
                    min-width: 100%;
                    min-height: 100%;
                }
                .icon-desc {
                    font-size: 14px;
                    font-family: Montserrat, Montserrat-Bold;
                    font-weight: 700;
                    color: #c9caca;
                    line-height: 26px;
                    letter-spacing: 1px;
                }
            }
        }
    }
}
</style>
