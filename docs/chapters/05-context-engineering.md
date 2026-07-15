---
title: ## 5. 上下文工程
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 5. 上下文工程 {#上下文工程}

## <FileText class="cat-icon" /> AGENTS.md：仓库里的代理 README {#agents-md}

`AGENTS.md` 是 Codex 最重要的长期上下文之一。它适合写团队约定、项目结构、命令、测试方式、Review 标准和禁区。

一个好的 `AGENTS.md` 不需要长，但要具体：

```md
# AGENTS.md

## 项目结构
- `src/` 是应用代码。
- `docs/` 是正式文档。
- `migrations/` 是数据库迁移，改 schema 必须新增 migration。

## 常用命令
- 安装依赖：`pnpm install`
- 本地开发：`pnpm dev`
- 构建：`pnpm build`
- 测试：`pnpm test`

## 工作约定
- 修改 UI 后必须用浏览器截图检查桌面和移动端。
- 修 bug 前先写清楚复现链路。
- 不要新增依赖，除非现有工具无法完成。

## Review 标准
- 优先找真实 bug、回归风险和缺失测试。
- 不把无关重构混进修复。
```

不要把 `AGENTS.md` 写成愿望清单。它应该来自真实摩擦：Codex 哪件事做错过两次，就把那条规则沉淀进去。

## <Settings class="cat-icon" /> config.toml：行为默认值 {#config-toml}

`config.toml` 适合放个人或项目级默认配置，例如模型、推理强度、sandbox、approval、MCP 服务器和实验功能。个人默认值放 `~/.codex/config.toml`，项目可信配置可以放 `.codex/config.toml`。

常见原则：

- 个人偏好放全局。
- 仓库共识放项目。
- 一次性实验放命令行或当前线程。
- 涉及强权限的配置先小范围试。

不要用配置掩盖任务不清楚。配置解决“怎么工作”，不解决“做什么”。

## <BookOpen class="cat-icon" /> 官方文档与 Context7 {#官方文档与-context7}

技术栈会变，Codex、OpenAI API、Cloudflare Workers、Wrangler 的细节都不能只靠记忆。需要最新技术文档时，优先用官方文档、OpenAI Docs MCP、Cloudflare docs，或者接入 Context7 这类开发文档 MCP。

Context7 的典型配置是：

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
```

不要先假设 Context7 “没装”或“不可用”。先让 Codex 列出当前线程的工具；如果已经暴露 Context7，就直接用。没有时再检查 MCP 配置、授权和客户端重启状态。团队经常查前端框架、ORM、SDK 或云服务时，再把 Context7 配成 MCP，比每次靠模型记忆稳得多。

## <Search class="cat-icon" /> 上下文不是越多越好 {#上下文取舍}

上下文越多，越容易把旧事实、错误假设和无关文件混进去。给 Codex 上下文时要做筛选。

更好的输入：

- “只看这三个文件和这个错误输出。”
- “先不要实现，先比较需求文档和当前代码是否一致。”
- “把生产日志里 500 的 Ray ID 和 Worker 日志对齐。”
- “这张截图是验收标准，改完后重跑截图。”

更差的输入：

- “你看整个项目自己改。”
- “应该就是某个缓存问题。”
- “大概照之前那个项目做。”
- “把所有地方都优化一下。”

## <Brain class="cat-icon" /> 记忆与复盘 {#记忆}

Codex 可以在对话和本地记忆中保留偏好，但记忆不是当前事实。适合记忆的是用户偏好、项目长期约定、以前踩过的坑；不适合当作当前生产状态、最新价格、最新 API 行为。

每次重大任务结束后，可以让 Codex 做三件事：

1. 总结这次任务的根因和解决方案。
2. 抽出以后可复用的命令和检查清单。
3. 判断是否要更新 `AGENTS.md`、skill 或项目文档。
