/** * Created by Lay Hunt on 2020-11-17 18:22:12. */
<template>
    <nav :class="theme">
        <div class="container nav-con">
            <div class="logo" @click="goHome"></div>
            <ul class="link-group">
                <li>
                    <router-link to="/packs" :class="{ active: activeTab == 'Packs' }"
                        >PACKS</router-link
                    >
                </li>
                <li>
                    <router-link to="/marketplace" :class="{ active: activeTab == 'marketplace' }"
                        >MARKETPLACE</router-link
                    >
                </li>
                <li>
                    <router-link to="/resell" :class="{ active: activeTab == 'resell' }"
                        >RESELL</router-link
                    >
                </li>
                <li class="questions">
                    <router-link to="/questions" :class="{ active: activeTab == 'questions' }"
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

                                    <div class="icon-desc">How to play Bitflix</div>
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
                <!-- <li>
                    <router-link to="/lockup" :class="{ active: activeTab == 'lockup' }"
                        >LOCK UP BFX</router-link
                    >
                </li> -->
            </ul>
            <div class="session">
                <el-menu
                    mode="horizontal"
                    background-color="#0c306199"
                    text-color="#eeeeee"
                    active-text-color="#eeeeee"
                >
                    <el-submenu v-if="connectedAccount" :index="connectedAccount">
                        <template slot="title">
                            <span class="user-address">{{ connectedAccount }}</span>
                        </template>
                        <el-menu-item index="mynft">
                            <router-link to="/mynft">MY COLLECTION</router-link>
                        </el-menu-item>
                        <el-menu-item index="logout">
                            <span @click="logout">LOG OUT</span>
                        </el-menu-item>
                        <!--                        <el-menu-item index="/meail">-->
                        <!--&lt;!&ndash;                            <router-link>MEAIL</router-link>&ndash;&gt;-->
                        <!--                            <span class="router-link-exact-active router-link-active">MEAIL</span>-->
                        <!--                        </el-menu-item>-->
                    </el-submenu>
                    <el-menu-item
                        v-else
                        class="login-item"
                        index="2-1"
                        style="height: 37px; display: block; line-height: 30px"
                    >
                        <router-link to="/login" class="login">LOG IN</router-link>
                        <!-- <router-link to="/signup" class="sign-up">SIGN UP</router-link> -->
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            activeTab: "home",
        };
    },
    computed: {
        theme() {
            return this.$store.state.global.theme;
        },
        connectedAccount() {
            let address = this.$store.state.user.info.address;
            return address ? address.substr(0, 6) + "..." + address.substr(-4, 4) : "";
        },
    },
    watch: {
        "$route.name"(nav) {
            const navNames = [
                "Home",
                "Packs",
                "marketplace",
                "resell",
                "questions",
                "lockup",
                "Packs",
            ];
            if (navNames.includes(nav)) {
                this.activeTab = nav;
            }
        },
    },
    mounted() {},
    methods: {
        goHome() {
            if (this.$route.path !== "/") {
                this.$router.push("/");
            }
        },
        goQuestions() {
            this.$router.push("/questions");
        },
        async logout() {
            await this.$store.dispatch("user/Quit");
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
    margin-top: 9px;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
        padding-left: 45px;
        padding-bottom: 4px;
        > a {
            font-family: "Montserrat-Bold";
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            color: #ffffff;
            display: inline-block;
            letter-spacing: 0px;
            padding-bottom: 2px;
            border-bottom: 3px solid transparent;
        }
        .active {
            font-weight: 600;
            color: white;
            border-bottom-color: #2b6bd2;
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
        white-space: nowrap;
        margin-left: 26px;
        font-family: "Montserrat-Bold";
        font-size: 20px;
        font-weight: 600;
        height: 100%;
        text-align: center;
        color: #ffffff;
        padding: 0 24px;
        background: linear-gradient(to right, #ba45c8, #2b6bd2);
    }
    .user-address {
        font-family: "Montserrat-Bold";
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
        display: block;
        width: 170px;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        white-space: nowrap;
    }
    /* .sign-up {
        white-space: nowrap;
        margin-left: 26px;
        font-family: "Montserrat-Bold";
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
        padding: 8px 24px;
        background: linear-gradient(to right, #ba45c8, #2b6bd2);
    } */
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
            font-family: Montserrat-ExtraBold, Montserrat;
            // font-weight: ExtraBold;
            // font-weight: bolder;
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
                    font-family: Montserrat-Bold, Montserrat, serif;
                    // font-weight: 700;
                    color: #c9caca;
                    line-height: 26px;
                    letter-spacing: 1px;
                }
            }
        }
    }
}
::v-deep .el-menu {
    border-bottom: unset !important;
    background-color: #00000000 !important;
    li {
        background-color: #00000000 !important;
        &:hover {
            background-color: #00000000 !important;
        }
        div {
            border-bottom-color: #00000000 !important;
            background-color: #00000000 !important;
            i {
                display: none !important;
            }
        }
    }
}

.login-item.el-menu-item.is-active {
    border-color: transparent !important;
}
</style>
