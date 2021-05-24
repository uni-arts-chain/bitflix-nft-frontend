/** * Created by Lay Hunt on 2021-05-24 18:16:31. */
<template>
    <div class="login">
        <div class="form" :model="form" submit.native>
            <div class="top-line"></div>
            <img class="logo" src="@/assets/images/logo-login.png" />
            <div class="desc">Sigin in to dapper</div>
            <span class="name">for BITFLIX</span>
            <el-form
                ref="form"
                :model="form"
                label-position="top"
                label-width="130px"
                :rules="rules"
            >
                <el-form-item label="Email" prop="email">
                    <input type="text" />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <input type="password" />
                </el-form-item>
                <router-link class="forgot" to="/">Forgot password</router-link>
                <el-form-item style="margin-bottom: 5px">
                    <button @click.prevent="submit" class="submit">
                        Sign in
                    </button>
                </el-form-item>
                <p class="go-register">
                    Don't have an account?<router-link to="/signup"
                        >Register here</router-link
                    >
                </p>
            </el-form>
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
        submit() {
            this.$router.push("/");
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
    width: 445px;
    height: 627px;
    background-color: white;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    overflow: hidden;
    text-align: left;
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
.el-form {
    margin-left: 63px;
    width: 322px;
    margin-top: 88px;
    .el-form-item {
    }
    ::v-deep .el-form-item__label {
        font-size: 17px;
        font-family: "Montserrat-Regular";
        font-weight: 600;
        text-align: left;
        color: #818394;
        letter-spacing: 1px;
        line-height: 17px;
    }
    input {
        border: 1px solid #818394;
        display: block;
        height: 51px;
        border-radius: 6px;
        width: 100%;
        padding: 5px 10px;
        font-size: 20px;
    }
    .forgot {
        font-size: 12px;
        font-family: "Montserrat-Regular";
        font-weight: 600;
        text-align: left;
        color: #818394;
        letter-spacing: 1px;
        line-height: 17px;
    }
    .submit {
        width: 149px;
        height: 50px;
        margin-top: 30px;
        border-radius: 5px;
        background: linear-gradient(to left, #d63ed5, #166dce);
        font-size: 15px;
        font-family: "Montserrat-Regular";
        font-weight: 600;
        text-align: left;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
    }
    .go-register {
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
