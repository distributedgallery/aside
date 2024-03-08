<script>
	import '../reset.scss';
	import '../app.scss';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
	import Nav from '$lib/Nav.svelte';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<Header>aside·eth</Header>
	<Nav links={$page.data.links} />
	<Main>
		<slot />
	</Main>
</div>
