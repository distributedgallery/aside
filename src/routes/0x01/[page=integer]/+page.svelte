<script>
	export let data;
</script>

<section>
	<h1>Obvious x Ivona Tau</h1>
	<p>
		Obvious and Ivona Tau have chosen to collaborate on a series of artworks whose content and
		unlock is related to the public sentiment over AI.
	</p>
	<p>Coming in May 2024.</p>

	<h2>The public AI sentiment</h2>
	<p>
		The public sentiment over AI is built upon the observation of a set of hashtags on the <a
			href="https://x.com"
			target="_blank">X social network</a
		>.
	</p>

	<h2>Data history</h2>
	<p>
		Here is the history of the public sentiment over AI, as registered regularly for use on the
		Ethereum blockchain.
	</p>
</section>

<section>
	<div class="nav">
		{#if data.page > 1}
			<a href="/0x01/{data.page - 1}">previous</a>
			<a href="/0x01/1">1</a>
		{/if}

		{#each Array(3) as _, index (index)}
			{#if data.page - (3 - index) > 1}
				<a href="/0x01/{data.page - (3 - index)}">{data.page - (3 - index)}</a>
			{/if}
		{/each}

		<a class="active" href="#">{data.page}</a>

		{#each Array(3) as _, index (index)}
			{#if data.page + index + 1 < data.maxPage}
				<a href="/0x01/{data.page + index + 1}">{data.page + index + 1}</a>
			{/if}
		{/each}

		{#if data.page < data.maxPage}
			<a href="/0x01/{data.maxPage}">{data.maxPage}</a>
			<a href="/0x01/{data.page + 1}">next</a>
		{/if}
	</div>
	<table>
		<thead>
			<tr><th>timestamp</th><th>AI sentiment</th><th>query [pro]</th><th>query [con]</th></tr>
		</thead>
		<tbody>
			{#each data.sentiments as { timestamp, sentiment, query_pro, query_con } (timestamp)}
				<tr
					><td>{new Date(timestamp).toLocaleString()}</td><td>{sentiment}</td><td>{query_pro}</td
					><td>{query_con}</td></tr
				>
			{/each}
		</tbody>
	</table>
</section>

<style lang="scss">
	div.nav {
		display: flex;
		padding-left: $space-sm;

		a {
			color: $white;
			padding: $space-sm;
			border: $border;

			&.active {
				color: $white;
				background-color: $green;
				cursor: default;

				&:hover {
					color: $white;
					background-color: $green;
					cursor: default;
				}
			}

			&:hover {
				cursor: pointer;
				color: $green;
				@include corners();
			}
		}
	}
</style>
