<script setup lang="ts">
// import LogoVue from '@vicons/ionicons5/LogoVue'
import { ref } from 'vue'
import { TreeOptions } from '@ho-liang/components'

// function createData(level = 4, parentKey = ''): any {
//   if (!level) return []
//   const arr = new Array(7 - level).fill(0)
//   return arr.map((_, idx: number) => {
//     const key = parentKey + level + idx
//     return {
//       xx: createLabel(level),
//       key,
//       children: createData(level - 1, key),
//     }
//   })
// }

function createLabel(level: number): string {
  if (level === 1) return '1'
  if (level === 2) return '2'
  if (level === 3) return '3'
  if (level === 4) return '4'
  return ''
}

const createData = () => [
  {
    xx: nextLabel(),
    key: 1,
    isLeaf: false,
  },
  {
    xx: nextLabel(),
    key: 2,
    isLeaf: false,
  },
]

const nextLabel = (currentLabel?: string): string => {
  if (!currentLabel) return 'Out of Tao,One is born'
  if (currentLabel === 'Out of Tao,One is born') return 'Out of One,Two is born'
  if (currentLabel === 'Out of One,Two is born') return 'Out of Two,Three is born'
  if (currentLabel === 'Out of Two,Three is born') return 'Out of Three,the created universe'
  if (currentLabel === 'Out of Three,the created universe') return 'Out of Tao,One is born'
  return ''
}

const data = ref(createData())
console.log(data.value)

const handleLoad = (node: TreeOptions) => {
  return new Promise<TreeOptions[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          xx: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false,
        },
      ])
    }, 1000)
  })
}
</script>
<template>
  <!-- <ho-icon :color="'green'" :size="'100px'">
    <LogoVue />
  </ho-icon> -->
  <div style="height: 200px; overflow: auto">
    <ho-tree :data="data" :label-field="'xx'" :on-load="handleLoad" />
  </div>
</template>

<style scoped></style>
