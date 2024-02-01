import { createClient } from '@vercel/postgres';
import needle from 'needle';

const ENDPOINT = 'https://api.twitter.com/2/tweets/counts/recent';
const PROS = ['#AIPositive', '#AIForGood', '#AIOptimism', '#AIHope'];
const CONS = [
	'#AIConcerns',
	'#AIThreat',
	'#AIFears',
	'#AIEthics',
	'#AIDystopia',
	'#AIUnemployment',
	'#AIWar'
];

function query(hashtags) {
	let q = '';

	for (let i = 0; i < hashtags.length; i += 1) {
		if (i > 0) q += ' OR ';
		q += hashtags[i];
	}

	return q;
}

async function count(hashtags) {
	const response = await needle(
		'get',
		ENDPOINT,
		{ query: query(hashtags), granularity: 'day' },
		{
			headers: {
				'User-Agent': 'v2RecentTweetCountsJS',
				authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
			}
		}
	);

	if (response && response.body && response.body.meta) {
		return response.body.meta.total_tweet_count;
	}

	throw new Error(response);
}

function isAuthorized(request) {
	return request.headers.authorization === `Bearer ${process.env.CRON_SECRET}`;
}

export default async function handler(request, response) {
	const client = createClient();
	await client.connect();

	try {
		if (!isAuthorized(request)) {
			return response.status(401).json({ error: 'Unauthorized request' });
		}

		const pros = await count(PROS);
		const cons = await count(CONS);

		if (pros === 0 && cons === 0) {
			throw new Error('No tweets found');
		}

		const sentiment = (pros / (pros + cons)).toFixed(2) * 100;
		await client.sql`INSERT INTO Sentiments (timestamp, sentiment, query_pro, query_con) VALUES (CURRENT_TIMESTAMP, ${sentiment}, ${query(PROS)}, ${query(CONS)});`;

		return response
			.status(200)
			.json({ sentiment: sentiment, query_pro: query(PROS), query_con: query(CONS) });
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	} finally {
		await client.end();
	}
}
