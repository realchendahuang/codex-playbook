---
title: ## 4. 计划、目标与执行
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 4. 计划、目标与执行 {#计划-目标与执行}

## <Route class="cat-icon" /> 什么时候先 Plan {#plan-mode}

任务复杂、需求模糊、跨模块、涉及线上风险、或者你还没想清楚时，先 Plan。Plan mode 的价值是让 Codex 暂时不动文件，先收集上下文、问关键问题、做方案对比。

适合先 Plan 的情况：

- “这个功能到底有没有必要？”
- “当前架构应该怎么改才长期站得住？”
- “线上失败根因是什么？”
- “我要做一个完整产品页，应该有哪些模块？”
- “迁移数据库，怎么保证不丢数据？”

Plan 不是形式主义。一个好计划必须能告诉你：真相源是什么、要改哪里、验证什么、风险在哪里、哪些事暂时不做。

## <Target class="cat-icon" /> 什么时候开 Goal {#goal-mode}

Goal mode 适合长任务。它把“目标文本”当成持续推进和判断完成的标准，让 Codex 在多步任务中持续对齐。

适合 Goal 的任务：

- 从零搭一个站点并部署。
- 持续修复一批 CI 失败。
- 完成一轮大版本迁移。
- 整理一套文档和脚本。
- 调查线上问题直到有根因链。

Goal 要写得可验收。比如“优化网站”太虚，“把首页 Lighthouse Performance 提到 90 以上，并记录具体改动和截图”才是可执行目标。

## <ScrollText class="cat-icon" /> 执行计划文档 {#execution-plans}

对于更长的工程任务，可以让 Codex 维护一个 `PLANS.md` 或 `docs/plans/xxx.md`。计划文档保留目标、边界、步骤和进度，让任务在上下文压缩后仍能继续推进。

计划文档至少包含：

- 当前目标。
- 已确认的事实。
- 不做的范围。
- 修改步骤。
- 验证命令。
- 风险和回滚方式。
- 当前进度。

当任务涉及数据库、生产部署、权限、安全、计费或很多文件时，计划文档的价值很高。它能把“我刚才为什么这么做”留在仓库里。

## <GitBranch class="cat-icon" /> 执行循环 {#执行循环}

让 Codex 按这个循环工作：

```text
读真相源 -> 提出计划 -> 小步修改 -> 本地验证 -> 自我 Review -> 修正 -> 交付总结
```

如果你发现 Codex 开始凭空发挥，立刻把它拉回第一步：重新读文件、日志或官方文档。不要继续在错误假设上叠代码。
