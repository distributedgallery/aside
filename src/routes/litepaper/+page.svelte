<h1>Main</h1>

<p>
	[aside] is a protocol developed by the <a href="https://distributedgallery.com" target="_blank">Distributed Gallery</a> to enable the
	conditionnal (un)locking of ERC721 assets on the Ethereum blockchain. Each drop of the
	<a href="https://verse.works" target="_blank">verse.works</a> collections will rely on its own ERC721 contract inheriting from a common base
	combining the regular features of any ERC721 contracts with advanced functionalities for time-based and event-based (un)locking of NFTs.
</p>
<p>
	Both those base contracts and each drop implementation can be found on our <a
		href="https://github.com/distributedgallery/aside.eth"
		target="_blank">Github</a
	>.
</p>

<h2>(Un)locking</h2>
<p>
	After they are minted, [aside] assets are locked, and thus non-transferable, for a given period of or until an external event occurs.
	Anyone can check the status of a given NFT by calling the <span class="italic">isLocked(uint256 tokenId)</span> function on the contract of
	the drop.
</p>
<p>
	The condition upon which a NFT can be unlocked vary for each drop, depending on each artist's design, though most of them will rely on
	external oracles.
</p>

<h3>Chainlink Oracles</h3>
<p>
	Most of [aside] drops will rely on <a href="https://docs.chain.link/chainlink-functions" target="_blank">Chainlink Functions</a>. One key
	aspect of this integration is the ability to trigger the unlocking of NFTs based on the occurence of external events, retrieved through
	various APIs and fed by Chainlink oracles, such as market price movements, weather conditions (openWheater API), earthquake events (USGS
	API), and many others.
</p>
<p>
	To do so, [aside] contract inherit Chainlink's <span class="italic">FunctionsClient</span> contract, providing a standardized interface for
	filling requests to Chainlink oracles. This integration allows us to leverage Chainlink's Decentralized Oracle Network without having to manage
	the intricacies of oracle communication themselves.
</p>

<h3>How to trigger the unlocking of a NFT ?</h3>
<p>
	Calling for Chainlink's oracles costs LINK tokens. To prevent spamming, the unlocking of NFTs will be protected so that only a dedicated
	address, owned by our team, can call it. Collectors don't have to worry about it though, as each token will be automatically unlocked by
	our bots when the conditions to do so are met - and yes, we'll pay both for the gas and LINK tokens.
</p>
<p></p>

<h2>Security mechanisms</h2>
<p>In case a issue happens either with Chainlink's oracles or with our team, two security mechanisms have been implemented.</p>

<h3>Emergency unlock</h3>
<p>
	An emergency unlock feature will be integrated in each [aside] drop contract. This mechanism, requiring a multisignature process, will
	serve as a fail-safe to initiate the release of all associated NFTs in the eventuality of any API-related issues. These API issues may
	encompass service downtime, the identification of critical software bugs, or the inadvertent or malicious removal of API access
	credentials.
</p>
<h3>Timelock</h3>
<p>
	In case you don't trust us, a security timelock has also been implemented, so that all NFTs are automatically unlocked after a given
	period of time - decided by each artist for their respective drop. Even if we all die, you'll be able to release your NFT at some point
	and transfer it anyway you like.
</p>

<h2>Data storage</h2>
<p>
	To uphold maximal decentralization, [aside] will ensure that all NFTs managed by the protocol have their data stored on the IPFS network.
</p>
