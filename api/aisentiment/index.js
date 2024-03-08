import { kv } from '@vercel/kv';

// export const maxDuration = 200;
// export const dynamic = 'force-dynamic';

export default async function handler(request, response) {
	try {
		console.log(request.headers);
		response
			// .setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate')
			.setHeader('Access-Control-Allow-Origin', '*');
		return response.status(200).json(await kv.get('aisentiment'));
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	}
}
