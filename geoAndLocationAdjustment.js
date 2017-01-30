var bracketAdjuster = function (resultsFromAPI) {

  // get education multiplication factor
  let educationFactor = resultsFromAPI.stateInfo[resultsFromAPI.userEducation];

  // get geo multiplication factor
  let geoFactor = resultsFromAPI.stateInfo.countyToStateAdjustment;

  // set final factor

  var educationAndGeoFactor = educationFactor * geoFactor;

  var postFactorAdjustedIncomeValues = {};
  for (key in resultsFromAPI.modifiedBuckets) {
    var numberKey = key.slice(1, key.length - 1);
    var adjustedKey = "$" + Math.round(numberKey * educationAndGeoFactor) + "k";
    postFactorAdjustedIncomeValues[adjustedKey] = resultsFromAPI.modifiedBuckets[key];
  }

  // annotate the users's bracket
  return postFactorAdjustedIncomeValues;
};

module.exports = bracketAdjuster;