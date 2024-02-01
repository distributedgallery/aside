import { createClient } from '@vercel/postgres';

export const csr = false;

export async function load() {
	const client = createClient();
	await client.connect();

	try {
		const { rows: sentiments } = await client.sql`
			SELECT * FROM Sentiments ORDER BY timestamp DESC;`;
		return {
			sentiments
		};
	} catch (error) {
		console.error(error);
	} finally {
		await client.end();
	}
}
