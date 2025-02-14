import _Virtual from './src/virtual-list.vue'
import { withInstall } from '@ho-liang/utils'

const HoVirtual = withInstall(_Virtual)

export default HoVirtual

declare module 'vue' {
  export interface GlobalComponents {
    HoVirtualList: typeof HoVirtual
  }
}

export * from './src/virtual-list.vue'
