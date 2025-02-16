<template>
  <div :class="[bem.b(), bem.is('selected', isSelected), bem.is('disabled', node.disabled)]">
    <div
      :class="bem.e('content')"
      :style="{ paddingLeft: `${node.level * 16}px` }"
      @click="handleSelect"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf),
        ]"
        @click="toggle"
      >
        <ho-icon size="16px" color="pink">
          <Switcher v-if="!isLoading" />
          <Loading v-else />
        </ho-icon>
      </span>

      <ho-checkbox
        v-if="showCheckbox"
        :model-value="checked"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="handleChecked"
      ></ho-checkbox>

      <ho-tree-node-context :node="node" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Switcher from './icon/Switcher.vue'
import Loading from './icon/Loading.vue'
import HoIcon from '@ho-liang/components/icon'
import HoTreeNodeContext from './treeNodeContext.vue'
import HoCheckbox from '@ho-liang/components/checkbox'
import { treeNodeProps, treeNodeEmits } from './tree.js'
import { useNamespace } from '@ho-liang/hooks'
import { computed } from 'vue'

const {
  node,
  expanded,
  loadingKeys,
  selectedKeys,
  showCheckbox,
  checked,
  disabled,
  indeterminate,
} = defineProps(treeNodeProps)
const bem = useNamespace('tree-node', 'ho')
const emit = defineEmits(treeNodeEmits)
// toggle 切换展开收缩的状态
const toggle = () => {
  emit('toggle', node)
}
// 是否正在加载
const isLoading = computed(() => loadingKeys.has(node.key))
// 是否选中
const isSelected = computed(() => {
  return selectedKeys.includes(node.key)
})
// 点击后，处理选中状态
const handleSelect = () => {
  if (node.disabled) return
  emit('select', node)
}
// 点击后，处理选中状态
const handleChecked = (value: boolean) => {
  emit('checked', node, value)
}
</script>
