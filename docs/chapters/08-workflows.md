---
title: ## 8. 实战工作流
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 8. 实战工作流 {#实战工作流}

## <Compass class="cat-icon" /> 新仓库接手 {#新仓库接手}

让 Codex 接手新仓库时，不要直接让它改。先让它做侦察。

```text
请先不要修改文件。
请阅读 README、package.json、AGENTS.md、主要入口文件和测试配置，
总结这个项目的技术栈、启动命令、构建命令、测试命令、部署方式和风险点。
最后给出你建议我以后如何给这个项目下任务。
```

验收看什么：

- 是否找到了真实启动命令。
- 是否知道测试在哪里。
- 是否识别部署方式。
- 是否区分代码事实和推测。

## <Wrench class="cat-icon" /> 修 bug {#修-bug}

修 bug 的重点是先复现，再改。

```text
目标：修复 [bug]。
上下文：复现步骤是 [步骤]，错误输出是 [日志]。
要求：先证明当前 bug 的失败链路，再修改代码。
完成标准：相关测试通过，并说明根因、修改点和为什么不会影响其他路径。
```

不要只说“这里报错了帮我修”。好的修 bug 任务应该让 Codex 输出根因链：输入是什么，代码走到哪里，为什么失败，改了哪一层，验证了什么。

## <Code class="cat-icon" /> 做功能 {#做功能}

做功能最容易膨胀。你要提前写清楚“不做什么”。

```text
请实现 [功能]。
范围只包括 [页面/API/模块]。
不要新增权限系统、不要改数据库 schema、不要引入新依赖。
沿用现有组件和样式。
完成后运行 [测试/构建]。
```

如果功能涉及数据库、鉴权、计费或外部 API，先让 Codex 写实现计划，再动手。

## <LayoutDashboard class="cat-icon" /> 做 UI {#做-ui}

UI 任务不能只靠文字描述。最好给截图、设计稿、参考页面、品牌约束和验收视口。

```text
请修改这个页面的 UI。
目标用户是 [人群]，页面要感觉 [风格]。
参考截图是 [截图]。
约束：沿用当前设计系统，不新建 landing page，不添加无关说明文。
完成后启动本地服务，用桌面和移动端截图验证没有重叠、溢出和空白区域。
```

UI 验收要看：

- 首屏是否说清产品对象。
- 移动端是否不重叠。
- 文本是否不溢出按钮或卡片。
- 状态是否完整：loading、empty、error、disabled。
- 交互控件是否符合用户预期。

## <Boxes class="cat-icon" /> 数据和迁移 {#数据迁移}

涉及数据时，先备份、再 side-by-side 验证、最后切换。不要让 Codex 直接在生产库上“试一下”。

提示词：

```text
这是数据库迁移任务。
请先读取 schema、migration、当前行数和生产/开发差异。
先给迁移计划和回滚方案，不要执行写操作。
计划确认后再生成 migration 和验证 SQL。
完成标准：迁移前后关键表行数、约束和 smoke query 都一致。
```

## <Rocket class="cat-icon" /> 部署 {#部署}

部署不是运行一个命令。部署任务要包括构建、发布、线上验证和回滚入口。

Cloudflare Worker 静态站的最小链路：

```text
pnpm install
pnpm build
wrangler deploy
curl -I https://your-domain.example
```

交付前还要确认：

- `wrangler.jsonc` 的 `name` 和 route 是否正确。
- `compatibility_date` 是否新鲜。
- 构建目录是否和 assets directory 一致。
- 自定义域名是否在 Cloudflare 账号下。
- 部署后线上 URL 是否返回 200。
