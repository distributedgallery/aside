import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
	try {
		const { rows: sentiments } = await sql`SELECT * FROM Sentiments ORDER BY timestamp DESC`;

		return response.status(200).json({ sentiments });
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	}
}
