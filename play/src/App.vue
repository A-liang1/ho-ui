<template>
  <ho-button
    @click="handleClick"
    @mousedown="handleMousedown"
    size="small"
    type="danger"
    :round="true"
    :disabled="false"
  >
    按钮
    <template #icon>
      <ho-icon>
        <Switcher />
      </ho-icon>
    </template>
  </ho-button>
</template>
<script setup lang="ts">
import HoIcon from '@ho-liang/components/icon'
import Switcher from '@ho-liang/components/internal-icon/Switcher.vue'

const handleClick = (e: MouseEvent) => {
  console.log('click', e)
}

const handleMousedown = (e: MouseEvent) => {
  console.log('mousedown', e)
}
</script>
<style scoped></style>
