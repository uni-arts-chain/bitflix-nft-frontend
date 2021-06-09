<template>
    <div class="email-page">
        <div class="email-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <el-form
                class="email"
                ref="form"
                :model="form"
                label-width="130px"
                :rules="rules"
                @submit.prevent.native
            >
                <el-form-item label prop="email">
                    <label class="label">EMAIL:</label>
                    <input type="text" class="input" />
                    <button class="button">Send</button>
                </el-form-item>
                <el-form-item label prop="code">
                    <label class="label">CODEL:</label>
                    <input class="input" type="text" />
                </el-form-item>
                <el-form-item>
                    <button @click="goWallet" class="connect">Connect</button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { Form, FormItem } from "element-ui";

export default {
    name: "Email",
    components: {
        [FormItem.name]: FormItem,
        [Form.name]: Form,
    },
    data() {
        return {
            form: {},
            rules: [],
        };
    },
    methods: {
        goBack() {
            this.$router.push("/signup");
        },
        goWallet() {
            this.$router.push("/wallet");
        },
    },
};
</script>

<style lang="scss" scoped>
.email-page {
    margin-top: 60px;
    margin-bottom: 100px;
}
.email-content {
    margin-top: 60px;
    width: 1222px;
    margin: auto;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #ffffff;
    }
    .email {
        margin-top: 77px;
        color: #ffffff;
        .label {
            font-size: 20px;
            font-family: Adobe Heiti Std, Adobe Heiti Std-R;
            font-weight: 500;
            color: #ffffff;
            top: 10px;
            position: relative;
        }
        .input {
            font-size: 16px;
            font-weight: 600;
            padding: 8px 2px;
            margin-left: 20px;
            background-color: transparent;
            width: 330px;
            border-bottom: 2px solid #c9caca;
        }
        .button {
            font-weight: 600;
            margin-left: 30px;
            padding: 10px 35px;
            background-color: #0da4f5;
            border-radius: 20px;
        }

        .connect {
            margin-top: 30px;
            margin-left: 10px;
            cursor: pointer;
            border-radius: 20px;
            font-family: Adobe Heiti Std, Adobe Heiti Std-R;
            font-size: 16px;
            font-weight: 500;
            padding: 10px;
            width: 350px;
            background: linear-gradient(to right, #ba45c8, #2b6bd2);
        }
    }
}
</style>
