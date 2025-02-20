import type { PropType, ExtractPropTypes } from 'vue'

export type Size = 'small' | 'medium' | 'large'
export type Type = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type Placement = 'left' | 'right'

export const buttonProps = {
  size: String as PropType<Size>,
  type: {
    type: String as PropType<Type>,
    validator(value: string) {
      return ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(value)
    },
    default: 'primary',
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  iconPlacement: {
    type: String as PropType<Placement>,
    default: 'left',
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button',
  },
} as const

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent,
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
