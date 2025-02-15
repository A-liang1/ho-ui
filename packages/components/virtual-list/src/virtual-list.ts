import type { PropType } from 'vue'

export const vlProps = {
  items: {
    type: Array as PropType<any[]>,
    required: true,
  },
  remain: {
    type: Number,
    default: 8,
  },
  size: {
    type: Number,
    default: 35,
  },
}
