import { VNode } from 'vue'

declare global {
  namespace JSX {
    // 表示 JSX.Element 实际上是 vue 的 VNode
    interface Element extends VNode {}

    // 定义所有内置 JSX 元素为 any 类型，如 <svg>、<div> 等
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
