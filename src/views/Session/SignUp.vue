/** * Created by Lay Hunt on 2021-05-24 18:16:31. */
<template>
    <div class="sign-up">
        <div class="form">
            <div class="top-line"></div>
            <img class="logo" src="@/assets/images/logo-login.png" />
            <div class="desc">Create Dapper Account</div>
            <span class="name">for BITFLIX</span>
            <div class="email-btn" @click="goEmail">
                <img
                    class="email-icon"
                    src="@/assets/images/register-email@2x.png"
                />
                <span class="btn-text">Sign up using email</span>
            </div>
            <p class="sign-tip">
                Already have an account?
                <router-link to="/login">Sign in</router-link>
            </p>
            <p style="margin-top: 60px" class="sign-tip">
                By signing up for Dapper, you acknowledge that you have read and
                agree to all applicable Terms of Service and our Privacy Policy
            </p>
        </div>
        <router-link class="notice" to="/"
            >What is Dapper and why do I need it?</router-link
        >
    </div>
</template>
<script>
import { Form, FormItem } from "element-ui";
export default {
    name: "login",
    components: {
        [FormItem.name]: FormItem,
        [Form.name]: Form,
    },
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        goEmail() {
            this.$router.push("/email");
        },
        goBack() {
            this.$router.push("/signup");
        },
    },
};
</script>
<style lang="scss" scoped>
.sign-up {
    width: 100%;
    height: 100vh;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.form {
    width: 445px;
    height: 627px;
    background-color: white;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    overflow: hidden;
    // padding: 55px 52px 115px 59px;
}
.top-line {
    width: 100%;
    height: 6px;
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

.email-btn {
    cursor: pointer;
    height: 73px;
    background: #166dce;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin: 112px 52px 32px 59px;
    .email-icon {
        margin-left: 25px;
        width: 41px;
    }
    .btn-text {
        margin-left: 13px;
        font-size: 17px;
        font-family: Montserrat-Regular, Montserrat;
        // font-weight: 400;
        color: #ffffff;
    }
}

.sign-tip {
    margin-left: 63px;
    margin-right: 69px;
    font-size: 12px;
    font-family: "Montserrat-Regular";
    font-weight: 600;
    text-align: left;
    color: #818394;
    letter-spacing: 1px;
    line-height: 17px;
    a:hover {
        text-decoration: underline;
    }
}
.notice {
    margin-top: 20px;
    font-size: 13px;
    font-family: "Montserrat-Regular";
    font-weight: 600;
    text-align: left;
    color: #818394;
    letter-spacing: 1px;
    line-height: 17px;
}
.notice:hover {
    text-decoration: underline;
}
</style>
