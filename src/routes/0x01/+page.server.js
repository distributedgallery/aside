import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

export const csr = false;

export async function load() {
	const db = createPool({ connectionString: POSTGRES_URL });
	const { rows: sentiments } = await db.query('SELECT * FROM Sentiments ORDER BY timestamp DESC;');

	return {
		sentiments
	};
}
