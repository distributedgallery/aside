import { dev } from '$app/environment';
import { createPool, sql } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export async function load() {
	const db = createPool({ connectionString: POSTGRES_URL });

	const { rows: sentiments } = await db.query('SELECT * FROM Sentiments');

	return {
		// sentiments: await sql`SELECT * from Sentiments`
		sentiments
	};
}
