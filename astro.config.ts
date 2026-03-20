import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import { loadEnv } from 'vite';
import kshell from './package/src';
import { kshellDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://kshell.khalidrafi.tech',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [kshellDark],
		}),
		mdx(),
		sitemap(),
		kshell({
			name: 'kshell',
			openGraph: {
				home: {
					title: 'kshell',
					description: 'A minimalistic theme for Astro.',
				},
				blog: {
					title: 'Blog',
					description: 'News and guides for kshell.',
				},
				projects: {
					title: 'Projects',
				},
			},
		}),
	],
	adapter: node({
		mode: 'standalone',
	}),
});

export default config;
