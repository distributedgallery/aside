<main>
	<slot />
</main>

<style lang="scss">
	main {
		@include frame('main');
		grid-area: main;
		height: initial;
		width: initial;
		overflow: scroll;
	}
</style>
