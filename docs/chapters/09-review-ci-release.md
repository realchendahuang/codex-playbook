---
title: ## 9. Review、CI 与发布
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 9. Review、CI 与发布 {#review-ci-与发布}

## <GitPullRequest class="cat-icon" /> 让 Codex 自己 Review 一遍 {#自我-review}

实现后让 Codex 进入 Review 姿态，而不是只总结。

```text
请 review 你刚才的 diff。
优先找真实 bug、回归风险、安全问题、缺失测试和部署风险。
不要重复描述已经改了什么。
如果没有发现问题，也请说明剩余风险。
```

这一步很有价值，因为 Codex 在实现模式下会更关注完成任务，在 Review 模式下会更关注破坏面。

## <GitBranch class="cat-icon" /> GitHub Review {#github-review}

如果团队使用 GitHub，可以让 Codex 对 PR 做自动或手动 Review。手动方式通常是在 PR comment 里写 `@codex review`。仓库里有 `AGENTS.md` 时，Codex 会按最近的指导文件理解 Review 标准。

建议在 `AGENTS.md` 里写 Review guidelines：

```md
## Review guidelines

- 优先报告 P0/P1 的真实问题。
- 鉴权、权限、数据丢失、生产配置错误按高优先级处理。
- 只把文案小错当作低优先级，除非它影响用户理解。
```

## <Gauge class="cat-icon" /> CI 失败修复 {#ci}

CI 失败时，不要让 Codex “重新跑一下”。先让它定位失败链。

```text
请修复这个 CI 失败。
先读取失败 job、失败命令和完整错误输出。
只修改与失败相关的文件。
本地运行同等命令验证。
最后说明根因、修复和为什么 CI 应该恢复。
```

如果 CI 依赖云端 secret 或外部服务，本地可能无法完全复现。这时 Codex 应该区分“已本地验证”和“需要云端再次验证”的部分。

## <Rocket class="cat-icon" /> 发布说明 {#发布说明}

交付给人时，Codex 的最终输出应该包括：

- 改了什么。
- 为什么这么改。
- 跑了哪些验证。
- 线上地址或构建产物。
- 剩余风险。

最终总结不要写成流水账。用户需要知道“现在能不能用、怎么确认、哪里要小心”。
