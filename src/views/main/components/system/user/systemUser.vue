<script setup lang="ts">
import MLForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";
</script>

<template>
  <div class="user">
    <div class="search">
      <MLForm v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
