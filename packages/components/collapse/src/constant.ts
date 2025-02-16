import type { InjectionKey } from 'vue'
import type { CollapseContext } from './collapse'

export const COLLAPSE_CTX_KEY: InjectionKey<CollapseContext> = Symbol('collapseContext')
