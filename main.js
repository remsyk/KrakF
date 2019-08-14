const http = require('http');
const kraken = require('node-kraken-api')

const hostname = '127.0.0.1';
const port = 3000;
const api = kraken()


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {

  api.call('Depth', { pair: 'XXBTZUSD', count: 1 },
  (err, data) => {
    if (err) console.error(err)
    else console.log(data)
  }
)

  console.log(`Server running at http://${hostname}:${port}/`);
});
