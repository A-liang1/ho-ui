<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="ring-loading">
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="#3498db"
      stroke-width="4"
      stroke-dasharray="31.4 31.4"
      transform="rotate(-90 25 25)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>

<script setup>
defineOptions({
  name: 'RingLoading',
})
</script>

<style scoped>
.ring-loading {
  width: 50px;
  height: 50px;
}
</style>
