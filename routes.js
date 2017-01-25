const axios = require('axios');
// const keys = require('./keys');

const keys = process.env.DATA_GOV_KEY || require('./keys');
const apiConversion = require('./apiConversion');


module.exports = {
  submitToCensus: function (req, res) {
    let ageGroup = apiConversion.ageBracket(req.body.age) || "";
    let race = req.body.race || "";
    let gender = req.body.gender || "";
    let geo = apiConversion.states[req.body.state] || "";

    axios.get(`https://api.commerce.gov/midaas/distribution?state=${geo}&race=${race}&agegroup=${ageGroup}&sex=${gender}&api_key=${keys.data_gov_key}`)
      .then((results) => res.send(results.data))
  }
}