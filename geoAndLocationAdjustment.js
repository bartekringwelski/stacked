var bracketAdjuster = function (dataObject) {

  let educationFactor = dataObject.stateInfo[dataObject.userEducation];
  let geoFactor = dataObject.stateInfo.countyToStateAdjustment;
  var educationAndGeoFactor = educationFactor * geoFactor;
  var finalFinalObject = {};
  for (key in dataObject.modifiedBuckets) {
    var numberKey = key.slice(1, key.length - 1);
    var adjustedKey = "$" + Math.round(numberKey * educationAndGeoFactor) + "k";
    finalFinalObject[adjustedKey] = dataObject.modifiedBuckets[key];
  }
  return finalFinalObject;
};

module.exports = bracketAdjuster;