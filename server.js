var express     = require('express');
var request     = require('request');

var app         = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/forecast/:apiKey/:coords', function(req, res) {
  console.log('params:', req.params)
  var apiKey = req.params.apiKey;
  var coords = req.params.coords;

  request
    .get(`https://api.forecast.io/forecast/${ apiKey }/${ coords }`, function(err, response, body) {
      if (response.statusCode === 200) {
        console.log('Yay, it worked!');
        res.send(response);
      } else {
        console.log('statusCode:', response.statusCode);
        console.log('statusMessage:', response.statusMessage);
        res.send(response);
      }
    })

});

app.listen(8080, function() {
  console.log('Listening on port 8080')
})
