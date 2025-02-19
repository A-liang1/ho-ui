import DefaultTheme from 'vitepress/theme'
import '@ho-liang/theme-chalk/src/index.scss'
import PreView from '../../demo/preView.vue'
import "highlight.js/styles/base16/summerfruit-light.css";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('preView', PreView)
     ctx.app.use(hljsVuePlugin);
  }
}