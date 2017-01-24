const axios = require('axios');
const keys = require('./keys');
const apiConversion = require('./apiConversion');


module.exports = {

  submitToCensus: function (req, res) {
    console.log("yo from inside routes.js")
    let ageGroup = apiConversion.ageBracket(req.body.age) || "";
    let race = req.body.race || "";
    let gender = req.body.gender || "";
    let geo = apiConversion.states[req.body.state] || "";


    console.log(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`);
    axios.get(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`)
      .then((results) => res.send(results.data))
  }
}