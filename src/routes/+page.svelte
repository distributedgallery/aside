<script>
</script>

<svelte:head>
	<title>aside·eth</title>
	<meta name="description" content="aside·eth" />
</svelte:head>

<ul>
	<li><a href="/0x01">Obvious x Ivona Tau</a></li>
	<li>Jared</li>
	<li>Primavera De Filippi</li>
</ul>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

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
