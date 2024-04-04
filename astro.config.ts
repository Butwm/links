import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

import { SITE } from '/links/src/config';

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	base: '/',
	trailingSlash: 'never',
	output: 'static',
	integrations: [
		tailwind(),
		sitemap(),
		compress({
			css: true,
			html: true,
			img: false,
			js: true,
			svg: false,
		}),
		robotsTxt({
			policy: [
				{
					userAgent: '*',
				},
			],
			sitemap: true,
		}),
	],
});
