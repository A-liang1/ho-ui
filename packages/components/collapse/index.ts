import _Collapse from './src/collapse.vue'
import _CollapseItem from './src/collapse-item.vue'
import { withInstall } from '@ho-liang/utils'

export const HoCollapse = withInstall(_Collapse)
export const HoCollapseItem = withInstall(_CollapseItem)

declare module 'vue' {
  export interface GlobalComponents {
    HoCollapse: typeof HoCollapse
    HoCollapseItem: typeof HoCollapseItem
  }
}

export * from './src/collapse'
