import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
	try {
		const result =
			await sql`CREATE TABLE Sentiments ( timestamp TIMESTAMP,  sentiment smallint, query_pro varchar(512), query_con varchar(512) );`;
		return response.status(200).json({ result });
	} catch (error) {
		return response.status(500).json({ error });
	}
}

// export function GET(event) {
// 	const was_cold = cold;
// 	cold = false;

// 	const ip = event.getClientAddress();
// 	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');

// 	return {
// 		ip,
// 		city,
// 		now: new Date().toISOString(),
// 		cold: was_cold
// 	};
// }
