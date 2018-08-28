/*
* Primary file for the Hello API
*
*/

// Global variables
const PORT = 3000;

// Dependencies
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Get and parse the URL
    const parsedUrl = url.parse(req.url, true);

    // Get and parse the path and trim off extra slashes
    const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');

    // Get the HTTP method
    const method = req.method.toLowerCase();

    if (path === 'hello' && method === 'post') {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({ "message":"Hello There" }));
        console.log('Response Sent');
    }

});

server.listen(PORT, () => {
    console.log(`The Server is listening on port ${PORT}`);
});