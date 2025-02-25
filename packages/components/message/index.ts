import _Message from './src/methods'
import { withInstallFunction } from '@ho-liang/utils'

export const HoMessage = withInstallFunction(_Message, `$message`)

export default HoMessage

declare module 'vue' {
  export interface GlobalComponents {
    HoMessage: typeof HoMessage
  }
}

export * from './src/message'
