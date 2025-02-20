<script lang="ts" setup>
import { ref } from 'vue'
const isOver = ref(false)
const emit = defineEmits(['file'])

const onDrop = (e: DragEvent) => {
  e.stopPropagation()
  emit('file', Array.from(e.dataTransfer!.files))
}

const onDragover = () => {
  isOver.value = true
}
</script>

<template>
  <div
    @dragover.prevent="onDragover"
    @dragleave.prevent="($event) => (isOver = false)"
    @drop.prevent="onDrop"
  >
    <slot></slot>
  </div>
</template>
