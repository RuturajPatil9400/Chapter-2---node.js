const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Node.js Web Server</h1><p>Visit /data for JSON</p>')
    return
  }
  if (req.url === '/data' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({time: new Date().toISOString(), pid: process.pid}))
    return
  }
  res.writeHead(404, {'Content-Type': 'text/plain'})
  res.end('Not Found')
})
server.listen(port, () => console.log(`Server running on http://localhost:${port}`))
