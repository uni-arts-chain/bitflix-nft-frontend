<template>
    <div class="email-page">
        <div class="email-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <el-form
                class="email"
                ref="form"
                :model="form"
                label-width="120px"
                :rules="rules"
                @submit.prevent.native
            >
                <el-form-item label prop="email">
                    <template v-slot:label>
                        <label class="label">EMAIL:</label>
                    </template>
                    <input
                        type="text"
                        class="input"
                        placeholder="Please enter email address"
                    />
                    <button class="button">Send</button>
                </el-form-item>
                <el-form-item label prop="code">
                    <template v-slot:label>
                        <label class="label">CODE:</label>
                    </template>
                    <input
                        class="input"
                        type="text"
                        placeholder="Please enter the verification code"
                    />
                </el-form-item>
                <button @click="goWallet" class="connect">Connect</button>
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
            rules: {},
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
        font-family: "Montserrat-Bold";
        // font-weight: R;
        color: #ffffff;
    }
    .email {
        margin-top: 77px;
        color: #ffffff;
        .label {
            font-size: 24px;
            font-family: "Montserrat-Bold";
            font-weight: 500;
            color: #ffffff;
            top: 2px;
            position: relative;
        }
        .input {
            font-size: 14px;
            font-weight: 600;
            padding: 4px 0px;
            margin-left: 10px;
            background-color: transparent;
            width: 330px;
            border-bottom: 2px solid #c9caca;
            font-family: Montserrat-SemiBold, Montserra;
        }
        .button {
            // font-weight: 600;
            margin-left: 30px;
            padding: 8px 40px;
            background-color: #0da4f5;
            border-radius: 20px;
            font-family: "Montserrat-Bold";
        }

        .connect {
            margin-top: 30px;
            margin-left: 40px;
            cursor: pointer;
            border-radius: 30px;
            font-family: "Montserrat-Bold";
            font-size: 16px;
            font-weight: 500;
            padding: 20px;
            width: 350px;
            background: linear-gradient(to right, #ba45c8, #2b6bd2);
        }
    }
}
</style>
