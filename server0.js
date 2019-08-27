
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
const kraken = require('node-kraken-api')
const api = kraken()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')



/*
app.get('/', function (req, res) {
    res.render('index', {weather: "Running...", error: null});
});
*/


function test2() {
    api.call('Time', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            console.log(data);
            app.get('/', function (req, res) {
                res.render('index2', {weather: JSON.stringify(data), error: null});
            });
        }
    })
}

function test3() {
    app.get('/', function (req, res) {
        api.call('Time', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                console.log(data);
                res.render('index', {weather: JSON.stringify(data), error: null});
            }
        });
    });
}


setInterval(test2, 5000);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
