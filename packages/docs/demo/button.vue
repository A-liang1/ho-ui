
<template>
  <ho-button @click="increment"  type="primary">
    {{ count }}
  </ho-button>
</template>

<script setup>
import HoButton from '@ho-liang/components/button';
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
