import { kv } from '@vercel/kv';
export const csr = false;
export const prerender = false;

export async function load() {
	try {
		return await kv.get('aisentiment');
	} catch (error) {
		console.error(error);
	}
}
