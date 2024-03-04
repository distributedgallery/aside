import aisentiment from '../../src/lib/aisentiment.js';

export const dynamic = 'force-dynamic';

export default async function handler(request, response) {
	try {
		console.log(request);
		response
			// .setHeader('Access-Control-Allow-Credentials', true)
			.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate')
			.setHeader('Access-Control-Allow-Origin', '*');
		return response.status(200).json({ sentiment: (await aisentiment.last()).sentiment });
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	}
}
