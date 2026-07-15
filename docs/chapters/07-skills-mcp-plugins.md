---
title: ## 7. Skills、MCP、插件与子代理
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 7. Skills、MCP、插件与子代理 {#扩展系统}

## <Puzzle class="cat-icon" /> Skills：可复用工作流 {#skills}

Skill 是一组可复用说明、参考资料和脚本。它适合把高频流程制度化，比如“发布流程”“PDF OCR”“Cloudflare 部署”“代码审查”“业务诊断”。

Skill 适合：

- 步骤固定但每次输入不同的流程。
- 需要读参考资料再执行的流程。
- 需要脚本辅助的流程。
- 团队希望共享的工作方式。

Skill 不适合：

- 一次性任务。
- 模糊想法。
- 还没跑通的流程。

写 skill 时，最重要的是 description。Codex 是否会自动选择它，取决于描述是否清楚说明触发场景。

## <Network class="cat-icon" /> MCP：连接外部世界 {#mcp}

MCP 是 Codex 连接外部工具和上下文的标准方式。你可以用 MCP 连接文档、浏览器、GitHub、Figma、Sentry、Linear、Context7、内部系统等。

MCP 的判断标准很简单：如果信息不在本地仓库里，而且需要被稳定读取或操作，就考虑 MCP。

常见用法：

- 用 OpenAI Docs MCP 查官方文档。
- 用 Context7 查最新框架文档。
- 用 GitHub MCP 读 PR、issue、workflow。
- 用浏览器 MCP 做页面测试和截图。
- 用 Figma MCP 读取设计稿。
- 用 Sentry MCP 读线上错误。

## <Plug class="cat-icon" /> 插件：可安装的能力包 {#plugins}

插件是可分发的能力包，可以包含 skills、MCP 配置、连接器映射、资产和应用集成。团队内部如果有多条固定工作流，不想让每个人手动复制 skill，就可以考虑插件化。

判断是否需要插件：

| 情况 | 选择 |
| --- | --- |
| 只是你自己用 | 用户目录 skill |
| 某个仓库专用 | 仓库 `.agents/skills` |
| 多个仓库复用 | 用户 skill 或插件 |
| 团队分发并带 MCP/资产 | 插件 |

## <Boxes class="cat-icon" /> Subagents：分工而不是分身 {#subagents}

Subagent 适合把任务拆给不同角色。例如一个代理专门跑测试，一个代理专门查生产日志，一个代理专门做安全 Review。它的价值是聚焦，不是让多个代理同时乱改同一批文件。

适合 subagents 的场景：

- 大型调查任务，需要并行搜不同证据。
- Review 任务，需要安全、性能、产品逻辑分开看。
- 数据迁移，需要一个代理核对 schema，一个代理核对脚本。
- 复杂 UI，需要一个代理做视觉检查，一个代理做可访问性检查。

注意：不要让两个线程或两个代理同时修改同一文件。并行应该用于调查、验证、审查，而不是无协调地写代码。

## <Wrench class="cat-icon" /> Hooks、Rules 和 Automations {#hooks-rules-automations}

这三类东西都能让 Codex 更稳定，但用途不同。

| 能力 | 适合做什么 | 不适合做什么 |
| --- | --- | --- |
| Hooks | 在命令或工具调用前后做检查、记录、阻断 | 替代人类判断 |
| Rules | 控制哪些命令能自动执行、哪些要确认、哪些禁止 | 表达复杂业务流程 |
| Automations | 定时提醒、周期性检查、监控稳定流程 | 临时一次性任务 |

先用 `AGENTS.md` 写清楚规则，再用 hooks/rules/CI 去机械执行。不要一开始就把所有流程塞进自动化。
