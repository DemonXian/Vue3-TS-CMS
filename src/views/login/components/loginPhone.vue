<script setup lang="ts">
import type { ElForm } from "element-plus";
import { rulesPhone } from "../config/loginAccountConfig";
import { useLoginStore } from "@/stores/login/login";

const phone = reactive({
  num: "",
  code: ""
});

const elFormPhone = ref<InstanceType<typeof ElForm>>();
const loginStore = useLoginStore();

const loginAction = () => {
  elFormPhone.value?.validate((callback) => {
    // 判断输入是否符合规则
    if (callback) {
      // 调用真正的登录逻辑
      loginStore.phoneLogin(phone.num, phone.code);
    }
  });
};

//向外暴露方法
defineExpose({
  loginAction
});
</script>

<template>
  <ElForm label-width="80px" :rules="rulesPhone" :model="phone" ref="elFormPhone">
    <ElFormItem label="手机号" prop="num">
      <ElInput v-model="phone.num"></ElInput>
    </ElFormItem>
    <ElFormItem label="验证码" prop="code">
      <div class="verification-code">
        <ElInput v-model="phone.code"></ElInput>
        <el-button class="get-code-btn" type="primary" size="default"> 获取验证码 </el-button>
      </div>
    </ElFormItem>
  </ElForm>
</template>

<style scoped>
.verification-code {
  display: flex;
  .get-code-btn {
    margin-left: 8px;
  }
}
</style>
