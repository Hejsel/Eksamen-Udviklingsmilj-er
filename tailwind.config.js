/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js}',
		// './src/pages/**/*.{html,js}', // Indsæt dine HTML- og JS-filer her
		// './src/index.html',
		// './src/pages/opg-1_git.html',
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
