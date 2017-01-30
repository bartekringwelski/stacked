angular
  .module('form', ['ui.utils.masks'])
  .controller('formController', function ($scope, $rootScope, $http) {
    // $(".selectpicker").selectpicker();

    var countyData = [
      'Baldwin County, Alabama',
      'Calhoun County, Alabama',
      'Cullman County, Alabama',
      'DeKalb County, Alabama',
      'Elmore County, Alabama',
      'Etowah County, Alabama',
      'Houston County, Alabama',
      'Jefferson County, Alabama',
      'Lauderdale County, Alabama',
      'Lee County, Alabama',
      'Limestone County, Alabama',
      'Madison County, Alabama',
      'Marshall County, Alabama',
      'Mobile County, Alabama',
      'Montgomery County, Alabama',
      'Morgan County, Alabama',
      'St. Clair County, Alabama',
      'Shelby County, Alabama',
      'Talladega County, Alabama',
      'Tuscaloosa County, Alabama',
      'Walker County, Alabama',
      'Anchorage Municipality, Alaska',
      'Fairbanks North Star Borough, Alaska',
      'Matanuska-Susitna Borough, Alaska',
      'Apache County, Arizona',
      'Cochise County, Arizona',
      'Coconino County, Arizona',
      'Maricopa County, Arizona',
      'Mohave County, Arizona',
      'Navajo County, Arizona',
      'Pima County, Arizona',
      'Pinal County, Arizona',
      'Yavapai County, Arizona',
      'Yuma County, Arizona',
      'Benton County, Arkansas',
      'Craighead County, Arkansas',
      'Faulkner County, Arkansas',
      'Garland County, Arkansas',
      'Jefferson County, Arkansas',
      'Lonoke County, Arkansas',
      'Pulaski County, Arkansas',
      'Saline County, Arkansas',
      'Sebastian County, Arkansas',
      'Washington County, Arkansas',
      'White County, Arkansas',
      'Alameda County, California',
      'Butte County, California',
      'Contra Costa County, California',
      'El Dorado County, California',
      'Fresno County, California',
      'Humboldt County, California',
      'Imperial County, California',
      'Kern County, California',
      'Kings County, California',
      'Lake County, California',
      'Los Angeles County, California',
      'Madera County, California',
      'Marin County, California',
      'Mendocino County, California',
      'Merced County, California',
      'Monterey County, California',
      'Napa County, California',
      'Nevada County, California',
      'Orange County, California',
      'Placer County, California',
      'Riverside County, California',
      'Sacramento County, California',
      'San Bernardino County, California',
      'San Diego County, California',
      'San Francisco County, California',
      'San Joaquin County, California',
      'San Luis Obispo County, California',
      'San Mateo County, California',
      'Santa Barbara County, California',
      'Santa Clara County, California',
      'Santa Cruz County, California',
      'Shasta County, California',
      'Solano County, California',
      'Sonoma County, California',
      'Stanislaus County, California',
      'Sutter County, California',
      'Tulare County, California',
      'Ventura County, California',
      'Yolo County, California',
      'Yuba County, California',
      'Adams County, Colorado',
      'Arapahoe County, Colorado',
      'Boulder County, Colorado',
      'Broomfield County, Colorado',
      'Denver County, Colorado',
      'Douglas County, Colorado',
      'El Paso County, Colorado',
      'Jefferson County, Colorado',
      'Larimer County, Colorado',
      'Mesa County, Colorado',
      'Pueblo County, Colorado',
      'Weld County, Colorado',
      'Fairfield County, Connecticut',
      'Hartford County, Connecticut',
      'Litchfield County, Connecticut',
      'Middlesex County, Connecticut',
      'New Haven County, Connecticut',
      'New London County, Connecticut',
      'Tolland County, Connecticut',
      'Windham County, Connecticut',
      'Kent County, Delaware',
      'New Castle County, Delaware',
      'Sussex County, Delaware',
      'District of Columbia, District of Columbia',
      'Alachua County, Florida',
      'Bay County, Florida',
      'Brevard County, Florida',
      'Broward County, Florida',
      'Charlotte County, Florida',
      'Citrus County, Florida',
      'Clay County, Florida',
      'Collier County, Florida',
      'Columbia County, Florida',
      'Duval County, Florida',
      'Escambia County, Florida',
      'Flagler County, Florida',
      'Hernando County, Florida',
      'Highlands County, Florida',
      'Hillsborough County, Florida',
      'Indian River County, Florida',
      'Lake County, Florida',
      'Lee County, Florida',
      'Leon County, Florida',
      'Manatee County, Florida',
      'Marion County, Florida',
      'Martin County, Florida',
      'Miami-Dade County, Florida',
      'Monroe County, Florida',
      'Nassau County, Florida',
      'Okaloosa County, Florida',
      'Orange County, Florida',
      'Osceola County, Florida',
      'Palm Beach County, Florida',
      'Pasco County, Florida',
      'Pinellas County, Florida',
      'Polk County, Florida',
      'Putnam County, Florida',
      'St. Johns County, Florida',
      'St. Lucie County, Florida',
      'Santa Rosa County, Florida',
      'Sarasota County, Florida',
      'Seminole County, Florida',
      'Sumter County, Florida',
      'Volusia County, Florida',
      'Barrow County, Georgia',
      'Bartow County, Georgia',
      'Bibb County, Georgia',
      'Bulloch County, Georgia',
      'Carroll County, Georgia',
      'Catoosa County, Georgia',
      'Chatham County, Georgia',
      'Cherokee County, Georgia',
      'Clarke County, Georgia',
      'Clayton County, Georgia',
      'Cobb County, Georgia',
      'Columbia County, Georgia',
      'Coweta County, Georgia',
      'DeKalb County, Georgia',
      'Dougherty County, Georgia',
      'Douglas County, Georgia',
      'Fayette County, Georgia',
      'Floyd County, Georgia',
      'Forsyth County, Georgia',
      'Fulton County, Georgia',
      'Glynn County, Georgia',
      'Gwinnett County, Georgia',
      'Hall County, Georgia',
      'Henry County, Georgia',
      'Houston County, Georgia',
      'Liberty County, Georgia',
      'Lowndes County, Georgia',
      'Muscogee County, Georgia',
      'Newton County, Georgia',
      'Paulding County, Georgia',
      'Richmond County, Georgia',
      'Rockdale County, Georgia',
      'Troup County, Georgia',
      'Walker County, Georgia',
      'Walton County, Georgia',
      'Whitfield County, Georgia',
      'Hawaii County, Hawaii',
      'Honolulu County, Hawaii',
      'Kauai County, Hawaii',
      'Maui County, Hawaii',
      'Ada County, Idaho',
      'Bannock County, Idaho',
      'Bonneville County, Idaho',
      'Canyon County, Idaho',
      'Kootenai County, Idaho',
      'Twin Falls County, Idaho',
      'Adams County, Illinois',
      'Champaign County, Illinois',
      'Cook County, Illinois',
      'DeKalb County, Illinois',
      'DuPage County, Illinois',
      'Kane County, Illinois',
      'Kankakee County, Illinois',
      'Kendall County, Illinois',
      'Lake County, Illinois',
      'LaSalle County, Illinois',
      'McHenry County, Illinois',
      'McLean County, Illinois',
      'Macon County, Illinois',
      'Madison County, Illinois',
      'Peoria County, Illinois',
      'Rock Island County, Illinois',
      'St. Clair County, Illinois',
      'Sangamon County, Illinois',
      'Tazewell County, Illinois',
      'Vermilion County, Illinois',
      'Will County, Illinois',
      'Williamson County, Illinois',
      'Winnebago County, Illinois',
      'Allen County, Indiana',
      'Bartholomew County, Indiana',
      'Clark County, Indiana',
      'Delaware County, Indiana',
      'Elkhart County, Indiana',
      'Floyd County, Indiana',
      'Grant County, Indiana',
      'Hamilton County, Indiana',
      'Hancock County, Indiana',
      'Hendricks County, Indiana',
      'Howard County, Indiana',
      'Johnson County, Indiana',
      'Kosciusko County, Indiana',
      'Lake County, Indiana',
      'LaPorte County, Indiana',
      'Madison County, Indiana',
      'Marion County, Indiana',
      'Monroe County, Indiana',
      'Morgan County, Indiana',
      'Porter County, Indiana',
      'St. Joseph County, Indiana',
      'Tippecanoe County, Indiana',
      'Vanderburgh County, Indiana',
      'Vigo County, Indiana',
      'Wayne County, Indiana',
      'Black Hawk County, Iowa',
      'Dallas County, Iowa',
      'Dubuque County, Iowa',
      'Johnson County, Iowa',
      'Linn County, Iowa',
      'Polk County, Iowa',
      'Pottawattamie County, Iowa',
      'Scott County, Iowa',
      'Story County, Iowa',
      'Woodbury County, Iowa',
      'Butler County, Kansas',
      'Douglas County, Kansas',
      'Johnson County, Kansas',
      'Leavenworth County, Kansas',
      'Riley County, Kansas',
      'Sedgwick County, Kansas',
      'Shawnee County, Kansas',
      'Wyandotte County, Kansas',
      'Boone County, Kentucky',
      'Bullitt County, Kentucky',
      'Campbell County, Kentucky',
      'Christian County, Kentucky',
      'Daviess County, Kentucky',
      'Fayette County, Kentucky',
      'Hardin County, Kentucky',
      'Jefferson County, Kentucky',
      'Kenton County, Kentucky',
      'McCracken County, Kentucky',
      'Madison County, Kentucky',
      'Pike County, Kentucky',
      'Warren County, Kentucky',
      'Ascension Parish, Louisiana',
      'Bossier Parish, Louisiana',
      'Caddo Parish, Louisiana',
      'Calcasieu Parish, Louisiana',
      'East Baton Rouge Parish, Louisiana',
      'Iberia Parish, Louisiana',
      'Jefferson Parish, Louisiana',
      'Lafayette Parish, Louisiana',
      'Lafourche Parish, Louisiana',
      'Livingston Parish, Louisiana',
      'Orleans Parish, Louisiana',
      'Ouachita Parish, Louisiana',
      'Rapides Parish, Louisiana',
      'St. Landry Parish, Louisiana',
      'St. Tammany Parish, Louisiana',
      'Tangipahoa Parish, Louisiana',
      'Terrebonne Parish, Louisiana',
      'Androscoggin County, Maine',
      'Aroostook County, Maine',
      'Cumberland County, Maine',
      'Kennebec County, Maine',
      'Penobscot County, Maine',
      'York County, Maine',
      'Allegany County, Maryland',
      'Anne Arundel County, Maryland',
      'Baltimore County, Maryland',
      'Calvert County, Maryland',
      'Carroll County, Maryland',
      'Cecil County, Maryland',
      'Charles County, Maryland',
      'Frederick County, Maryland',
      'Harford County, Maryland',
      'Howard County, Maryland',
      'Montgomery County, Maryland',
      'Prince Georges County, Maryland',
      'St. Marys County, Maryland',
      'Washington County, Maryland',
      'Wicomico County, Maryland',
      'Baltimore city, Maryland',
      'Barnstable County, Massachusetts',
      'Berkshire County, Massachusetts',
      'Bristol County, Massachusetts',
      'Essex County, Massachusetts',
      'Franklin County, Massachusetts',
      'Hampden County, Massachusetts',
      'Hampshire County, Massachusetts',
      'Middlesex County, Massachusetts',
      'Norfolk County, Massachusetts',
      'Plymouth County, Massachusetts',
      'Suffolk County, Massachusetts',
      'Worcester County, Massachusetts',
      'Allegan County, Michigan',
      'Bay County, Michigan',
      'Berrien County, Michigan',
      'Calhoun County, Michigan',
      'Clinton County, Michigan',
      'Eaton County, Michigan',
      'Genesee County, Michigan',
      'Grand Traverse County, Michigan',
      'Ingham County, Michigan',
      'Isabella County, Michigan',
      'Jackson County, Michigan',
      'Kalamazoo County, Michigan',
      'Kent County, Michigan',
      'Lapeer County, Michigan',
      'Lenawee County, Michigan',
      'Livingston County, Michigan',
      'Macomb County, Michigan',
      'Marquette County, Michigan',
      'Midland County, Michigan',
      'Monroe County, Michigan',
      'Muskegon County, Michigan',
      'Oakland County, Michigan',
      'Ottawa County, Michigan',
      'Saginaw County, Michigan',
      'St. Clair County, Michigan',
      'Shiawassee County, Michigan',
      'Van Buren County, Michigan',
      'Washtenaw County, Michigan',
      'Wayne County, Michigan',
      'Anoka County, Minnesota',
      'Blue Earth County, Minnesota',
      'Carver County, Minnesota',
      'Dakota County, Minnesota',
      'Hennepin County, Minnesota',
      'Olmsted County, Minnesota',
      'Ramsey County, Minnesota',
      'Rice County, Minnesota',
      'St. Louis County, Minnesota',
      'Scott County, Minnesota',
      'Sherburne County, Minnesota',
      'Stearns County, Minnesota',
      'Washington County, Minnesota',
      'Wright County, Minnesota',
      'DeSoto County, Mississippi',
      'Forrest County, Mississippi',
      'Harrison County, Mississippi',
      'Hinds County, Mississippi',
      'Jackson County, Mississippi',
      'Jones County, Mississippi',
      'Lauderdale County, Mississippi',
      'Lee County, Mississippi',
      'Madison County, Mississippi',
      'Rankin County, Mississippi',
      'Boone County, Missouri',
      'Buchanan County, Missouri',
      'Cape Girardeau County, Missouri',
      'Natrona County, Wyoming'
    ];

    $scope.countyData = countyData;

    $scope.getCommerceData = function () {

      let formData = $scope.formData;
      console.log("user submitted teh following:", formData);
      $http
        .post('/userSubmission', formData)
        .then((response) => {
          console.log("this is what server and API give back", response.data);
          $scope.userIncomeBucket = response.data.userIncomeBucket;
          $scope.userPercentile = response.data.userPercentile;

          $rootScope.userPercentile = $scope.userPercentile;
          $rootScope.hasData = true;

          var data = d3.entries(response.data.finalBuckets);

          var margin = {
            top: 40,
            right: 20,
            bottom: 30,
            left: 40
          }
          var width = parseInt(d3.select(".container").style("width")) - margin.right;
          var height = 300;

          var formatPercent = d3.format(".0%");

          var x = d3
            .scale
            .ordinal()
            .rangeRoundBands([
              0, width
            ], .1);

          var y = d3
            .scale
            .linear()
            .range([height, 0]);

          var xAxis = d3
            .svg
            .axis()
            .scale(x)
            .orient("bottom")

          var yAxis = d3
            .svg
            .axis()
            .scale(y)
            .orient("left")
            .tickFormat(formatPercent)

          var tip = d3
            .tip()
            .attr('class', 'd3-tip')
            .offset([-5, 0])
            .html(function (d) {
              return "<strong>value:</strong> <span style='color:red'>" + d.value + "</span>";
            })

          var svg = d3
            .select("div")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          svg.call(tip);

          x.domain(data.map(function (d) {
            return d.key;
          }));
          y.domain([
            0,
            d3.max(data, function (d) {
              return d.value;
            })
          ]);

          svg
            .append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)

          svg
            .append("g")
            .attr("class", "y axis")
            .style("font-size", "15px") //To change the font size of texts
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "1em")
            .style("text-anchor", "end")
            .text("value")

          svg
            .selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
              return x(d.key);
            })
            .attr("width", x.rangeBand())
            .transition() //animation
            .delay(function (d, i) { // more animation stuff
              return i * 50;
            })
            .attr("y", function (d) {
              return y(d.value);
            })
            .attr("height", function (d) {
              return height - y(d.value);
            })
            .filter(function (d) {
              console.log("does this fire?");
              return d.key === response.data.userIncomeBucket;
            })
            .style('fill', 'steelblue')
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)

          function type(d) {
            d.value = +d.value;
            return d;
          }

        })
    }

    $scope.clickInResults = function () {
      console.log("has data", $rootScope.hasData);
      console.log("percetnile", $rootScope.userPercentile);

    };
  });
