<template>
  <div :class="bem.b()">
    <ho-virtual-list :items="flattenTree" :remain="8" :size="35">
      <template #a="{ node }">
        <ho-tree-node
          :key="node.key"
          :node="node"
          :expanded="isExpanded(node)"
          :loadingKeys="loadingKeysRef"
          :selectedKeys="selectKeysRef"
          :show-checkbox="showCheckbox"
          :checked="isChecked(node)"
          :disabled="isDisabled(node)"
          :indeterminate="isIndeterminate(node)"
          @toggle="toggle"
          @select="handleSelect"
          @checked="handleChecked"
        />
      </template>
    </ho-virtual-list>
  </div>
</template>
<script lang="ts" setup>
import { treeProps, TreeNode, TreeOptions, Key, treeEmits, treeInjectKey } from './tree'
import { computed, onMounted, provide, ref, useSlots, watch } from 'vue'
import { useNamespace } from '@ho-liang/hooks'
import HoTreeNode from './treeNode.vue'
import HoVirtualList from '@ho-liang/components/virtual-list'

const bem = useNamespace('tree', 'ho')

defineOptions({
  name: 'ho-tree',
})
const {
  data,
  labelField,
  keyField,
  childrenField,
  defaultExpandedKeys,
  onLoad,
  selectedKeys,
  selectable,
  multiple,
  showCheckbox,
  defaultCheckedKeys,
} = defineProps(treeProps)

const emits = defineEmits(treeEmits)

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
const createTree = (data: TreeOptions[], parent: TreeNode | null = null): TreeNode[] => {
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
        disabled: !!node.disabled,
        parentKey: parent?.key,
      }
      if (children.length > 0) treeNode.children = traversal(children, treeNode)
      return treeNode
    })
  }

  const result: TreeNode[] = traversal(data, parent)
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
// 拍平树
const flattenTree = computed(() => {
  const expandedKeys = ExpandedKeysSet.value // 默认展开的key，传入的key
  const flattenNodes: TreeNode[] = [] // 拍平的树
  const nodes = tree.value || [] // 格式化后的树
  const stack: TreeNode[] = [] // 栈

  for (let i = nodes.length - 1; i >= 0; i--) {
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
// 判断是否展开
const isExpanded = (node: TreeNode): boolean => {
  return ExpandedKeysSet.value.has(node.key)
}

const loadingKeysRef = ref(new Set<Key>())
// 触发加载
const triggerLoading = (node: TreeNode) => {
  if (!node.children.length && !node.isLeaf) {
    const loadingKeys = loadingKeysRef.value
    if (!loadingKeys.has(node.key)) {
      loadingKeys.add(node.key)
      if (onLoad) {
        onLoad(node.rawNode).then((children: TreeOptions[]) => {
          node.rawNode.children = children
          node.children = createTree(children, node)
          loadingKeys.delete(node.key)
        })
      }
    }
  }
}

// 展开
const expand = (node: TreeNode) => {
  ExpandedKeysSet.value.add(node.key)
  triggerLoading(node)
}
// 收起
const collapse = (node: TreeNode) => {
  ExpandedKeysSet.value.delete(node.key)
}
// 切换
const toggle = (node: TreeNode) => {
  if (isExpanded(node) && !loadingKeysRef.value.has(node.key)) collapse(node)
  else expand(node)
}

// 选中节点
const selectKeysRef = ref<Key[]>([])

watch(
  () => selectedKeys,
  (value) => {
    if (value) selectKeysRef.value = value
  },
  { immediate: true },
)

const handleSelect = (node: TreeNode) => {
  const key = node.key
  let keys = Array.from(selectKeysRef.value)

  if (!selectable) return
  if (multiple) keys = keys.includes(key) ? keys.filter((item) => item !== key) : [...keys, key]
  // else keys = keys.includes(key) ? [key] : [key]
  else keys = [key]

  emits('update:selectedKeys', keys)
}
// 提供出去的属性
provide(treeInjectKey, {
  slots: useSlots(),
})
//checkbox是否选中
const checkedKeysRefs = ref<Set<Key>>(new Set(defaultCheckedKeys))

const isChecked = (node: TreeNode) => {
  return checkedKeysRefs.value.has(node.key)
}

const isDisabled = (node: TreeNode) => {
  return !!node.disabled
}

const indeterminateKeysRefs = ref<Set<Key>>(new Set())

const isIndeterminate = (node: TreeNode) => {
  return indeterminateKeysRefs.value.has(node.key)
}

const handleCheckedChild = (node: TreeNode, checked: boolean) => {
  if (!node) return
  const checkedKeys = checkedKeysRefs.value
  if (checked) indeterminateKeysRefs.value.delete(node.key)

  checkedKeys[checked ? 'add' : 'delete'](node.key)
  const children = node.children
  if (children) {
    children.forEach((child) => {
      if (!child.disabled) {
        handleCheckedChild(child, checked)
      }
    })
  }
}

const findNode = (key: Key) => {
  return flattenTree.value.find((node) => node.key === key)
}

const updateCheckedKeys = (node: TreeNode) => {
  if (node.parentKey) {
    const parentNode = findNode(node.parentKey)
    if (parentNode) {
      let allChecked = true
      let hasChecked = false

      const nodes = parentNode.children
      for (const node of nodes) {
        if (checkedKeysRefs.value.has(node.key)) {
          hasChecked = true
        } else if (indeterminateKeysRefs.value.has(node.key)) {
          allChecked = false
          hasChecked = true
        } else allChecked = false
      }
      if (allChecked) {
        checkedKeysRefs.value.add(parentNode.key)
        indeterminateKeysRefs.value.delete(parentNode.key)
      } else if (hasChecked) {
        checkedKeysRefs.value.delete(parentNode.key)
        indeterminateKeysRefs.value.add(parentNode.key)
      } else {
        checkedKeysRefs.value.delete(parentNode.key)
        indeterminateKeysRefs.value.delete(parentNode.key)
      }
      updateCheckedKeys(parentNode)
    }
  }
}

const handleChecked = (node: TreeNode, checked: boolean) => {
  handleCheckedChild(node, checked)

  updateCheckedKeys(node)
}

onMounted(() => {
  checkedKeysRefs.value.forEach((key: Key) => {
    handleCheckedChild(findNode(key)!, true)
  })
})
</script>
