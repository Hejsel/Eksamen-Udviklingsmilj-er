import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { filHaandteringES } from './modules/aggregator.mjs'; // Import filHaandteringES

const createServer = (port, hostname) => {
	http.createServer(async (request, response) => {
		let filsti = filHaandteringES.pathConstructor(request.url); // Brug pathConstructor fra filHaandteringES

		if (filsti.endsWith(path.sep)) {
			filsti = path.join(filsti, 'index.html');
		}

		try {
			await fs.access(filsti);
			const ext = path.extname(filsti).substring(1);
			const mimeType = filHaandteringES.mimeTyper[ext] || 'application/octet-stream'; // Brug mimeTyper fra filHaandteringES

			const data = await fs.readFile(filsti);

			console.log(`Serverer fil: ${filsti} med MIME-type: ${mimeType}`);
			response.writeHead(200, { 'Content-Type': mimeType });
			response.end(data);
		} catch (err) {
			if (err.code === 'ENOENT') {
				console.error(`Fil ikke fundet: ${filsti}`);
				response.writeHead(404, { 'Content-Type': 'text/plain' });
				response.end('404: Fil ikke fundet');
			} else {
				console.error(`Fejl ved læsning af fil: ${filsti}`);
				response.writeHead(500, { 'Content-Type': 'text/plain' });
				response.end('500: Serverfejl');
			}
		}
	}).listen(port, hostname, () => {
		console.log(`Serveren kører på http://${hostname}:${port}/`);
	});
};

export default createServer;
