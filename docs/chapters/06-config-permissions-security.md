---
title: ## 6. 配置、权限与安全
---

<script setup>
import { Bot, Compass, Target, ClipboardCheck, LayoutDashboard, MessageSquare, Route, FileText, Settings, ShieldCheck, Plug, Puzzle, GitPullRequest, Wrench, Search, BookOpen, Terminal, Code, Brain, Lock, Cloud, ListChecks, Boxes, Rocket, Gauge, ScrollText, LifeBuoy, Network, GitBranch, Monitor } from '@lucide/vue'
</script>

# 6. 配置、权限与安全 {#配置-权限与安全}

## <ShieldCheck class="cat-icon" /> sandbox 和 approval {#sandbox-approval}

Codex 的安全边界主要来自 sandbox 和 approval。sandbox 决定文件系统、网络和命令能访问哪里；approval 决定什么时候要向用户确认。

经验规则：

- 新仓库、陌生命令、生产操作：权限收紧。
- 已信任仓库、可回滚本地修改：可以提高自动化程度。
- 删除文件、重置 git、改生产数据、旋转密钥：必须明确确认。
- 读日志、跑测试、构建、格式化：通常可以自动执行。

生产操作仍然单独确认。把可验证的安全命令沉淀成规则，比直接放开所有权限更省时间。

## <Lock class="cat-icon" /> secrets 和外部账号 {#secrets}

密钥永远不要写进提示词、README、代码块或提交记录。需要让 Codex 使用密钥时，走环境变量、平台 secret、Cloudflare secret、GitHub secret 或连接器授权。

给 Codex 的表达应该是：

```text
需要用到 OPENAI_API_KEY，但不要打印它。只检查环境变量是否存在；如果不存在，告诉我需要配置哪个 key。
```

而不是把 key 直接贴进聊天里。

## <Cloud class="cat-icon" /> 本地和云端环境差异 {#local-cloud}

本地线程能访问本机文件、依赖缓存、登录状态和私有配置。云端线程通常只能访问 GitHub 仓库和配置好的 secrets。很多“本地能跑，云端失败”的问题来自环境差异。

排查顺序：

1. 云端是否拿到了同一分支和同一 commit。
2. 依赖安装命令是否一致。
3. Node、pnpm、Python、系统库版本是否一致。
4. 环境变量和 secrets 是否配置。
5. 测试是否依赖本机文件或外部服务。

## <Gauge class="cat-icon" /> 让验证成为安全网 {#验证安全网}

安全不是只靠谨慎。让 Codex 每次改完都运行测试、类型检查、lint、构建、浏览器检查和 diff review，才是长期可靠的方式。

最小验证包：

```text
1. 运行与改动相关的测试。
2. 跑类型检查或构建。
3. 检查 git diff。
4. 如果是 UI，打开页面截图。
5. 如果是部署，访问线上 URL 做 smoke test。
```
