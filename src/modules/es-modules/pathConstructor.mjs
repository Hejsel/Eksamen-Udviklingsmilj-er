import path from 'path';

export default {
	pathConstructor(url) {
		try {
			// Finder projektets rod uden afhængighed af URL.import.meta.url.pathname, som kan give fejl
			const projektRodMappe = path.resolve(process.cwd());

			let cleanUrl = url.split('?')[0];

			if (cleanUrl === '/' || cleanUrl === '') {
				return path.join(projektRodMappe, 'public', 'index.html');
			}

			// Sikrer korrekt sti-håndtering med én backslash i Windows
			return path.join(projektRodMappe, cleanUrl).replace(/\\/g, '/');
		} catch (error) {
			console.error(`Fejl ved at konstruere sti for url: ${url}`);
			console.error(error.message);
			throw error; // Kaster fejlen videre
		}
	},
};
