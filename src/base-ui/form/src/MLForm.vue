<script setup lang="ts">
import type { PropType } from "vue";
import type { IFromItem } from "../index";

defineProps({
  formItems: {
    type: Array as PropType<IFromItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: "100px"
  },
  itemStyle: {
    type: Object,
    default: () => ({
      padding: "10px 30px"
    })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
});
</script>

<template>
  <el-form :label-width="labelWidth">
    <el-row>
      <template v-for="item in formItems" :key="item.label">
        <el-col v-bind="colLayout">
          <el-form-item :label="item.label" size="" :rules="item.rules" :style="itemStyle">
            <el-input
              v-if="item.type === 'input'"
              :placeholder="item.placeholder"
              v-bind="item.otherOptions"
            />
            <el-input
              v-else-if="item.type === 'password'"
              :placeholder="item.placeholder"
              v-bind="item.otherOptions"
              type="password"
            />
            <el-select
              v-else-if="item.type === 'select'"
              :placeholder="item.placeholder"
              v-bind="item.otherOptions"
              style="width: 100%"
            >
              <el-option v-for="option in item.options" :key="option.label" :value="option.value">{{
                option.label
              }}</el-option>
            </el-select>
            <el-date-picker v-else-if="item.type === 'datepicker'" v-bind="item.otherOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<style scoped lang="less">
.el-form {
  padding-top: 22px;
}
</style>
