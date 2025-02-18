<script setup>
import { ref } from 'vue'
const showCode = ref(false)
</script>

<template>
  <div class="code-preview-container">
    <div class="button-group">
      <button 
        @click="showCode = false"
        :class="{ active: !showCode }"
      >预览</button>
      <button
        @click="showCode = true"
        :class="{ active: showCode }"
      > 源码</button>
    </div>

    <div v-if="!showCode" class="preview-area">
      <slot name="preview" />
    </div>
    
    <div v-else class="code-area">
      <slot name="code" />
    </div>
  </div>
</template>

<style scoped>
.code-preview-container {
  border: 1px solid #e2e2e3;
  border-radius: 8px;
  margin: 1em 0;
}

.button-group {
  padding: 0.5em;
  border-bottom: 1px solid #e2e2e3;
}

button {
  padding: 4px 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.3s;
}

button.active {
  background: #f0f0f0;
  border-radius: 4px;
}

.preview-area {
  padding: 1em;
}

.code-area {
  padding: 1em;
  background: #f8f8f8;
}
</style>