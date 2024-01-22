<svelte:head>
	<title>aside·eth</title>
	<meta name="description" content="aside·eth" />
</svelte:head>

<ul>
	<li><a href="/0x01">Obvious x Ivona Tau</a></li>
</ul>

<style lang="scss">
	ul {
		li {
			margin-top: $space-sm;

			&:first-of-type {
				margin-top: 0;
			}

			&::before {
				content: '>_ ';
			}
		}
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
