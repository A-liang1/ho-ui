import type { ExtractPropTypes, PropType } from 'vue'

type Key = string | number

export interface TreeNode extends Required<TreeOptions> {
  level: number
  rawNode: TreeOptions
  children: TreeNode[]
  isLeaf: boolean
}

export interface TreeOptions {
  label?: Key
  key?: Key
  children?: TreeOptions[]
  isLeaf?: boolean
  [key: string]: unknown
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeOptions[]>,
    default: () => [],
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => [],
  },
  labelField: {
    type: String,
    default: 'label',
  },
  keyField: {
    type: String,
    default: 'key',
  },
  childrenField: {
    type: String,
    default: 'children',
  },
} as const

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
