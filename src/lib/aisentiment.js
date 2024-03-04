import { sql } from '@vercel/postgres';

const aisentiments = {
	PAGE_SIZE: 24,
	last: async () => {
		const { rows } = await sql`SELECT * FROM Sentiments ORDER BY timestamp DESC LIMIT 1;`;
		return rows[0];
	},
	page: async (page = 1) => {
		const { rows } =
			await sql`SELECT * FROM Sentiments ORDER BY timestamp DESC OFFSET ${(page - 1) * aisentiments.PAGE_SIZE} LIMIT ${aisentiments.PAGE_SIZE}`;
		return rows;
	},
	count: async () => {
		const { rows } = await sql`SELECT COUNT(*) FROM Sentiments;`;
		return rows[0].count;
	}
};

export default aisentiments;
