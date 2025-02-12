import _Tree from './src/tree.vue'
import { withInstall } from '@ho-liang/utils'

const HoTree = withInstall(_Tree)

export default HoTree

declare module 'vue' {
  export interface GlobalComponents {
    HoTree: typeof HoTree
  }
}

export * from './src/tree'
