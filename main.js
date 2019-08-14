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

  const tradesSync = api.sync(
  'Trades',
  { pair: 'XXBTZUSD' },
  (err, data, instance) => {
    // logs only new trades
    if (err) {
      console.error(err)
    } else if (data) {
      console.log(data)
      instance.options.since = data.last
    }
  }
)

  console.log(`Server running at http://${hostname}:${port}/`);
});
