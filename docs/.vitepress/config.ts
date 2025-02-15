import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ho-UI',
  description: 'Ho-UI 组件库文档',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '按钮', link: '/components/button' },
            { text: '图标', link: '/components/icon' }
          ]
        }
      ]
    }
  }
})