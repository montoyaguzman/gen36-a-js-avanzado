// localhost:8080 => JSON { "message": "hola desde el index" } => 200
// localhost:8080/patitos => JSON { data: [ { name: "donald"}, { name: "lucas"} ] } => 200
// localhost:8080/pokemones => texto plano de not found => 404
// localhost:8080/admin => 401 

const http = require('http');
const url = require('url');
const PORT = 8080;

const server = http.createServer((request, response) => {

    // Paso 1: Obtener la url
    const urlObject = url.parse(request.url);
    const path = urlObject.path;

    let status = 100;
    let mimeType = {};
    let responseObject = {};

    if (path === '/') {
        status = 200;
        mimeType = { 'Content-type': 'application/json' };
        responseObject = { "message": "hola desde el index" };
    } else if (path === '/patitos') {
        status = 200;
        mimeType = { 'Content-type': 'application/json' };
        responseObject = { data: [{ name: "donald" }, { name: "lucas" }] };
    } else if (path === '/pokemones') {
        status = 404;
        mimeType = { 'Content-type': 'text/plain' };
        responseObject = 'not found';
    } else if (path === '/admin') {
        status = 401;
        mimeType = { 'Content-type': 'text/html' };
        responseObject = {};
    } else {
        // reto: 404
    }

    const stringObject = JSON.stringify(responseObject);

    response.writeHead(status, mimeType);
    response.write(stringObject);
    response.end();

});

server.listen(8080);
console.log('Servidor iniciado...', PORT);