<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		{#if $page.url.pathname !== '/'}
			<li class="back"><a href="/">back</a></li>
		{/if}
		<slot />
	</ul>
</nav>

<style lang="scss">
	nav {
		@include cornered();
		@include section('nav');
		@include padded();
		border: 0.5px dashed rgba($terminal, 0.2);
		grid-area: nav;
	}

	:global(nav > ul > li) {
		margin-top: $space-md;

		&:first-of-type {
			margin-top: 0;
		}

		&::before {
			content: '↦ ';
			color: $terminal;
		}

		&.back {
			&::before {
				content: '↤ ';
			}
		}
	}
</style>
