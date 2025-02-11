<script setup lang="ts">
import LogoVue from '@vicons/ionicons5/LogoVue'
import { ref } from 'vue'

function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      xx: createLabel(level),
      key,
      children: createData(level - 1, key),
    }
  })
}

function createLabel(level: number): string {
  if (level === 1) return '1'
  if (level === 2) return '2'
  if (level === 3) return '3'
  if (level === 4) return '4'
  return ''
}
const data = ref(createData())
console.log(data.value)
</script>
<template>
  <ho-icon :color="'green'" :size="'100px'">
    <LogoVue />
  </ho-icon>
  <ho-tree
    :data="data"
    :label-field="'xx'"
    :key-field="'key'"
    :children-field="'children'"
    :default-expanded-keys="['40', '41']"
  />
</template>

<style scoped></style>
