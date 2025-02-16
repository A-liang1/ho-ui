import _Button from './src/button.vue'
import { withInstall } from '@ho-liang/utils'

const HoButton = withInstall(_Button)

export default HoButton

declare module 'vue' {
  export interface GlobalComponents {
    HoButton: typeof HoButton
  }
}

export * from './src/button'
