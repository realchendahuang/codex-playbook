---
title: ## 3. 提示词契约
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 3. 提示词契约 {#提示词契约}

## <MessageSquare class="cat-icon" /> 四件事说清楚 {#四件事}

Codex 官方最佳实践里最值得固定下来的提示词结构是四件事：Goal、Context、Constraints、Done when。把它们写清楚，Codex 就能更少猜测，更容易验证。

| 字段 | 你要写什么 | 示例 |
| --- | --- | --- |
| Goal | 你到底要改变什么 | “把登录页的手机号登录改成邮箱登录” |
| Context | 哪些文件、文档、错误、截图是真的 | “参考 `docs/auth.md` 和 `src/routes/login.tsx`” |
| Constraints | 哪些边界不能碰 | “不要改数据库 schema，不要引入新依赖” |
| Done when | 什么结果算完成 | “`pnpm test auth` 通过，手动访问 `/login` 正常” |

## <ClipboardCheck class="cat-icon" /> 好提示词模板 {#好提示词模板}

```text
目标：
请把 [具体功能/问题] 做到 [明确状态]。

上下文：
- 真相源是 [文档/文件/日志/截图/线上行为]。
- 相关代码大概率在 [路径]。
- 当前问题是 [复现步骤/错误输出/用户反馈]。

约束：
- 不要改 [不该碰的模块]。
- 不要新增 [不必要依赖/配置/兼容层]。
- 遵循 [代码风格/设计规范/AGENTS.md]。

完成标准：
- 修改完成后运行 [命令]。
- 如果是 UI，启动本地服务并截图验证 [页面/视口]。
- 最后说明改了哪些文件、验证结果和剩余风险。
```

## <Search class="cat-icon" /> 让 Codex 先找真相源 {#真相源}

没有真相源时，Codex 只能猜。比较稳的流程是先定位权威文档、当前代码、运行态、日志、schema 和 API 合同，再开始实现。

常见真相源优先级：

1. 当前代码和测试。
2. 正式需求文档、架构文档、API 文档。
3. 数据库 schema、migration、线上配置。
4. 可复现错误、日志、截图、curl 输出。
5. 官方最新文档。
6. 过往聊天记忆或口头描述。

口头描述很重要，但它不能替代当前代码。你可以说“我怀疑是缓存问题”，但更好的提示词是“先证明请求链路哪里命中缓存，再决定是否改配置”。

## <ListChecks class="cat-icon" /> 拆小任务 {#拆小任务}

Codex 能做大任务，但大任务也要有阶段。一个好拆法是：

1. 先读代码和文档，输出边界判断。
2. 再列修改计划，标出会碰哪些文件。
3. 实现一个可验证的小切片。
4. 跑验证命令。
5. Review 自己的 diff。
6. 交付结果和风险。

不要把“做一个完整后台系统”直接丢进去。可以先让 Codex 把数据模型、路由、权限和页面拆出来，再逐个实现。
