const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
const kraken = require('node-kraken-api')
const api = kraken()

var x = "test1"
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')



api.call('Depth', { pair: 'XXBTZUSD', count: 1 },
  (err, data) => {
    if (err){ console.error(err)}
    else{
      app.get('/', function (req, res) {
        console.log(x)
        res.render('index', {weather: JSON.stringify(data), error: null});
      })
    }
  }
)



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
