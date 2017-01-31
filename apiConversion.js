const states = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  "District Of Columbia": "DC",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY"
};

let ageBracket = function (age) {
  if (age < 18) {
    return "";
  }
  if (18 <= age && age <= 24) {
    return '18-24';
  }
  if (25 <= age && age <= 34) {
    return '25-34';
  }
  if (35 <= age && age <= 44) {
    return '35-44';
  }
  if (45 <= age && age <= 54) {
    return '45-54';
  }
  if (55 <= age && age <= 64) {
    return '55-64';
  }
  if (age >= 65) {
    return '65+';
  }
};

let bracketModifier = function (resultsFromAPI, finalResultsObject) {

  // get education multiplication factor
  let educationFactor = finalResultsObject.stateInfo[finalResultsObject.userEducation];

  // get geo multiplication factor
  let geoFactor = finalResultsObject.stateInfo.countyToStateAdjustment;

  // set final factor
  let educationAndGeoFactor = educationFactor * geoFactor;

  var currentSum = 0;

  var ranges = {
    "$0.00-$10.00k": {
      displaySalaryBand: '$' + Math.round(10 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$10.00k-$20.00k": {
      displaySalaryBand: '$' + Math.round(20 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$20.00k-$30.00k": {
      displaySalaryBand: '$' + Math.round(30 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$30.00k-$40.00k": {
      displaySalaryBand: '$' + Math.round(40 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$40.00k-$50.00k": {
      displaySalaryBand: '$' + Math.round(50 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$50.00k-$60.00k": {
      displaySalaryBand: '$' + Math.round(60 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$60.00k-$70.00k": {
      displaySalaryBand: '$' + Math.round(70 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$70.00k-$80.00k": {
      displaySalaryBand: '$' + Math.round(80 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$80.00k-$90.00k": {
      displaySalaryBand: '$' + Math.round(90 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$90.00k-$100.00k": {
      displaySalaryBand: '$' + Math.round(100 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$100.00k-$110.00k": {
      displaySalaryBand: '$' + Math.round(110 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$110.00k-$120.00k": {
      displaySalaryBand: '$' + Math.round(120 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$120.00k-$130.00k": {
      displaySalaryBand: '$' + Math.round(130 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$130.00k-$140.00k": {
      displaySalaryBand: '$' + Math.round(140 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$140.00k-$150.00k": {
      displaySalaryBand: '$' + Math.round(150 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$150.00k-$160.00k": {
      displaySalaryBand: '$' + Math.round(160 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$160.00k-$170.00k": {
      displaySalaryBand: '$' + Math.round(170 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$170.00k-$180.00k": {
      displaySalaryBand: '$' + Math.round(180 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$180.00k-$190.00k": {
      displaySalaryBand: '$' + Math.round(190 * educationAndGeoFactor) + 'k',
      value: null
    },
    "$190.00k-$200.00k": {
      displaySalaryBand: '$' + Math.round(200 * educationAndGeoFactor) + 'k',
      value: null
    } //,
    // "$200.00k-$210.00k": {   displaySalaryBand: '$' + Math.round(210 *
    // educationAndGeoFactor) + 'k',   value: null }, "$210.00k-$220.00k": {
    // displaySalaryBand: '$' + Math.round(220 * educationAndGeoFactor) + 'k',
    // value: null }, "$220.00k-$230.00k": {   displaySalaryBand: '$' +
    // Math.round(230 * educationAndGeoFactor) + 'k',   value: null },
    // "$230.00k-$240.00k": {   displaySalaryBand: '$' + Math.round(240 *
    // educationAndGeoFactor) + 'k',   value: null }, "$240.00k-$250.00k": {
    // displaySalaryBand: '$' + Math.round(250 * educationAndGeoFactor) + 'k',
    // value: null }, "$250.00k-$260.00k": {   displaySalaryBand: '$' +
    // Math.round(260 * educationAndGeoFactor) + 'k',   value: null },
    // "$260.00k-$270.00k": {   displaySalaryBand: '$' + Math.round(270 *
    // educationAndGeoFactor) + 'k',   value: null }, "$270.00k-$280.00k": {
    // displaySalaryBand: '$' + Math.round(280 * educationAndGeoFactor) + 'k',
    // value: null }, "$280.00k-$290.00k": {   displaySalaryBand: '$' +
    // Math.round(290 * educationAndGeoFactor) + 'k',   value: null },
    // "$290.00k-$300.00k": {   displaySalaryBand: '$' + Math.round(300 *
    // educationAndGeoFactor) + 'k',   value: null }
  };

  for (key in resultsFromAPI) {
    if (ranges[key]) {
      ranges[key].value = resultsFromAPI[key];
    }
  }

  let finalObject = {};
  var incomeBand;
  var incomePercentile;
  let userIncome = finalResultsObject.income / 1000; //e.g. 14 (for $14k)
  console.log("user Income", userIncome);
  var foundIncomeBand = false;

  for (key in ranges) {
    var newKey = ranges[key].displaySalaryBand;

    //make into a number
    var numberKey = newKey.slice(1, newKey.length - 1); //31

    if (userIncome < numberKey && foundIncomeBand === false) {
      incomeBand = newKey;

      currentSum = ranges[key].value + currentSum;
      finalObject[newKey] = currentSum;
      incomePercentile = Math.round(currentSum * 100);

      foundIncomeBand = true;
    } else {
      currentSum = ranges[key].value + currentSum;
      finalObject[newKey] = currentSum;
    }

  }

  var combinedObject = {};

  combinedObject.modifiedRanges = finalObject;
  combinedObject.incomePercentile = incomePercentile;
  combinedObject.incomeBand = incomeBand;

  return combinedObject;
};

module.exports.states = states;
module.exports.ageBracket = ageBracket;
module.exports.bracketModifier = bracketModifier;