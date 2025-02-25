import { defineComponent } from 'vue'
import { isFunction } from './vue'

export const typeIconMap = new Map([
  ['info', 'circle-info'],
  ['success', 'check-circle'],
  ['warning', 'circle-exclamation'],
  ['danger', 'circle-xmark'],
  ['error', 'circle-xmark'],
])

export const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function],
      required: true,
    },
  },
  setup(props) {
    return () => (isFunction(props.vNode) ? props.vNode() : props.vNode)
  },
})

export * from './dom'
export * from './vue'
export * from './create'
export * from './types'
