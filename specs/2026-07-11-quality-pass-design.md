# Playbook quality pass

## Scope

Improve the Codex Playbook without changing its repository, Worker, custom-domain routes, VitePress base path, or relationship to the main site.

## Frontend

- Keep the VitePress default theme and current editorial visual identity.
- Increase long-form and card copy readability.
- Give mobile Playbooks submenu links a 44px minimum target.
- Respect `prefers-reduced-motion` for hover and transition effects.
- Limit the page outline to useful section depth.

## Content

- Preserve commands, configuration keys, links, product names, examples, and security boundaries.
- Align high-risk product descriptions with current official OpenAI Codex documentation.
- Rewrite the hero, card summaries, section introductions, and repeated conclusions in a direct engineering voice.
- Remove repeated “不是……而是……”, “真正”, “核心”, “闭环”, staged transitions, and generic method-language where concrete behavior can be stated instead.

## Verification

- Run `pnpm check` and `git diff --check`.
- Verify desktop and mobile rendering, local search, mobile navigation, cross-Playbook links, dark mode, reduced motion, and console health.
- Push `main`, deploy the independent Worker, and smoke-test the production route.
