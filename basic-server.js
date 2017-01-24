var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var axios = require('axios');
const keys = require('./keys');
const apiConversion = require('./apiConversion');

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.post('/userSubmission', function(req, res){
  let ageGroup = apiConversion.ageBracket(req.body.age) || "";
  let race = req.body.race || "";
  let gender = req.body.gender || "";
  let geo = apiConversion.states[req.body.state] || "";

  axios.get(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`)
    .then( (results) => res.send(results.data));
});

app.listen(3000);

console.log('listening on port 3000...');