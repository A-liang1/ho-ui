import _Checkbox from './src/checkbox.vue'
import { withInstall } from '@ho-liang/utils'

const HoCheckbox = withInstall(_Checkbox)

export default HoCheckbox

declare module 'vue' {
  export interface GlobalComponents {
    HoCheckbox: typeof HoCheckbox
  }
}
export * from './src/checkbox.js'
