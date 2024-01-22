<script>
	export let data;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<p>
	>_ Here is the history of the public sentiment over AI, as registered regularly for use on the
	Ethereum blockchain.
</p>
<p>
	>_ This sentiment is built upon the observation of a set of hashtags on the <a
		href="https://x.com"
		target="_blank">X social network</a
	>.
</p>

<table>
	<thead>
		<tr><th>timestamp</th><th>AI sentiment</th><th>query [pro]</th><th>query [con]</th></tr>
	</thead>
	<tbody>
		{#each data.sentiments as { timestamp, sentiment, query_pro, query_con } (timestamp)}
			<tr
				><td>{new Date(timestamp).toLocaleString()}</td><td>{sentiment}</td><td>{query_pro}</td><td
					>{query_con}</td
				></tr
			>
		{/each}
	</tbody>
</table>

<style lang="scss">
	p {
		margin-top: $space-sm;
		margin-bottom: $space-sm;
	}
	table {
		border: none;
		border-collapse: collapse;
		text-align: left;
		width: 100%;
		margin-top: $space-lg;
		th {
			color: $terminal;
			padding: $space-sm;
			padding-top: 0;
			border-bottom: 1px solid $terminal;
			border-left: 1px solid $terminal;
			border-right: 1px solid $terminal;
		}
		td {
			// border: 1px solid $terminal;
			border-left: 1px solid $terminal;
			border-right: 1px solid $terminal;
			padding: $space-sm;
		}
	}
</style>
