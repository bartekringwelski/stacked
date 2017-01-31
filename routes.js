const axios = require('axios');
const keys = require('./keys');
const apiConversion = require('./apiConversion');
const incomeHighLighter = require('./incomeRangeAppender');
const countyAndEducation = require('./finalAdjustment');
const counties = require('./counties');
var pageViews = 0;

var buttonClicks = 0;

module.exports = {
  submitToCensus: function (req, res) {

    buttonClicks++;
    console.log("BUTTON CLICK COUNT: ", buttonClicks)
    let ageGroup = apiConversion.ageBracket(req.body.age) || "";
    let race = req.body.race || "";
    let gender = req.body.gender || "";
    let education = req.body.education || "";
    let county = req.body.county || "";
    let state = countyAndEducation[county];
    let geo = apiConversion.states[state] || "";
    let income = req.body.income || "";

    // console.log("agegroup=", ageGroup, "race=", race, "gender=", gender,
    // "county=", county, "state=", state, "geo=", geo, "income=", income); send
    // data to API server
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
        finalResultsObject.modifiedData = apiConversion.bracketModifier(results.data, finalResultsObject);

        res.send(finalResultsObject);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getCounties: function (req, res) {
    pageViews++;
    console.log("PAGE VIEWS COUNT: ", pageViews)

    res.send(counties);
  }

};