<script setup lang="ts">
import { useNamespace } from '@ho-liang/hooks'
import { CollapseProps, COllapseEmits, CollapseItemName } from './collapse'
import { ref, provide, watch, watchEffect } from 'vue'
import { COLLAPSE_CTX_KEY } from './constant'

defineOptions({ name: 'ho-collapse' })
const bem = useNamespace('collapse', 'ho')

const { modelValue, accordion } = defineProps(CollapseProps)
const emits = defineEmits(COllapseEmits)

const activeNames = ref(modelValue)

const handleItemClick = (name: CollapseItemName) => {
  let _activeNames = [...activeNames.value]

  if (accordion) _activeNames = [_activeNames[0] === name ? '' : name]
  else {
    const index = _activeNames.indexOf(name)
    if (index === -1) _activeNames.push(name)
    else _activeNames.splice(index, 1)
  }

  updateActiveNames(_activeNames)
}

const updateActiveNames = (newNames: CollapseItemName[]) => {
  activeNames.value = newNames
  emits('update:modelValue', newNames)
  emits('change', newNames)
}

watchEffect(() => {
  if (accordion && activeNames.value.length > 1) {
    console.warn('Collapse 的 accordion 属性要求 modelValue 的值为数组且长度为1')
  }
})

watch(
  () => modelValue,
  (newVal) => updateActiveNames(newVal),
)

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
})
</script>

<template>
  <div :class="bem.b()">
    <slot></slot>
  </div>
</template>
