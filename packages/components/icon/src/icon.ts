//这里准备组件相关的属性 和 ts的类型
import type { ExtractPropTypes, PropType } from 'vue'
// 组件内部定义自定义属性prop，这是在props中定义的，在使用组件时，就可以传这些属性
// 在Vue3中定义一个props它是构造函数，所以这里的类型是构造函数类型，但我们不需要
//ExtractPropTypes提取props的类型,如果是构造函数类型就转换成对应类型
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>, //类型断言
} as const // 因为props是readonly，所以这里使用as const
export type IconProps = ExtractPropTypes<typeof iconProps>
