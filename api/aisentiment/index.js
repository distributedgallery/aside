import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
	try {
		const { rows } = await sql`SELECT * from Sentiments`;

		return response.status(200).json({ sentiments: rows });
	} catch (error) {
		console.log(error);
		return response.status(500).json({ error: error.message });
	}
}
