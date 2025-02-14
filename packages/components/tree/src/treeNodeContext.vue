<script lang="ts">
import { defineComponent, inject, h } from 'vue'
import { treeNodeContextProps, treeInjectKey } from './tree'
import { useNamespace } from '@ho-liang/hooks'
// provide一个slots，slots返回一个虚拟节点，这个虚拟节点怎么渲染呢？
// 在做mini-vue时，h函数会根据虚拟节点，生成一个真实的节点
export default defineComponent({
  name: 'TreeNodeContext',
  props: treeNodeContextProps,
  setup(props) {
    const bem = useNamespace('tree-node', 'ho')

    const treeContext = inject(treeInjectKey)
    const { node } = props
    return () => {
      return treeContext?.slots.default
        ? treeContext?.slots.default({ node })
        : h('span', { class: bem.e('label') }, node.label)
    }
  },
})
</script>
<template></template>
