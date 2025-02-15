<script setup lang="ts">
// import LogoVue from '@vicons/ionicons5/LogoVue'
import { ref } from 'vue'
import type { TreeOptions, Key } from '@ho-liang/components'

function createLabel(level: number): string {
  if (level === 1) return '1'
  if (level === 2) return '2'
  if (level === 3) return '3'
  if (level === 4) return '4'
  return ''
}

function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(20 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key),
    }
  })
}

// const createData = () => [
//   {
//     xx: nextLabel(),
//     key: 1,
//     isLeaf: false,
//   },
//   {
//     xx: nextLabel(),
//     key: 2,
//     isLeaf: false,
//   },
// ]

const nextLabel = (currentLabel?: string): string => {
  if (!currentLabel) return 'Out of Tao,One is born'
  if (currentLabel === 'Out of Tao,One is born') return 'Out of One,Two is born'
  if (currentLabel === 'Out of One,Two is born') return 'Out of Two,Three is born'
  if (currentLabel === 'Out of Two,Three is born') return 'Out of Three,the created universe'
  if (currentLabel === 'Out of Three,the created universe') return 'Out of Tao,One is born'
  return ''
}

// const data = ref(createData())
// console.log(data.value)
const data = ref<TreeOptions[]>([
  {
    key: '0',
    label: '0',
    children: [
      { key: '0-0', label: '0-0' },
      {
        disabled: true,
        key: '0-1',
        label: '0-1',
        children: [
          {
            label: '0-1-0',
            key: '0-1-0',
          },
          {
            label: '0-1-1',
            key: '0-1-1',
          },
        ],
      },
    ],
  },
])

const handleLoad = (node: TreeOptions) => {
  return new Promise<TreeOptions[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          xx: nextLabel(node.xx as string),
          key: node.key + nextLabel(node.xx as string),
          isLeaf: false,
        },
      ])
    }, 1000)
  })
}
const value = ref<Key[]>([])

const check = ref(true)

const handleChange = (value: boolean) => {}
</script>
<template>
  <!-- <ho-icon :color="'green'" :size="'100px'">
    <LogoVue />
  </ho-icon> -->

  <ho-tree
    :data="data"
    :on-load="handleLoad"
    v-model:selected-keys="value"
    selectable
    show-checkbox
    :default-checked-keys="['40', '41']"
  >
    <template #default="{ node }">
      <span>{{ node.key }}-{{ node.label }}</span>
    </template>
  </ho-tree>

  {{ check }}
  <ho-checkbox :model-value="check" :label="'节点'" @change="handleChange">节点1</ho-checkbox>
</template>
