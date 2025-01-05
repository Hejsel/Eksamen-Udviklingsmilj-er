const path = require('path');

module.exports = {
	pathConstructor(url) {
		try {
			// Finder projektets rod uden afhængighed af URL.__dirname, som kan give fejl
			const projektRodMappe = path.resolve(__dirname, '../../..'); // For at navigere til projektets rod

			let cleanUrl = url.split('?')[0]; // Fjern eventuelle query-parametre

			if (cleanUrl === '/' || cleanUrl === '') {
				return path.join(projektRodMappe, 'public', 'index.html');
			}

			return path.join(projektRodMappe, cleanUrl);
		} catch (error) {
			console.error(`Fejl ved at konstruere sti for url: ${url}`);
			console.error(error.message);
			throw error; // Kaster fejlen videre
		}
	},
};
