<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<p>
	>_ Here is the history of the public sentiment over AI, as registered regurlarly for use on the
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
		<tr><th>timestamp</th><th>AI Sentiment</th></tr>
	</thead>
	<tbody>
		<tr><td>2021-04-01 00:00:00</td><td>0.5</td></tr>
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
