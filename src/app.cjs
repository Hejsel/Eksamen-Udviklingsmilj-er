const http = require('http');
const fs = require('fs');
const path = require('path');
const { filHaandteringCJS } = require('./modules/aggregator.cjs');

const createServer = (port, hostname) => {
	http.createServer((request, response) => {
		// Brug pathConstructor fra aggregator
		let filsti = filHaandteringCJS.pathConstructorCJS(request.url);

		if (filsti.endsWith(path.sep)) {
			filsti = path.join(filsti, 'index.html');
		}

		fs.access(filsti, fs.constants.F_OK, (err) => {
			if (err) {
				console.error(`Fil ikke fundet: ${filsti}`);
				console.error(err.message);
				response.writeHead(404, { 'Content-Type': 'text/plain' });
				response.end('404: Fil ikke fundet');
				return;
			}

			// Brug MIME-typer fra aggregator
			const ext = path.extname(filsti).substring(1);
			const mimeType = filHaandteringCJS.mimeTyperCJS[ext] || 'application/octet-stream';

			fs.readFile(filsti, (err, data) => {
				if (err) {
					console.error(`Fejl ved læsning af fil: ${filsti}`);
					console.error(err.message);
					response.writeHead(500, { 'Content-Type': 'text/plain' });
					response.end('500: Serverfejl');
					return;
				}

				console.log(`Serverer fil: ${filsti} med MIME-type: ${mimeType}`);
				response.writeHead(200, { 'Content-Type': mimeType });
				response.end(data);
			});
		});
	}).listen(port, hostname, () => {
		console.log(`Serveren kører på http://${hostname}:${port}/`);
	});
};

module.exports = createServer;
