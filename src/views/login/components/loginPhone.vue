<script setup lang="ts">
import { rulesPhone } from "../config/loginAccountConfig";

const phone = reactive({
  num: "",
  code: ""
});
</script>

<template>
  <ElForm label-width="80px" :rules="rulesPhone" :model="phone">
    <ElFormItem label="手机号" prop="num">
      <ElInput v-model="phone.num"></ElInput>
    </ElFormItem>
    <ElFormItem label="验证码" prop="code">
      <div class="verification-code">
        <ElInput v-model="phone.code"></ElInput>
        <el-button class="get-code-btn" type="primary" size="default">
          获取验证码
        </el-button>
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
