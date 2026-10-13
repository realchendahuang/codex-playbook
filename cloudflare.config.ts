import { bindings, defineConfig, triggers } from "cf/config";

export default defineConfig({
	worker: {
		name: "codex-playbook",
		compatibilityDate: "2026-07-10",
		entrypoint: "./src/index.ts",
		workersDev: true,
		observability: {
			enabled: true,
			headSamplingRate: 1,
		},
		assets: {
			htmlHandling: "auto-trailing-slash",
			notFoundHandling: "404-page",
			runWorkerFirst: [
				"/",
				"/assets/*",
				"/favicon.svg",
				"/hashmap.json",
				"/sitemap.xml",
				"/vp-icons.css",
			],
		},
		domains: [
			"codex-playbook.chendahuang.top",
		],
		triggers: [
			triggers.fetch({
				pattern: "chendahuang.com/playbook/codex",
				zone: "chendahuang.com",
			}),
			triggers.fetch({
				pattern: "chendahuang.com/playbook/codex/*",
				zone: "chendahuang.com",
			}),
		],
		env: {
			ASSETS: bindings.assets(),
		},
	},
});
