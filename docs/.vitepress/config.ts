import { defineConfig } from 'vitepress';

// 配置中文单页手册的标题、搜索和基础导航。
export default defineConfig({
  title: 'Codex Playbook',
  description: '把 Codex 当成长期协作系统的中文实战手册',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    logo: { text: 'CP' },
    nav: [
      { text: '手册', link: '/' },
      { text: 'OpenAI Codex', link: 'https://developers.openai.com/codex/' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '目录'
    },
    footer: {
      message: 'Codex Playbook',
      copyright: 'Released under CC BY-SA 4.0'
    }
  }
});
