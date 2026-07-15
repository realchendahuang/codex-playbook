---
title: ## 12. 开源参考：学结构，不抄全家桶
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 12. 开源参考：学结构，不抄全家桶

开源项目主要用来查看 Codex 的真实接口、扩展格式和自动化边界。优先读官方仓库和开放规范；第三方工具只解决明确痛点，不要让它接管整个工作流。

| 需求 | 第一选择 | 值得吸收的部分 | 不要照搬什么 |
| --- | --- | --- | --- |
| 看 CLI 实现、issue 和 release | [openai/codex](https://github.com/openai/codex) | CLI、Rust 实现、配置和协议演进 | 未发布分支不等于稳定产品合同 |
| 看当前插件和 Skill 打包方式 | [openai/plugins](https://github.com/openai/plugins) | `.codex-plugin/plugin.json`、skills、MCP、hooks 和 marketplace 结构 | 不要一次安装整个目录 |
| 在 CI 里跑可重复任务 | [openai/codex-action](https://github.com/openai/codex-action) | `codex exec`、最小权限、prompt file 和结构化输出 | 不要把不可信 PR 文本直接当提示词 |
| 复现 Codex Cloud 基础环境 | [openai/codex-universal](https://github.com/openai/codex-universal) | 默认镜像、语言版本和本地 Docker 近似环境 | 它不是本地 Codex 的必装依赖 |
| 做跨 Agent 可复用 Skill | [agentskills/agentskills](https://github.com/agentskills/agentskills) | `SKILL.md` 开放格式和渐进加载 | 规范兼容不代表各客户端行为完全一样 |
| 在 macOS 看额度窗口 | [steipete/CodexBar](https://github.com/steipete/CodexBar) | 菜单栏额度、重置时间和多 provider 汇总 | 第三方读取会话或 cookie 前先看权限与隐私说明 |

::: warning 别再从旧仓库起步
[openai/skills](https://github.com/openai/skills) 已明确标记弃用。当前官方 Skill / Plugin 示例应看 `openai/plugins`；需要跨工具格式时再看 Agent Skills 规范。
:::

这套选择顺序很简单：**产品事实看官方文档，源代码和 release 看 `openai/codex`，扩展示例看 `openai/plugins`，跨客户端格式看 Agent Skills。** Stars 只能说明关注度，不能替代维护状态、权限模型和实际验证。
