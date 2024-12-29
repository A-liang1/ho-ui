<script setup>
import b from "./b.vue";
import { ref } from "vue";
const a = ref(1);
const emitChangeA = (val) => {
  a.value = val;
};
</script>
<template>
  {{ a }}
  <b :a="a" @changeProp="emitChangeA"></b>
</template>
