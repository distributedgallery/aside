import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({ runtime: 'nodejs21.x' })
	},
	preprocess: [vitePreprocess({})]
};

export default config;
