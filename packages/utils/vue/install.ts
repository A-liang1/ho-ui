import { SFCWithInstall } from './typescript'
//使用泛型,你怎么知道他有install方法呢?可以用vue提供的plugin类型来类型断言
import type { App, Plugin, Directive } from 'vue'
import { noop } from 'lodash-es'

export const withInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || 'UnnamedComponent'
    app.component(name, component as SFCWithInstall<T>)
  }
  return component as SFCWithInstall<T>
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    app.config.globalProperties[name] = fn
  }
  return fn as SFCWithInstall<T>
}
