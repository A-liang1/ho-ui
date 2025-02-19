import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ho-UI',
  description: 'Ho-UI 组件库文档',
  base: '/ho-ui/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/componentsMD/' }
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
            { text: 'Virtualized Tree', link: '/componentsMD/virtualized-tree' }
          ]
        }
      ]
    }
  }
})