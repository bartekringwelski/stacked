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
          $scope.userPercentile = response.data.modifiedData.incomePercentile;

          $rootScope.userPercentile = $scope.userPercentile;
          $rootScope.hasData = true;

          var data = d3.entries(response.data.modifiedData.modifiedRanges);

          var margin = {
            top: 40,
            right: 20,
            bottom: 30,
            left: 40
          };
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
            .orient("bottom");

          var yAxis = d3
            .svg
            .axis()
            .scale(y)
            .orient("left")
            .tickFormat(formatPercent);

          var tip = d3
            .tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function (d) {
              return `<strong> Earns more than ${Math.round(d.value * 100)}% </strong>`;
            })

          var svg = d3
            .select("body")
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
            .call(xAxis);

          svg
            .append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("value");

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
            .attr("y", function (d) {
              return y(d.value);
            })
            .attr("height", function (d) {
              return height - y(d.value);
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .filter(function (d) {
              console.log("does this fire?");
              return d.key === response.data.modifiedData.incomeBand;
            })
            .style('fill', 'steelblue')

          function type(d) {
            d.value = +d.value;
            return d;
          }

        })
    }
  });
