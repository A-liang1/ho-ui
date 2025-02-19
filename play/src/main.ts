import { createApp } from 'vue'
import App from './App.vue'
import HoIcon from '@ho-liang/components/icon'
import HoButton from '@ho-liang/components/button'
import HoInput from '@ho-liang/components/input'
import { Form as HoForm, FormItem as HoFormItem } from '@ho-liang/components/form'
import HoTree from '@ho-liang/components/tree'
import HoCheckbox from '@ho-liang/components/checkbox'
import { HoCollapse, HoCollapseItem } from '@ho-liang/components/collapse'
import '@ho-liang/theme-chalk/src/index.scss'
const plugins = [
  HoIcon,
  HoTree,
  HoCheckbox,
  HoCollapse,
  HoCollapseItem,
  HoButton,
  HoInput,
  HoForm,
  HoFormItem,
]
const app = createApp(App)
// use要求plugin上有install方法，所以要在withInstall return的时候断言
plugins.forEach((plugin) => app.use(plugin)) // 将组件注册成了全局组件

app.mount('#app')
