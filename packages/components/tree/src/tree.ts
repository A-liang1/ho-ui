import type { ExtractPropTypes, InjectionKey, PropType, SetupContext } from 'vue'

export type Key = string | number

export interface TreeNode extends Required<TreeOptions> {
  level: number
  rawNode: TreeOptions
  children: TreeNode[]
  isLeaf: boolean
  parentKey: Key | undefined
}

export interface TreeOptions {
  label?: Key
  key?: Key
  children?: TreeOptions[]
  isLeaf?: boolean
  disabled?: boolean
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
  selectedKeys: Array as PropType<Key[]>,
  selectable: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => [],
  },
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
  selectedKeys: {
    type: Array as PropType<Key[]>,
    default: () => [],
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean,
} as const

export const treeEmits = {
  'update:selectedKeys': (keys: Key[]) => keys,
} as const

export const treeNodeEmits = {
  toggle: (node: TreeNode) => node,
  select: (node: TreeNode) => node,
  checked: ({ node, value }: { node: TreeNode; value: boolean }) => typeof value === 'boolean',
} as const

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>

export interface TreeContext {
  slots: SetupContext['slots']
  // emit: SetupContext<typeof treeEmits>['emit']
}
// 提供出去的属性
export const treeInjectKey: InjectionKey<TreeContext> = Symbol()

export const treeNodeContextProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
} as const
