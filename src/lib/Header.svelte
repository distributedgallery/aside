<script>
	import { page } from '$app/stores';
</script>

<header>
	<h1>
		<span>>_ distributed@gallery</span> >_ aside·eth
		{#if $page.url.pathname !== '/'}
			>_ <a href="/">go back</a>
		{/if}
	</h1>
</header>

<style lang="scss">
	header {
		margin-bottom: $space-lg;

		h1 {
			position: relative;
			width: fit-content;

			span {
				color: $terminal;
			}

			&::after {
				content: '';
				background: $accent;
				display: inline-block;
				height: 1.2em;
				width: 5px;
				position: absolute;
				bottom: -1px;
				right: -7px;
				animation: 1s blink step-end infinite;
			}
		}
	}
</style>
