<template>
  <div :class="bem.b()" :style="{ paddingLeft: `${node.level * 16}px` }">
    <div :class="bem.e('content')">
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf),
        ]"
        @click="toggle"
      >
        <HoIcon size="16px" color="pink">
          <Switcher v-if="!isLoading" />
          <Loading v-else />
        </HoIcon>
      </span>

      <span :class="bem.e('label')">{{ node?.label }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Switcher from './icon/Switcher'
import Loading from './icon/Loading.tsx'
import HoIcon from '@ho-liang/components/icon'
import { treeNodeProps, treeNodeEmits } from './tree'
import { useNamespace } from '@ho-liang/hooks'
import { computed } from 'vue'

const { node, expanded, loadingKeys } = defineProps(treeNodeProps)
const bem = useNamespace('tree-node', 'ho')
const emit = defineEmits(treeNodeEmits)

const toggle = () => {
  emit('toggle', node)
}

const isLoading = computed(() => loadingKeys.has(node.key))
</script>
