<script lang="ts" setup>
import { useNamespace } from '@ho-liang/hooks'
import { computed, onMounted, reactive, ref, watch } from 'vue'

const bem = useNamespace('vl', 'ho')

const { items, remain, size } = defineProps({
  items: {
    type: Array<any>,
    default: () => [],
  },
  remain: {
    type: Number,
    default: 8,
  },
  size: {
    type: Number,
    default: 35,
  },
})

const containerRef = ref<HTMLElement>()
const phantomRef = ref<HTMLElement>()

const state = reactive({
  start: 0,
  end: remain,
  offset: 0,
})

const prev = computed(() => Math.min(state.start, remain))
const next = computed(() => Math.max(items.length - state.end, remain))

const visibleData = computed(() => {
  return items.slice(state.start - prev.value, state.end + next.value)
})

const initVl = () => {
  const containerHeight = remain * size
  const phantomHeight = items.length * size
  if (containerRef.value) containerRef.value!.style.height = containerHeight + 'px'
  if (phantomRef.value) phantomRef.value!.style.height = phantomHeight + 'px'
}

watch(
  () => items.length,
  () => initVl(),
)

onMounted(() => initVl())

// let ticking = false
// const handleScroll = () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       const scrollTop = containerRef.value!.scrollTop
//       state.start = Math.floor(scrollTop / size)

//       state.end = Math.min(state.start + remain, items.length)
//       state.offset = state.start * size
//       ticking = false
//     })
//     ticking = true
//   }
// }

const handleScroll = () => {
  const scrollTop = containerRef.value!.scrollTop
  state.start = Math.floor(scrollTop / size)

  state.end = Math.min(state.start + remain, items.length)
  state.offset = state.start * size - prev.value * size
}
</script>

<template>
  <div :class="bem.b()" ref="containerRef" @scroll="handleScroll">
    <div :class="bem.e('phantom')" ref="phantomRef">
      <div :class="bem.e('list')" :style="{ transform: `translateY(${state.offset}px)` }">
        <slot name="a" :node="node" v-for="node in visibleData" :key="node.id"></slot>
      </div>
    </div>
  </div>
</template>
