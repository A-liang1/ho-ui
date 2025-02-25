import { defineComponent } from 'vue'
import { isFunction } from './vue'
import CircleInfo from '@ho-liang/components/internal-icon/CircleInfo.vue'
import CheckCircle from '@ho-liang/components/internal-icon/CheckCircle.vue'
import CircleExclamation from '@ho-liang/components/internal-icon/CircleExclamation.vue'
import CircleXmark from '@ho-liang/components/internal-icon/CircleXmark.vue'

export const typeIconMap = new Map([
  ['info', CircleInfo],
  ['success', CheckCircle],
  ['warning', CircleExclamation],
  ['danger', CircleXmark],
  ['error', CircleXmark],
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
