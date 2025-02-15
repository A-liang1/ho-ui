import type { ExtractPropTypes, PropType } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
}

export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>

export const checkboxEmits = {
  'update:modelValue': (value: boolean | string | number) => typeof value === 'boolean',
  change: (value: boolean) => typeof value === 'boolean',
}

export type CheckboxEmits = typeof checkboxEmits
