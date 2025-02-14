<script setup>
import BComponent from './b.vue'
import { ref } from 'vue'
const a = ref(1)
const emitChangeA = (val) => {
  a.value = val
}
const selected = ref(1)
</script>
<template>
  {{ a }}
  <BComponent :a="a" @changeProp="emitChangeA" v-model:selected="selected"></BComponent>
  <!-- 相当于 :selected="selected" @update:selected="selected = $event" -->
</template>
