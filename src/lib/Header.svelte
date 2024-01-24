<header>
	<h1>
		<span>>_ distributed@gallery</span>
		>_ <slot />
	</h1>
</header>

<style lang="scss">
	header {
		@include frame('header');
		grid-area: header;

		h1 {
			position: relative;
			width: fit-content;

			span {
				color: $green;
			}

			&::after {
				content: '';
				background: $red;
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
