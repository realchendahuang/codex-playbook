---
title: ## 11. 可复制模板
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 11. 可复制模板 {#可复制模板}

## <ScrollText class="cat-icon" /> 新任务模板 {#新任务模板}

```text
目标：
[一句话说清楚要完成什么]

上下文：
- 相关文件：
- 相关文档：
- 当前错误/截图/日志：

约束：
- 不改：
- 不新增：
- 风格要求：

完成标准：
- 命令：
- 页面：
- 输出：
```

## <FileText class="cat-icon" /> AGENTS.md 模板 {#agents-template}

```md
# AGENTS.md

## 核心原则
- 始终先找当前代码和正式文档作为真相源。
- 不做无关重构。
- 修改 UI 后必须截图验证桌面和移动端。

## 项目命令
- 安装：`pnpm install`
- 开发：`pnpm dev`
- 构建：`pnpm build`
- 测试：`pnpm test`

## 代码约定
- 沿用现有目录结构和组件风格。
- 只在关键逻辑处写必要注释。
- 外部输入和 API 边界要验证，内部不做假想防御。

## 完成标准
- 相关测试通过。
- 构建通过。
- 总结修改、验证和风险。
```

## <Puzzle class="cat-icon" /> Skill 模板 {#skill-template}

```md
---
name: release-check
description: Use when preparing a release and needing build, test, changelog, deployment, and smoke-test checks.
---

1. Read the current branch, diff, package scripts, and deployment config.
2. Run the smallest relevant test and build commands.
3. Check the changelog or release notes if the project has one.
4. Deploy only when the user explicitly asks.
5. After deployment, run smoke checks and report the live URL.
```

## <Network class="cat-icon" /> MCP 配置模板 {#mcp-template}

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]

[mcp_servers.openaiDeveloperDocs]
url = "https://developers.openai.com/mcp"
```

## <GitPullRequest class="cat-icon" /> PR Review 模板 {#pr-review-template}

```text
请以代码审查姿态检查当前 diff。
只报告真实 bug、行为回归、安全风险、数据风险和缺失测试。
每条发现都要给文件和行号。
如果没有发现问题，请明确说没有发现阻断问题，并列出剩余风险。
```

## <Rocket class="cat-icon" /> 发布模板 {#release-template}

```text
请完成发布前检查。
1. 确认 git 状态和当前分支。
2. 运行安装、构建、测试。
3. 检查部署配置。
4. 部署到目标平台。
5. 访问线上 URL 做 smoke test。
6. 汇总版本、URL、验证结果和回滚入口。
```
