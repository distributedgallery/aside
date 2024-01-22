<script>
	import '../reset.scss';
	import '../app.scss';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<header class="contained padded-sm">
		<h1><span>distributed@gallery</span> >_ aside·eth</h1>
	</header>

	<main class="contained padded-sm">
		<slot />
	</main>

	<footer></footer>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		justify-content: start;
		min-height: 100vh;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	header {
		margin-bottom: $space-md;
	}

	h1 {
		position: relative;
		width: fit-content;
		// color: $accent;
		// font-weight: bold;

		span {
			// background-color: #2fc4b4;
			color: $terminal;
			// font-weight: bold;

			// color: $dark;
		}

		&::after {
			content: '';
			width: 5px;
			height: 1em;
			position: absolute;
			top: 0;
			right: -10px;
			background: $accent;
			display: inline-block;
			animation: 1s blink step-end infinite;
		}
	}
</style>
