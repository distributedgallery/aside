<header class="squared">
	<h1>
		<span>>_ distributed@gallery</span> >_ aside·eth
	</h1>
</header>

<style lang="scss">
	header {
		// margin-bottom: $space-lg;

		@include section('header');
		border: 0.5px dashed rgba($terminal, 0.2);

		grid-area: header;

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
