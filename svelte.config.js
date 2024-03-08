import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({ runtime: 'nodejs20.x' })
	},
	preprocess: [vitePreprocess({})]
};

export default config;
