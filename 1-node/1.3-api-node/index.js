const http = require('http');
const PORT = 8080;

const server = http.createServer((request, response) => {
    const status = 200;
    const mimeType = { 'Content-type': 'text/html' };
    response.writeHead(status, mimeType);
    response.write('<body> <h1> Saludos a dev.f desde Node!! </h1> </body>');
    response.end();
});

console.log('Servidor corriendo en el puerto', PORT);
server.listen(PORT);

// extensiones o formatos => mimeTypes
// .mp3, .3gpp, .jpg, .docx, .wmv, .xls, wma, ogg, ppt avi, txt, .csv
// .css, js, html