const http = require('http');
const fs = require('fs');
const path = require('path');

// Serverkonfiguration
const port = 3000;
const hostname = '127.0.0.1';

// Placeholder til mappe og MIME-typer
const filMappe = path.join(__dirname, 'public'); // Standardmappe til filer
const mimeTypes = {
	html: 'text/html',
	css: 'text/css',
	js: 'text/javascript',
	png: 'image/png',
	jpg: 'image/jpeg',
	ico: 'image/x-icon',
};

// Opret serveren
const server = http.createServer((request, response) => {
	// Generér filsti baseret på forespørgsel
	let filsti = sti(request.url);

	// Tjek, om filen findes
	fs.access(filsti, fs.constants.F_OK, (err) => {
		if (err) {
			response.writeHead(404, { 'Content-Type': 'text/plain' });
			response.end('404: Fil ikke fundet');
		} else {
			// Find filtypen og MIME-typen
			let ext = path.extname(filsti).substring(1);
			let mimeType = mimeTypes[ext] || 'application/octet-stream';

			// Læs og server filen
			fs.readFile(filsti, (err, data) => {
				if (err) {
					response.writeHead(500, { 'Content-Type': 'text/plain' });
					response.end('500: Serverfejl');
				} else {
					response.writeHead(200, { 'Content-Type': mimeType });
					response.end(data);
				}
			});
		}
	});
});

// Start serveren
server.listen(port, hostname, () => {
	console.log(`Serveren kører på http://${hostname}:${port}/`);
	console.log(`Serveren læser filer fra: ${filMappe}`);
});

// Funktion til at finde filens sti
function sti(url) {
	if (url === '/' || url === '') return path.join(filMappe, 'index.html');
	return path.join(filMappe, url);
}
