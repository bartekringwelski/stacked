const axios = require('axios');
const keys = require('./keys');
const apiConversion = require('./apiConversion');
const incomeHighLighter = require('./incomeRangeAppender.js');

module.exports = {
  submitToCensus: function (req, res) {
    let ageGroup = apiConversion.ageBracket(req.body.age) || "";
    let race = req.body.race || "";
    let gender = req.body.gender || "";
    let geo = apiConversion.states[req.body.state] || "";
    let income = req.body.income || "";

    axios
      .get(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`)
      .then((results) => {
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