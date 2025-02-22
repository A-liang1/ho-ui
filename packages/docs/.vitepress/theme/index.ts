import DefaultTheme from 'vitepress/theme'
import '@ho-liang/theme-chalk/src/index.scss'
import PreView from '../../demo/preView.vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import 'highlight.js/styles/atom-one-dark.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('preView', PreView)
    ctx.app.use(hljsVuePlugin)
  }
}