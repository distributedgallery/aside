import aisentiment from '../../src/lib/aisentiment.js';

export default async function handler(request, response) {
	try {
		const page = Number(request.query.page) || 1;
		return response.status(200).json(await aisentiment(page));
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	}
}
