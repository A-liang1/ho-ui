<script setup>
import { defineProps, computed, defineEmits } from 'vue'
const { a, selected } = defineProps({
  a: Number,
  selected: Number,
})
const b = computed(() => {
  return props.a + 1
})
const emit = defineEmits(['changeProp'])
const clickb = () => {
  emit('changeProp', b.value)
}
</script>
<template>
  <button @click="clickb">{{ a }}</button>
</template>
