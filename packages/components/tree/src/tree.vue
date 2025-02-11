<template>
  <div :class="bem.b()">
    <template v-for="node in flattenTree" :key="node.key">
      <div :class="bem.e('element')">{{ node.label }}</div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { treeProps, TreeNode, TreeOptions } from './tree'
import { computed, ref, watch } from 'vue'
import { useNamespace } from '@ho-liang/hooks'

const bem = useNamespace('tree', 'ho')

defineOptions({
  name: 'ho-tree',
})
const { data, labelField, keyField, childrenField, defaultExpandedKeys } = defineProps(treeProps)

const tree = ref<TreeNode[]>([])
// 规格化树的工具函数（获取传入的key，label，children）
const createOptions = (key: string, label: string, children: string) => {
  return {
    getKey(node: TreeOptions) {
      return node[key] as string
    },
    getLabel(node: TreeOptions) {
      return node[label] as string
    },
    getChildren(node: TreeOptions) {
      return node[children] as TreeNode[]
    },
  }
}
const treeOptions = createOptions(keyField, labelField, childrenField)
// 递归规格化树
const createTree = (data: TreeOptions[]): TreeNode[] => {
  const traversal = (data: TreeOptions[], parent: TreeNode | null = null) => {
    return data.map((node) => {
      const children = treeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [],
        level: parent ? parent.level + 1 : 0,
        rawNode: node,
        isLeaf: node.isLeaf ?? children.length === 0,
      }
      if (children.length > 0) treeNode.children = traversal(children, treeNode)
      return treeNode
    })
  }

  const result: TreeNode[] = traversal(data)
  return result
}
watch(
  () => data || [],
  (data: TreeOptions[]) => {
    tree.value = createTree(data)
  },
  { immediate: true },
)
// 拍平 默认展开的key
const ExpandedKeysSet = ref(new Set(defaultExpandedKeys))
const flattenTree = computed(() => {
  const expandedKeys = ExpandedKeysSet.value // 默认展开的key，传入的key
  const flattenNodes: TreeNode[] = [] // 拍平的树
  const nodes = tree.value || [] // 格式化后的树
  const stack: TreeNode[] = [] // 栈

  for (let i = 0; i < nodes.length; i++) {
    stack.push(nodes[i])
  } // [41 40]
  //深度遍历
  while (stack.length) {
    const node = stack.pop() // 取前边可能会塌陷
    if (!node) break
    flattenNodes.push(node)
    if (expandedKeys.has(node.key)) {
      const children = node.children
      if (children) {
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i])
        }
      }
    }
  }

  return flattenNodes
})
</script>
