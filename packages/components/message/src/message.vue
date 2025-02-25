<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { MessageProps, MessageCompInstance } from './message'
import { useNamespace, useOffset, useEventListener } from '@ho-liang/hooks'
import { RenderVnode, typeIconMap, addUnit } from '@ho-liang/utils'
import { getLastBottomOffset } from './methods'
import { delay, bind } from 'lodash-es'

const bem = useNamespace('message', 'ho')

defineOptions({ name: 'ho-message' })

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
})

const visible = ref(false) // 是否显示
const messageRef = ref<HTMLDivElement>() // 消息容器
const boxHeight = ref(0) // div高度
// 当前消息 顶部 和 底部 偏移量(顶部是用来计算当前消息的位置，底部是用来计算下一个消息的位置)
const { topOffset, bottomOffset } = useOffset({
  getLastBottomOffset: bind(getLastBottomOffset, props),
  offset: props.offset,
  boxHeight,
})

// const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')

// 通过顶部偏移量计算当前消息的位置
const customeStyle = computed(() => ({
  top: addUnit(topOffset.value),
}))

let timer: number // 定时器
const close = () => {
  // 关闭消息
  visible.value = false
}
const startTimmer = () => {
  // 开启定时器，duration后关闭消息
  if (props.duration === 0) return
  timer = delay(close, props.duration)
} // 清除定时器
const clearTimmer = () => {
  clearTimeout(timer)
}

watch(
  () => visible.value,
  (val) => {
    if (!val) boxHeight.value = -props.offset //退出动画更加流畅
  },
)

useEventListener(document, 'keydown', (e: Event) => {
  const { code } = e as KeyboardEvent
  if (code === 'Escape') close()
})

onMounted(() => {
  visible.value = true
  startTimmer()
})

defineExpose<MessageCompInstance>({
  bottomOffset,
  close,
})
</script>

<template>
  <Transition
    :name="transitionName"
    @enter="boxHeight = messageRef?.getBoundingClientRect().height || 0"
    @after-leave="!visible && onDestory?.()"
  >
    <div
      ref="messageRef"
      :class="[
        bem.b(),
        { [`ho-message--${type}`]: type, 'text-center': props.center, 'is-close': props.showClose },
      ]"
      :style="customeStyle"
      v-show="visible"
      role="alert"
      @mouseenter="clearTimmer"
      @mouseleave="startTimmer"
    >
      <!-- <ho-icon :class="bem.e('close')" :icon="iconName" /> -->
      <div :class="bem.e('content')">
        <slot>
          <render-vnode v-if="props.message" :vNode="props.message" />
        </slot>
      </div>
      <!-- <div :class="bem.e('close')" v-if="showClose">
        <ho-icon icon="xmark" @click.stop="close" />
      </div> -->
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
</style>
