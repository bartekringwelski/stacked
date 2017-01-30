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
        var finalResultsObject = {};

        // attaches county back to results object [used by bracketAdjsuter]
        finalResultsObject.county = county;

        //attaches state to results object
        finalResultsObject.stateInfo = state;

        //attaches education to results object
        finalResultsObject.userEducation = education;

        //attaches income to results object
        finalResultsObject.income = income;

        //accepts a range and returns a single number for the x-xis
        finalResultsObject.modifiedBuckets = apiConversion.bracketModifier(results.data, finalResultsObject);

        // modifies x-asis bracket with multiplation factor
        // finalResultsObject.finalBuckets = bracketAdjuster(finalResultsObject); accepts
        // an income and then return the matching string income bracket
        finalResultsObject.userIncomeBucket = incomeHighLighter(income);

        //returns the percentile value for the income bucket the user falls in
        finalResultsObject.userPercentile = Math.round(finalResultsObject.modifiedBuckets[finalResultsObject.userIncomeBucket] * 1000) / 10; //percentile maker

        res.send(finalResultsObject);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getCounties: function (req, res) {
    res.send(counties);
  }

};