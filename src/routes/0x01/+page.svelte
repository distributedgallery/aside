<script>
	export let data;
</script>

<section>
	<h1>Obvious x Ivona Tau</h1>

	<p>
		Obvious and Ivona Tau have chosen to collaborate on a series of artworks whose content and
		unlock is related to the public sentiment over AI.
	</p>

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
