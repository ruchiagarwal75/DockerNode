const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('listening now');
    const url = req.url;
    const method = req.method;
    console.log(url, method);
    if(url === '/' && method==="GET") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head></head><body><form method="POST"><input type="text" name="message"/></form></body></html>');
        res.end();
    }
    if(url === '/' && method==="POST") {
        const data = [];
        req.on('data', (buffer) => {
            data.push(buffer);
        });
        req.on('end', () => {
            const readableData = Buffer.concat(data).toString();
            fs.writeFile('my.txt', readableData, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });

        });
        
    }
});

server.listen(3000);