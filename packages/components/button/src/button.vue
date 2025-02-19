<script setup lang="ts">
import { useNamespace } from '@ho-liang/hooks'
import HoIcon from '@ho-liang/components/icon'
import LoadingComponent from '../../internal-icon/Loading.vue'
import { buttonProps, buttonEmits, type ButtonProps, type ButtonEmits } from './button'
import { useSlots } from 'vue'

const bem = useNamespace('button', 'ho')
// 禁用组件的自动继承attrs
defineOptions({ name: 'ho-button', inheritAttrs: false })

const { size, type, round, loading, disabled, iconPlacement, nativeType } = defineProps(buttonProps)

const emits = defineEmits(buttonEmits)
const slots: any = useSlots()

const handleClick = (e: MouseEvent) => {
  emits('click', e)
  emits('mousedown', e)
}
</script>

<template>
  <button
    :class="[
      bem.b(),
      bem.m(size),
      bem.m(type),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled),
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <template v-if="slots.icon && iconPlacement === 'left'">
      <ho-icon>
        <LoadingComponent v-if="loading" />
        <template v-if="!loading">
          <component :is="slots.icon" />
        </template>
      </ho-icon>
    </template>
    <slot></slot>
    <template v-if="slots.icon && iconPlacement === 'right'">
      <ho-icon>
        <LoadingComponent v-if="loading" />
        <template v-if="!loading">
          <component :is="slots.icon" />
        </template>
      </ho-icon>
    </template>
  </button>
</template>

<style scoped></style>
