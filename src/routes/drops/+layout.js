export const prerender = true;

const links = [
	{ name: 'Obvious x Ivona Tau', path: '/drops/0x01' },
	{ name: 'Jared Tarbell', path: '/drops/0x02' },
	{ name: 'Rhea Myers', path: '/drops/0x03' },
	{ name: 'Travess Smalley', path: '/drops/0x04' },
	{ name: 'Anna Ridler ', path: '/drops/0x05' },
	{ name: 'Ubermorgen', path: '/drops/0x06' },
	{ name: 'Primavera De Filippi', path: '/drops/0x07' },
	{ name: 'Leander Herzog', path: '/drops/0x08' },
	{ name: 'Addie Wagenknecht', path: '/drops/0x09' },
	{ name: 'Lauren Lee McCarthy', path: '/drops/0x10' },
	{ name: '0xFFF', path: '/drops/0x11' }
];

export function load() {
	return { links };
}
