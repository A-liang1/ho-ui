import type { ExtractPropTypes, PropType } from 'vue'

export type Key = string | number

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
  onLoad: Function as PropType<(node: TreeOptions) => Promise<TreeOptions[]>>,
} as const

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>,
    default: () => new Set<Key>(),
    required: true,
  },
} as const

export const treeNodeEmits = {
  toggle: (node: TreeNode) => node,
} as const

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>
