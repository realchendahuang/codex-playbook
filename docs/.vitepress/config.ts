import { defineConfig } from 'vitepress';

const siteName = 'Codex Playbook';
const siteDescription = '把 Codex 当成长期协作系统的中文实战手册';
const siteUrl = 'https://chendahuang.com/playbook/codex/';

function getPageUrl(relativePath: string) {
  const path = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '');

  return new URL(path, siteUrl).toString();
}

// 配置中文单页手册的标题、搜索和基础导航。
export default defineConfig({
  title: siteName,
  description: siteDescription,
  lang: 'zh-CN',
  base: '/playbook/codex/',
  outDir: './.vitepress/dist/playbook/codex',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl
  },
  markdown: {
    theme: {
      light: 'github-light-high-contrast',
      dark: 'github-dark-high-contrast'
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/playbook/codex/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'theme-color', content: '#0f766e' }]
  ],
  transformPageData(pageData) {
    const canonicalUrl = getPageUrl(pageData.relativePath);
    const title = pageData.title === siteName ? siteName : `${pageData.title} | ${siteName}`;
    const description = String(pageData.frontmatter.description ?? siteDescription);

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }]
    );
  },
  themeConfig: {
    logo: '/favicon.svg',
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
    lastUpdated: {
      text: '最后更新于'
    },
    editLink: {
      pattern: 'https://github.com/realchendahuang/codex-playbook/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/realchendahuang/codex-playbook' }
    ],
    footer: {
      message: 'Codex Playbook',
      copyright: 'Content licensed under CC BY-SA 4.0'
    }
  }
});
