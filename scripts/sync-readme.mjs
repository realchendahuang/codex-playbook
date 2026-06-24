import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../docs/index.md', import.meta.url);
const readmePath = new URL('../README.md', import.meta.url);

const readmeIntro = `# Codex Playbook

把 Codex 当成长期协作系统的中文实战手册。

在线阅读：[codex-playbook.chendahuang.top](https://codex-playbook.chendahuang.top/)

## 全景图

\`\`\`mermaid
flowchart TD
  A[Codex Playbook] --> B[表面选择]
  A --> C[提示词契约]
  A --> D[计划与目标]
  A --> E[上下文工程]
  A --> F[工具与扩展]
  A --> G[验证与排障]
\`\`\`
`;

const toc = `## 目录

- [1. Codex 到底是什么](#_1-codex-到底是什么)
- [2. 表面选择](#_2-表面选择)
- [3. 提示词契约](#_3-提示词契约)
- [4. 计划、目标与执行](#_4-计划-目标与执行)
- [5. 上下文工程](#_5-上下文工程)
- [6. 配置、权限与安全](#_6-配置-权限与安全)
- [7. Skills、MCP、插件与子代理](#_7-skills-mcp-插件与子代理)
- [8. 实战工作流](#_8-实战工作流)
- [9. Review、CI 与发布](#_9-review-ci-与发布)
- [10. 排障手册](#_10-排障手册)
- [11. 可复制模板](#_11-可复制模板)
- [官方资源](#官方资源)
`;

const source = await readFile(sourcePath, 'utf8');

// README 只保留正文内容，去掉 VitePress frontmatter、Vue import 和网页首屏。
const body = source
  .replace(/^---\n[\s\S]*?\n---\n+/, '')
  .replace(/<script setup>[\s\S]*?<\/script>\n+/g, '')
  .replace(/<section class="frontpage">[\s\S]*?<\/section>\n+/g, '')
  .replace(/<div class="quick-grid">[\s\S]*?<\/div>\n+/g, '')
  .replace(/^(#{3,4})\s+<[^>]+class="(?:cat|svc)-icon"[^>]*\/>\s+/gm, '$1 ')
  .replace(/[ \t]+\{#[^}]+}[ \t]*$/gm, '')
  .trim();

await writeFile(readmePath, `${readmeIntro}\n${toc}\n${body}\n`, 'utf8');
