const axios = require('axios');
const keys = require('./keys');
const apiConversion = require('./apiConversion');
const incomeHighLighter = require('./incomeRangeAppender');
const countyAndEducation = require('./finalAdjustment');
const bracketAdjuster = require('./geoAndLocationAdjustment');
const counties = require('./counties');

module.exports = {
  submitToCensus: function (req, res) {
    let ageGroup = apiConversion.ageBracket(req.body.age) || "";
    let race = req.body.race || "";
    let gender = req.body.gender || "";
    let education = req.body.education || "";
    let county = req.body.county || "";
    let state = countyAndEducation[county];
    let geo = apiConversion.states[state] || "";
    let income = req.body.income || "";

    console.log("agegroup=", ageGroup, "race=", race, "gender=", gender, "county=", county, "state=", state, "geo=", geo, "income=", income);

    // send data to API server
    axios
      .get(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`)
      .then((results) => {

        //instansiate empty object
        var resultsObject = {};

        //

        resultsObject.modifiedBuckets = apiConversion.bracketModifier(results.data);
        resultsObject.userIncomeBucket = incomeHighLighter(income);
        resultsObject.userPercentile = Math.round(resultsObject.modifiedBuckets[resultsObject.userIncomeBucket] * 1000) / 10; //percentile maker
        resultsObject.county = county;
        resultsObject.stateInfo = state;
        resultsObject.userEducation = education;
        resultsObject.finalBuckets = bracketAdjuster(resultsObject);

        res.send(resultsObject);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getCounties: function (req, res) {
    res.send(counties);
  }

};