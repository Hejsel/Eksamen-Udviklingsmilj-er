const createServer = require('./src/app.cjs');

const port = 8080;
const hostname = 'localhost';

createServer(port, hostname);
