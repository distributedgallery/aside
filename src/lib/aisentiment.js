import { createClient } from '@vercel/postgres';

const aisentiments = {
	PAGE_SIZE: 24,
	last: async () => {
		const client = createClient();
		await client.connect();

		try {
			const { rows } = await client.sql`SELECT * FROM Sentiments ORDER BY timestamp DESC LIMIT 1;`;
			return rows[0];
		} finally {
			await client.end();
		}
	},
	page: async (page = 1) => {
		const client = createClient();
		await client.connect();

		try {
			const { rows } =
				await client.sql`SELECT * FROM Sentiments ORDER BY timestamp DESC OFFSET ${(page - 1) * aisentiments.PAGE_SIZE} LIMIT ${aisentiments.PAGE_SIZE}`;
			return rows;
		} finally {
			await client.end();
		}
	},
	count: async () => {
		const client = createClient();
		await client.connect();

		try {
			const { rows } = await client.sql`SELECT COUNT(*) FROM Sentiments;`;
			return rows[0].count;
		} finally {
			await client.end();
		}
	}
};

export default aisentiments;
