const kraken = require('node-kraken-api')
const api = kraken()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');


var x;
var test;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


let timerId = setInterval(() => test(), 5000);



function test () {
    app.get('/', function (req, res) {
        res.render('index');

        api.call('Time', (err, data) => {
            if (err) console.error(err)
            else x=data
        })

        app.post('/', function (req, res) {
            let weather = JSON.parse(body);
            let test = "tets test test";
            res.render('index', {weather: x, error: null});
        });
    });
}


app.listen(3000, function () {
  console.log('listening on port 3000!')
});
