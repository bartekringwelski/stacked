const axios = require('axios');
const keys = require('./keys');
const apiConversion = require('./apiConversion');
const incomeHighLighter = require('./incomeRangeAppender');
const countyAndEducation = require('./finalAdjustment');
const bracketAdjuster = require('./geoAndLocationAdjustment');
const counties = require('./counties');

module.exports = {
  submitToCensus: function (req, res) {
    console.log("someone is asked for data from frone-tend");
    let ageGroup = apiConversion.ageBracket(req.body.age) || "";
    let race = req.body.race || "";
    console.log("supplied race ISSSSSSSSS", race);
    let gender = req.body.gender || "";
    let education = req.body.education || "";

    let county = req.body.county || "";

    let state = countyAndEducation[county];

    let geo = apiConversion.states[state] || "";
    let income = req.body.income || "";

    axios
      .get(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`)
      .then((results) => {
        var resultsObject = {};

        resultsObject.modifiedBuckets = apiConversion.bracketModifier(results.data);
        resultsObject.userIncomeBucket = incomeHighLighter(income);
        resultsObject.userPercentile = Math.round(resultsObject.modifiedBuckets[resultsObject.userIncomeBucket] * 1000) / 10; //percentile maker
        resultsObject.county = county;
        resultsObject.stateInfo = state;
        resultsObject.userEducation = education;
        resultsObject.finalBuckets = bracketAdjuster(resultsObject);

        console.log("final object looks like", resultsObject);

        res.send(resultsObject);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getCounties: function (req, res) {
    console.log("get counties being run", counties);
    res.send(counties);
  }

};