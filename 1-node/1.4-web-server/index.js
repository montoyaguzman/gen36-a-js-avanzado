// URL 1: localhost:8080 => index.html
// URL 2: localhost:8080/pagina1.html => pagina1.html
// URL 2: localhost:8080/pagina2.html => pagina2.html
const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((request, response) => {

});

console.log('Servidor corriendo en el puerto', PORT);
server.listen(PORT);