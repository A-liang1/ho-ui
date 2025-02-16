import { Ref, PropType } from 'vue'

export type CollapseItemName = string | number

export const CollapseProps = {
  modelValue: {
    type: Array as PropType<CollapseItemName[]>,
    default: () => [],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
} as const

export const CollapseItemProps = {
  name: {
    type: [String, Number] as PropType<CollapseItemName>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export const COllapseEmits = {
  'update:modelValue': (value: CollapseItemName[]) => value,
  change: (value: CollapseItemName[]) => value,
} as const

export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>
  handleItemClick: (item: CollapseItemName) => void
}
