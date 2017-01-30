angular
  .module('form', ['ui.utils.masks', 'nya.bootstrap.select'])
  .controller('formController', function ($scope, $rootScope, $http) {

    $http
      .get('/getCounties')
      .then((result) => {
        $scope.countyData = result.data;
      })

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
