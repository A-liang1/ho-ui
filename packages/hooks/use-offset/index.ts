import { type Ref, computed } from 'vue'

interface UseOffsetOptions {
  offset: number
  boxHeight: Ref<number>
  getLastBottomOffset(): number
}

interface UseOffsetResult {
  topOffset: Ref<number>
  bottomOffset: Ref<number>
}

export function useOffset(options: UseOffsetOptions): UseOffsetResult {
  // 最后一个元素的 底部偏移量
  const lastBottomOffset = computed(() => options.getLastBottomOffset())
  // 当前元素的 顶部偏移量
  const topOffset = computed(() => lastBottomOffset.value + options.offset)
  // 当前元素的 底部偏移量
  const bottomOffset = computed(() => topOffset.value + options.boxHeight.value)

  return {
    topOffset,
    bottomOffset,
  }
}

export default useOffset
