<script>
	import '../reset.scss';
	import '../app.scss';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<Header />
	<Nav>
		<li><a href="/0x01">Obivous x Ivona Tau</a></li>
	</Nav>
	<main class="squared">
		<slot />
	</main>
</div>

<style lang="scss">
	main {
		border: 0.5px dashed rgba($terminal, 0.2);

		@include section('main');
		grid-area: main;
		justify-self: stretch;
	}
</style>
