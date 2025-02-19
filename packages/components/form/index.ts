import _FormItem from './src/form-item.vue'
import _Form from './src/form.vue'
import { withInstall } from '@ho-liang/utils'

export const FormItem = withInstall(_FormItem)
export const Form = withInstall(_Form)

export type FormInstance = InstanceType<typeof Form>

declare module 'vue' {
  export interface GlobalComponents {
    HoFormItem: typeof FormItem
    HoForm: typeof Form
  }
}

export * from './src/form-item'
export * from './src/form'
