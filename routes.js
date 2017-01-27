const axios = require('axios');
const keys = require('./keys');
const apiConversion = require('./apiConversion');
const incomeHighLighter = require('./incomeRangeAppender.js');
var counter = 0;

module.exports = {
  submitToCensus: function (req, res) {

    console.log("someone is asked for data from frone-tend");
    let ageGroup = apiConversion.ageBracket(req.body.age) || "";
    let race = req.body.race || "";
    let gender = req.body.gender || "";
    let geo = apiConversion.states[req.body.state] || "";
    let income = req.body.income || "";

    axios
      .get(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`)
      .then((results) => {

        console.log("data begotten, sending to front end");
        var resultsObject = {};
        resultsObject.modifiedBuckets = apiConversion.bracketModifier(results.data);
        resultsObject.userIncomeBucket = incomeHighLighter(income);
        resultsObject.userPercentile = Math.round(resultsObject.modifiedBuckets[resultsObject.userIncomeBucket] * 1000) / 10; //percentile maker
        res.send(resultsObject);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};