import _Upload from './src/upload.vue'
import { withInstall } from '@ho-liang/utils'

const Upload = withInstall(_Upload)

export default Upload

declare module 'vue' {
  export interface GlobalComponents {
    HoUpload: typeof Upload
  }
}

export * from './src/upload'
