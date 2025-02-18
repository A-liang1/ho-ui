import DefaultTheme from 'vitepress/theme'
import CodePreview from '../../utils/codeView.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('CodePreview', CodePreview)
  }
}