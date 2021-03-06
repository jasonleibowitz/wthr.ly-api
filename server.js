var express     = require('express');
var request     = require('request');
var bodyParser  = require('body-parser');

var app         = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send('Please visit https://reserve.com');
});

app.get('/forecast/:apiKey/:coords', function(req, res) {
  var apiKey = req.params.apiKey;
  var coords = req.params.coords;

  request
    .get(`https://api.forecast.io/forecast/${ apiKey }/${ coords }`, function(err, response, body) {
      if (err) return res.send(err)
      if (response.statusCode !== 200) {
        res.status(response.statusCode);
        res.send({
          statusCode: response.statusCode,
          message: response.statusMessage,
          success: false,
        });
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(response.body);
      }
    })
});

app.get('*', function(req, res) {
  res.status(404);
  res.send('That page doesn\'t exist. Pleast visit https://reserve.com');
});

app.listen(8080, function() {
  console.log('Listening on port 8080')
})
