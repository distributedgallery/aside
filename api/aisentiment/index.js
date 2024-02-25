import aisentiment from '../../src/lib/aisentiment.js';

export default async function handler(request, response) {
	try {
		response
			// .setHeader('Access-Control-Allow-Credentials', true)
			.setHeader('Access-Control-Allow-Origin', '*');
		return response.status(200).json({ sentiment: (await aisentiment.last()).sentiment });
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	}
}
