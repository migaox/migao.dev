import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

import { SITE } from "./site.config";

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	integrations: [
		UnoCSS({
			injectReset: true,
		}),
		// must before mdx
		expressiveCode({
			themes: ["github-dark", "github-light"],
			defaultProps: {
				wrap: true,
				overridesByLang: {
					"bash,ps,sh": { preserveIndent: false },
				},
			},
		}),
		mdx(),
		sitemap(),
	],
});
