const kraken = require('node-kraken-api');
const api = kraken();

var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/views/index.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

var io = require('socket.io').listen(app);

function makeCall() {
    api.call('Time', (err, data) => {
        if (err){ console.error(err)}
        else {
            io.emit('time', { time: JSON.stringify(data) });
        }
    })
}

// Send current time every 10 secs
setInterval(makeCall, 5000);

// Emit welcome message on connection
io.on('connection', function(socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Loading...', id: socket.id });

    socket.on('i am client', console.log);
});

app.listen(3000);
