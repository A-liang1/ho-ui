<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useNamespace } from "@ho-liang/hooks";
import { addUnit, isUndefined } from "@ho-liang/utils";
import { iconProps } from "./icon";
// 定义组件的名字
defineOptions({
  name: "ho-icon",
});
const bem = useNamespace("icon", "ho");

const props = defineProps(iconProps);
// 计算属性来计算一个样式
const style = computed(() => {
  const { color, size } = props;
  if (!color && !size) return {};
  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    // display: "block",
    // width: "100px",
    // height: "100px",
    ...(color ? { color: color } : {}),
    // "--color": color, 这是ElementPlus的写法
  };
});
</script>
