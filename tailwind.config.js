/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/*/.{html,js}', // Indsæt dine HTML- og JS-filer her
		'./src/index.html',
	],
	theme: {
		extend: {
			colors: {
				primary: '#735645',
				pik: '#111111',
			},
		},
	},
	plugins: [],
};
