export const prerender = true;

const links = [
	{ name: 'drops', path: '/drops' },
	{ name: 'litepaper', path: '/litepaper' }
];

export function load() {
	return { links };
}
