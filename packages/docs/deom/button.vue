
<template>
  <button @click="increment" style="width: 100px; height: 100px">
    {{ count }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
