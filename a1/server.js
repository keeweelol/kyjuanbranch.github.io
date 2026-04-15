const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath;

    if (req.url === '/' || req.url === '/index') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/introduction') {
        filePath = path.join(__dirname, 'introduction.html');
    } else {
        filePath = path.join(__dirname, req.url);
    }

    let ext = path.extname(filePath).toLowerCase();
    let contentType = 'text/html';

    if (ext === '.css') contentType = 'text/css';
    else if (ext === '.js') contentType = 'text/javascript';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            console.log("File not found:", filePath); // DEBUG
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
