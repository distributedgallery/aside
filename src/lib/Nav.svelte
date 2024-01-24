<script>
	import { page } from '$app/stores';

	export let links = [];
</script>

<nav>
	<ul>
		{#if $page.url.pathname !== '/'}
			<li class="back"><a href="/">back</a></li>
		{/if}
		{#each links as { name, path }, i}
			<li class={$page.url.pathname === path ? 'active' : ''}>
				<a href={path}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		@include frame('nav');
		grid-area: nav;
		height: initial;
		width: initial;
		overflow: scroll;
	}

	:global(nav > ul > li) {
		margin-top: $space-md;

		&:first-of-type {
			margin-top: 0;
		}

		&::before {
			content: '>> ';
			color: $green;
		}

		&.back {
			a {
				border-bottom: none;
			}

			&::before {
				content: '<< ';
			}
		}

		&.active {
			a {
				border-bottom: none;
				background-color: $green;
				color: $white;
			}
		}
	}
</style>
