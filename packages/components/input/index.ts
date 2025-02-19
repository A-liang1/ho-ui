import _Input from './src/input.vue'
import { withInstall } from '@ho-liang/utils'

const Input = withInstall(_Input)

export default Input

declare module 'vue' {
  export interface GlobalComponents {
    HoInput: typeof Input
  }
}

export * from './src/input'
