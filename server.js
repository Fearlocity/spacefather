// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Remove all references to index.html and always use Next.js for all routes
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Always let Next.js handle all requests
    handle(req, res);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Please stop the other process or use a different port.`);
    } else if (err.code === 'EPERM') {
      console.error(`Permission error: ${err.message}\nTry running as administrator or check file/folder permissions.`);
    } else {
      console.error('Server error:', err);
    }
    process.exit(1);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});