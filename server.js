const kraken = require('node-kraken-api')
const api = kraken()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const request = require('request');

//https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b
//Test

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);

  api.call('Time', (err, data) => {
  if (err) console.error(err)
  else console.log(data){
    res.render('index', {weather: null, error: 'Error, please try again'});
  }
  })

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})


app.listen(3000, function () {
  console.log('listening on port 3000!')
})
