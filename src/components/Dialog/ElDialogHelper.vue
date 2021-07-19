<template>
    <el-dialog
        :append-to-body="true"
        :visible.sync="visible"
        :width="width"
        :before-close="() => close(false)"
        @close="() => close(false)"
        custom-class="el-dialog-helper"
    >
        <slot />
        <slot name="title" slot="title">
            <span>{{ title }}</span>
        </slot>
        <slot name="footer" v-bind:close="(bool) => close(bool)" />
    </el-dialog>
</template>

<script>
import { Dialog } from "element-ui";

export default {
    name: "ElDialogHelper",
    data: () => ({
        visible: false,
        promise_: undefined,
        resolve_: undefined,
    }),
    components: { [Dialog.name]: Dialog },
    props: {
        width: {
            type: String,
            default: "50%",
        },
        title: {
            type: String,
            default: "",
        },
    },
    methods: {
        open(callback = () => {}) {
            this.callback_ = callback;
            this.visible = true;
            this.promise_ = new Promise((resolve) => {
                this.resolve_ = resolve;
            });
            return this.promise_;
        },
        close(bool = false) {
            try {
                if (bool) {
                    this.callback_();
                }
                this.visible = false;
                this.resolve_(bool);
                this.promise_.then(() => {});
            } catch (e) {
                this.$notify.error(e.message);
            }
        },
    },
};
</script>

<style scoped></style>
