import { ethers } from 'ethers';
import { ASIDE0x01_ABI } from '../../src/lib/abis.js';
import aisentiment from '../../src/lib/aisentiment.js';
export const maxDuration = 300;

export default async function handler(request, response) {
	try {
		const sentiment = (await aisentiment.last()).sentiment;
		const sentiments = aisentiment.sentiments;
		const provider = new ethers.InfuraProvider('sepolia', process.env.INFURA_KEY);
		const wallet = new ethers.Wallet(process.env.DG_PRIVATE_KEY, provider);
		const aside0x01 = new ethers.Contract(process.env.ASIDE0x01_ADDRESS, ASIDE0x01_ABI, wallet);
		console.log(sentiment);
		console.log(sentiments);
		// console.log((await provider.getFeeData()).gasPrice);
		// console.log(await aside0x01.isUnlocked(1152033801));

		for (const [_tokenId, _sentiment] of Object.entries(sentiments)) {
			console.log(`Index: ${_tokenId}, Value: ${_sentiment}`);
			if (sentiment >= _sentiment && sentiment < _sentiment + 10) {
				console.log('going for' + _tokenId);
				try {
					// console.log(await aside0x01.isUnlocked(_tokenId));
					if (!(await aside0x01.isUnlocked(_tokenId))) {
						try {
							const tx = await aside0x01.unlock(_tokenId, {
								gasLimit: 300000
							});

							console.log(`Requested unlock of token ${_tokenId}:${_sentiment} at sentiment ${sentiment} through tx ${tx.hash}`);
						} catch (error) {
							console.error(`Error unlocking token ${_tokenId}:${_sentiment} at sentiment ${sentiment}: ${error.message}`);
						}
					}
				} catch (error) {
					console.error(`Error fetching unlock status for token ${_tokenId}: ${error.message}`);
				}
			}
		}

		response.setHeader('Access-Control-Allow-Origin', '*');
		return response.status(200).json('OK');
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	}
}
