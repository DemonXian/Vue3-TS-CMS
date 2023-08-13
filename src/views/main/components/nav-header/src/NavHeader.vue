<script setup lang="ts">
import UserInfo from "./userInfo.vue";
import { Fold, Expand } from "@element-plus/icons-vue";

// 左侧菜单折叠标识
const isFold = ref(false);

const emit = defineEmits(["changFold"]);

const changFold = () => {
  isFold.value = !isFold.value;
  emit("changFold", isFold.value);
};
</script>

<template>
  <div class="nav-header">
    <el-icon class="fold-icon" @click="changFold">
      <Fold v-if="!isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div class="user-info">
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;

  .fold-icon {
    font-size: 25px;
  }

  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
