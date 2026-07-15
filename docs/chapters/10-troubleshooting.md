---
title: ## 10. 排障手册
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 10. 排障手册 {#排障手册}

## <LifeBuoy class="cat-icon" /> Codex 跑偏了 {#跑偏}

先停实现，让它重新对齐：

```text
暂停修改。请列出你当前使用的假设、已读文件、计划改动和不确定点。
然后重新读取 [真相源]，只基于这些证据更新计划。
```

如果它已经改了很多文件，不要急着全部回滚。先让它列 diff 分组，判断哪些是任务相关，哪些是误改，再决定怎么处理。

## <Search class="cat-icon" /> 结果看起来对但不可靠 {#不可靠}

常见原因：

- 没跑测试。
- 没打开页面。
- 没对齐真实 API。
- 使用了过时文档。
- 只改了前端没改后端合同。
- 只处理 happy path。

处理方式：

```text
请不要继续新增功能。
请列出当前实现依赖的所有假设，并逐条验证。
能用命令验证的就运行命令；不能验证的标成风险。
```

## <Plug class="cat-icon" /> 工具或 MCP 不可用 {#工具不可用}

如果 Context7、OpenAI Docs MCP、GitHub、浏览器或其他工具不可用，先区分三种情况：

1. 工具没有安装。
2. 工具安装了但未授权。
3. 工具可用但当前线程没有暴露。

处理方式：

- 先让 Codex 列出当前可用工具。
- 如果是 MCP，检查 `config.toml`。
- 如果是连接器，检查是否安装和授权。
- 如果只是本线程没有暴露，重开线程或安装插件后重试。
- 需要最新文档时，用官方网页作为 fallback，并明确说明来源。

## <Lock class="cat-icon" /> 权限卡住 {#权限卡住}

权限问题不要硬绕。先问：

- 这个命令是否真的需要非 sandbox 权限？
- 能否用只读命令先证明问题？
- 是否会修改生产、删除文件、暴露 secret？
- 是否可以缩小命令范围？

好的授权请求应该说明：要执行什么、为什么需要、影响范围是什么、失败如何回滚。

## <Cloud class="cat-icon" /> 部署后线上不对 {#线上不对}

按链路查：

1. 构建产物是否是最新。
2. deploy 是否成功。
3. route/custom domain 是否指向正确 Worker。
4. 浏览器是否有缓存或 stale service worker。
5. Cloudflare cache 是否命中旧资源。
6. API 地址是否指向了错误环境。
7. 线上日志是否有报错。

不要只重复 deploy。重复 deploy 只能解决“刚才没发布成功”，不能证明根因。
