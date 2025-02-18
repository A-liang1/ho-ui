<template>
  <ho-collapse v-model="activeNames">
    <ho-collapse-item name="1" title="标题1" disabled>
      <div>内容1</div>
    </ho-collapse-item>
    <ho-collapse-item name="2" title="标题2">
      <div>内容2</div>
      <div>内容2</div>
      <div>内容2</div>
      <div>内容2</div>
      <div>内容2</div>
      <div>内容2</div>
      <div>内容2</div>
    </ho-collapse-item>
    <ho-collapse-item name="3" title="标题3">
      <div>内容3</div>
    </ho-collapse-item>
  </ho-collapse>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>
<style scoped></style>
