const kraken = require('node-kraken-api')
const api = kraken()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

//https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b

var x;
var test;
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.render('index');

  api.call('Time', (err, data) => {
    if (err){console.error(err)}
    else{

      let x = data;
    }
  })

  app.post('/', function (req, res) {
    let weather = JSON.parse(body)
    let test = "tets test test"
    res.render('index', {weather: x, error: null});
  });
})


app.listen(3000, function () {
  console.log('listening on port 3000!')
})
