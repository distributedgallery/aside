import aisentiments from '$lib/aisentiment.js';
export const csr = false;

export async function load({ params }) {
	try {
		const count = await aisentiments.count();
		const maxPage = Math.ceil(count / aisentiments.PAGE_SIZE);
		const page = Math.min(maxPage, params.page);
		const sentiments = await aisentiments.page(page);

		return { count, maxPage, page, sentiments };
	} catch (error) {
		console.error(error);
	}
}
