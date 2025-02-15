<script lang="ts" setup>
import { checkboxProps, checkboxEmits } from './checkbox'
import { useNamespace } from '@ho-liang/hooks'
import { computed, useSlots, ref, watch, onMounted } from 'vue'

defineOptions({
  name: 'ho-checkbox',
})

const bem = useNamespace('checkbox', 'ho')

const { modelValue, disabled, indeterminate, label } = defineProps(checkboxProps)

const emits = defineEmits(checkboxEmits)
const slots = useSlots()

const model = computed({
  get() {
    return modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})

const inputRef = ref<HTMLInputElement>()
const initIndeterminate = () => {
  inputRef.value!.indeterminate = indeterminate
}
watch(() => indeterminate, initIndeterminate)

onMounted(() => initIndeterminate())

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = target.checked ? true : false
  emits('change', value)
}
</script>
<template>
  <label :class="bem.b()">
    <span :class="bem.e('input')">
      <input
        type="checkbox"
        v-model="model"
        :disabled="disabled"
        ref="inputRef"
        :value="label"
        @change="handleChange"
      />
    </span>

    <span :class="bem.e('label')" v-if="slots.default || label">
      <slot></slot>
      <span v-if="!slots.default">{{ label }}</span>
    </span>
  </label>
</template>
