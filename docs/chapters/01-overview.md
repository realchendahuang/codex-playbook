---
title: ## 1. Codex 到底是什么
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 1. Codex 到底是什么 {#codex-地图}

Codex 是 OpenAI 的编码代理，可以读代码、改文件、运行命令、使用工具、做 Review、调用连接器并持续推进任务。要让它稳定工作，需要把工程里的真相源、权限边界和完成标准交代清楚。

## <Compass class="cat-icon" /> 工作循环 {#核心心智模型}

一次完整任务通常包含这些动作：理解目标、读取上下文、制定步骤、修改文件、运行验证、解释结果，再根据反馈继续迭代。只让它生成一个函数，会丢掉前后的判断和验证。

<div class="play-grid">
  <div class="play-tile"><strong>它能执行</strong><span>可以读写本地仓库、跑测试、启动服务、看日志、用浏览器检查页面、调用 MCP 和连接器。</span></div>
  <div class="play-tile"><strong>它需要边界</strong><span>工作目录、权限、文件范围、架构约束、验收标准越清楚，越不容易做成“看起来对”。</span></div>
  <div class="play-tile"><strong>它会积累上下文</strong><span>线程里的文件、命令输出、截图、用户反馈都会影响后续判断；上下文脏了就要重新收口。</span></div>
  <div class="play-tile"><strong>它适合被制度化</strong><span>高频流程应该沉淀到 AGENTS.md、skills、hooks、CI 和 Review 规则里，而不是靠每次口头重复。</span></div>
</div>

## <LayoutDashboard class="cat-icon" /> Codex 的几个表面 {#表面选择}

各入口适合的工作场景不同。

| 表面 | 最适合 | 不适合 |
| --- | --- | --- |
| Codex CLI | 本地仓库里的开发、批处理、脚本化操作、终端优先工作流 | 需要大量可视化审阅或浏览器交互的任务 |
| IDE Extension | 边写边改、看当前文件、局部重构、快速解释代码 | 长时间无人值守任务 |
| Codex App | 计划、实现、Review、连接器、浏览器、图片、文档和多步骤交互 | 只想要极快的单行补全 |
| Browser / Chrome / Computer Use | 网页验证、复用已登录浏览器、操作桌面应用 | 能用 API、CLI 或专用连接器稳定完成的结构化任务 |
| Codex Cloud | 并行任务、PR 修复、云端隔离执行、从 GitHub 派活 | 依赖本机私有文件或未推送状态的任务 |
| GitHub Review | PR 上的高信号审查和自动 Review | 需要当场运行本机私有环境的检查 |
| Sites | 快速创建、保存、部署 OpenAI 托管站点 | 已经有明确 Cloudflare/Vercel/自建部署要求的项目 |

选择口诀：贴着编辑器的小改用 IDE；仓库里的实操用 CLI 或 App；需要多工具、多轮交互、浏览器验证用 App；需要并行或 PR 自动化用 Cloud/GitHub；需要快速托管网页且不想管部署链路用 Sites。

## <Bot class="cat-icon" /> Codex 的模块框架 {#模块框架}

这份 Playbook 后面按六层展开。

1. 表面层：CLI、IDE、App、Cloud、GitHub Review、Sites。
2. 任务层：提示词、Plan mode、Goal mode、执行计划、验收条件。
3. 上下文层：文件、日志、截图、文档、真相源、连接器、记忆。
4. 定制层：AGENTS.md、config.toml、skills、plugins、MCP、hooks、automations。
5. 执行层：权限、sandbox、approval、命令、测试、浏览器、部署。
6. 治理层：Review、CI、安全、发布、排障、复盘。
