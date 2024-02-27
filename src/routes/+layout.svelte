<script>
	import '../reset.scss';
	import '../app.scss';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
	import Nav from '$lib/Nav.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<Header>aside·eth</Header>
	<Nav
		links={[
			{ name: 'Obvious x Ivona Tau', path: '/0x01/1' },
			{ name: 'Jared Tarbell', path: '/0x02' },
			{ name: 'Rhea Myers', path: '/0x03' },
			{ name: 'Travess Smalley', path: '/0x04' },
			{ name: 'Anna Ridler ', path: '/0x05' },
			{ name: 'Ubermorgen', path: '/0x06' },
			{ name: 'Primavera De Filippi', path: '/0x07' },
			{ name: 'Leander Herzog', path: '/0x08' },
			{ name: 'Addie Wagenknecht', path: '/0x09' },
			{ name: 'Lauren Lee McCarthy', path: '/0x10' },
			{ name: '0xFFF', path: '/0x11' }
		]}
	/>
	<Main>
		<slot />
	</Main>
</div>
