/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}', './src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				dark: '#42000C', // Mørk rød
				primary: '#E8F1E0', // Lys grønlig hvid
				accent: '#FF4014', // Kraftig rød-orange
				highlight: '#FF6B00', // Lys orange
				bgdarkmode: '#1e1e1e', // Mørkegrå
				bgui: '#333333',
				offwhite: '#cccccc', // Offwhite
			},
			spacing: {
				'20pct': '20%', // Eksempel spacing som clamp
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
				},
			},
		},
	},
	plugins: [],
};
