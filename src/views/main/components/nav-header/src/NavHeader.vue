<script setup lang="ts">
// 左侧菜单折叠标识
const isFold = ref(false);

const emit = defineEmits(["changFold"]);

const changFold = () => {
  isFold.value = !isFold.value;
  emit("changFold", isFold.value);
};
</script>

<template>
  <el-icon class="fold-icon" @click="changFold">
    <Fold v-if="!isFold" />
    <Expand v-else />
  </el-icon>
</template>

<style scoped lang="less">
.fold-icon {
  font-size: 25px;
}
</style>
