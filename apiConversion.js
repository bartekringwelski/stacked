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

let bracketModifier = function (resultObject) {
    let currentSum = 0;

    var ranges = {
      "$0.00-$10.00k": {
        displaySalaryBand: '$10k',
        value: null
      },
      "$10.00k-$20.00k": {
        displaySalaryBand: '$20k',
        value: null
      },
      "$20.00k-$30.00k": {
        displaySalaryBand: '$30k',
        value: null
      },
      "$30.00k-$40.00k": {
        displaySalaryBand: '$40k',
        value: null
      },
      "$40.00k-$50.00k": {
        displaySalaryBand: '$50k',
        value: null
      },
      "$50.00k-$60.00k": {
        displaySalaryBand: '$60k',
        value: null
      },
      "$60.00k-$70.00k": {
        displaySalaryBand: '$70k',
        value: null
      },
      "$70.00k-$80.00k": {
        displaySalaryBand: '$80k',
        value: null
      },
      "$80.00k-$90.00k": {
        displaySalaryBand: '$90k',
        value: null
      },
      "$90.00k-$100.00k": {
        displaySalaryBand: '$100k',
        value: null
      },
      "$100.00k-$110.00k": {
        displaySalaryBand: '$110k',
        value: null
      },
      "$110.00k-$120.00k": {
        displaySalaryBand: '$120k',
        value: null
      },
      "$120.00k-$130.00k": {
        displaySalaryBand: '$130k',
        value: null
      },
      "$130.00k-$140.00k": {
        displaySalaryBand: '$140k',
        value: null
      },
      "$140.00k-$150.00k": {
        displaySalaryBand: '$150k',
        value: null
      },
      "$150.00k-$160.00k": {
        displaySalaryBand: '$160k',
        value: null
      },
      "$160.00k-$170.00k": {
        displaySalaryBand: '$170k',
        value: null
      },
      "$170.00k-$180.00k": {
        displaySalaryBand: '$180k',
        value: null
      },
      "$180.00k-$190.00k": {
        displaySalaryBand: '$190k',
        value: null
      },
      "$190.00k-$200.00k": {
        displaySalaryBand: '$200k',
        value: null
      },
      "$200.00k-$210.00k": {
        displaySalaryBand: '$210k',
        value: null
      },
      "$210.00k-$220.00k": {
        displaySalaryBand: '$220k',
        value: null
      },
      "$220.00k-$230.00k": {
        displaySalaryBand: '$230k',
        value: null
      },
      "$230.00k-$240.00k": {
        displaySalaryBand: '$240k',
        value: null
      },
      "$240.00k-$250.00k": {
        displaySalaryBand: '$250k',
        value: null
      },
      "$250.00k-$260.00k": {
        displaySalaryBand: '$260k',
        value: null
      },
      "$260.00k-$270.00k": {
        displaySalaryBand: '$270k',
        value: null
      },
      "$270.00k-$280.00k": {
        displaySalaryBand: '$280k',
        value: null
      },
      "$280.00k-$290.00k": {
        displaySalaryBand: '$290k',
        value: null
      },
      "$290.00k-$300.00k": {
        displaySalaryBand: '$300k',
        value: null
      },
      "$300.00k-$310.00k": {
        displaySalaryBand: '$310k',
        value: null
      },
      "$310.00k-$320.00k": {
        displaySalaryBand: '$320k',
        value: null
      },
      "$320.00k-$330.00k": {
        displaySalaryBand: '$330k',
        value: null
      },
      "$330.00k-$340.00k": {
        displaySalaryBand: '$340k',
        value: null
      }
    };

    for (key in resultObject) {
      if(ranges[key]) {
        ranges[key].value = resultObject[key]; 
      }
    }

    let finalObject = {};

    for (key in ranges) {
      var newKey = ranges[key].displaySalaryBand;
      currentSum = ranges[key].value + currentSum;
      finalObject[newKey] = currentSum;
    }
    return finalObject;
};

module.exports.states = states;
module.exports.ageBracket = ageBracket;
module.exports.bracketModifier = bracketModifier;