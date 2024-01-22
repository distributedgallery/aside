<script>
	import '../reset.scss';
	import '../app.scss';
	import Header from '$lib/Header.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>
