<script setup lang="ts">
import { inject, computed } from 'vue'
import { useNamespace } from '@ho-liang/hooks'
import HoIcon from '@ho-liang/components/icon'
import Switcher from '../../internal-icon/Switcher.vue'
import { CollapseItemProps } from './collapse'
import { COLLAPSE_CTX_KEY } from './constant'

defineOptions({ name: 'ho-collapse-item' })
const bem = useNamespace('collapse-item', 'ho')

const { name, title, disabled } = defineProps(CollapseItemProps)
const collapseCtx = inject(COLLAPSE_CTX_KEY)

const isActive = computed(() => collapseCtx?.activeNames.value.includes(name!))

const handleClick = () => {
  if (disabled) return
  collapseCtx?.handleItemClick(name!)
}
</script>

<template>
  <div :class="[bem.b()]">
    <div
      :class="[bem.e('header'), bem.is('disabled', disabled)]"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <span :class="bem.e('title')">
        <slot name="title">{{ title }}</slot>
      </span>
      <ho-icon>
        <Switcher :class="[bem.e('header-angle'), { active: isActive }]"></Switcher>
      </ho-icon>
    </div>

    <div :class="bem.e('wrapper')" v-show="isActive">
      <div :class="bem.e('content')" :id="`item-content-${name}`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
