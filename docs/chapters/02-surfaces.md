---
title: ## 2. 表面选择
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 2. 表面选择

## <Terminal class="cat-icon" /> CLI：终端里的主力工位 {#cli}

CLI 适合仓库工作，因为它离 git、测试、构建、脚本、日志最近。你可以把 Codex 当成一个会自己读代码和运行命令的同事，让它在一个明确目录里完成任务。

适合 CLI 的任务：

- 修复一个可复现 bug，并运行对应测试。
- 给已有模块补一个小功能。
- 迁移配置、改脚本、更新依赖。
- 批量整理文档、生成迁移说明。
- 在 CI 失败日志基础上定位根因。

CLI 是否好用，很大程度取决于启动位置。进入正确仓库，确认分支和工作树状态，再把目标讲清楚。大型任务先读关键文件、确认边界和计划，不要直接丢一句“重构整个系统”。

## <Code class="cat-icon" /> IDE Extension：局部上下文最强 {#ide-extension}

IDE 插件更适合贴着当前文件工作。你正在看某个函数、某段类型、某个报错时，它能天然拿到打开文件和选区上下文。

适合 IDE 的任务：

- 解释当前模块的调用链。
- 根据选中代码补测试。
- 对一个组件做局部样式修正。
- 根据类型错误修改当前文件。
- 把一个小函数改得更清楚。

不要把 IDE 插件当作大型无人值守执行器。跨很多目录、要跑很多命令、要部署、要查外部系统的任务，更适合 Codex App 或 CLI。

## <LayoutDashboard class="cat-icon" /> Codex App：多工具协作台 {#codex-app}

Codex App 适合复杂工作：你可以让它读图、控制浏览器、查连接器、管理线程、执行本地命令、展示 diff、做长任务。它特别适合“先想清楚，再改，再验证，再交付”的任务。

适合 App 的任务：

- 先做产品边界判断，再实现。
- 读设计图或截图后改 UI。
- 查询 Gmail、Calendar、Drive、GitHub 等连接器，再落地到代码或文档。
- 用浏览器打开本地站点，截图验证。
- 做多轮 Review 和修复。

App 的强项是把“人的判断”和“代理执行”放在同一个线程里。你可以边看它推进，边补充约束，而不是每一步都重新解释背景。

## <Monitor class="cat-icon" /> Browser、Chrome 与 Computer Use {#browser-chrome-computer-use}

这三类入口看起来都能“操作界面”，但真相源和权限边界不同。选错入口，常见结果是丢登录态、拿不到 DevTools 信息，或者用视觉点击代替本来更稳定的结构化接口。

| 能力 | 什么时候用 | 关键边界 |
| --- | --- | --- |
| 内置 Browser | 打开网页、检查渲染结果、截图、做可重复的页面测试 | 使用 Codex 管理的浏览器环境，不默认继承日常 Chrome 的登录状态 |
| Chrome | 任务依赖你已经打开的标签页、Cookies、扩展或登录状态 | 通过 Chrome 插件连接现有 profile；网络、Console、DOM 和性能问题优先开 Developer mode |
| Computer Use | 操作 Finder、Excel、设计工具等桌面应用，或复现只发生在 GUI 里的问题 | 需要屏幕录制和辅助功能权限；能用专用插件、MCP 或 CLI 时优先走结构化接口 |
| Remote connections | 从 Codex App 连接远程 Mac、PC 或 SSH 主机上的项目 | 远端必须能启动 Codex app server；本地未同步文件和权限不会自动跟过去 |

选择口诀：普通网页验证用 Browser；必须复用现有登录态用 Chrome；跨出浏览器操作桌面 App 才用 Computer Use；代码和运行环境在另一台机器上时用 Remote connections。

## <Cloud class="cat-icon" /> Cloud：并行和远程执行 {#codex-cloud}

Cloud 适合从 GitHub 派发任务。它会在隔离环境里 clone 仓库并工作，适合并行处理多个任务，或者从手机、浏览器、Slack、GitHub comment 触发。

使用 Cloud 前要确认三件事：

1. 当前代码已经 push 到 GitHub。
2. 云端环境能安装依赖并跑必要命令。
3. 任务不依赖本机未提交文件、私有配置或本地服务。

如果任务必须读你本机某个文件、使用已登录的 Chrome 状态、连接本机数据库，就优先用本地线程。

## <Rocket class="cat-icon" /> Sites：快速把网页交给托管平台 {#sites}

Sites 是 OpenAI 托管站点的工作流：保存版本和发布版本是两个阶段。它适合快速把提示词生成的网站、网页应用或小游戏托管出去，也适合需要 D1/R2 这类持久能力的轻应用。

需要自有域名和既有 Cloudflare 发布链时，可以继续使用 Workers Static Assets；需要快速托管网页且不想维护部署链路时，再考虑 Sites。部署目标决定选型。
