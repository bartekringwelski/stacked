var data;

angular.module('app',[])
  .controller('formController', ['$scope', '$http', function($scope, $http) {
    
    $scope.getCommerceData = function(){
      console.log("hello");

      let formData = $scope.formData;
      $http.post('/userSubmission', formData).then( (response) => $scope.apiResults = response.data);
      // console.log("response from server", $scope.apiResults);

      data1 = d3.entries($scope.apiResults);
      console.log("Arrayify!", data1);

    }
  }]);

 var dataObject = 
{
"$20.00k-$30.00k": 0.1261146303655346,
"$120.00k-$130.00k": 0.018000879457209275,
"$450.00k-$460.00k": 0.005737466859976182,
"$160.00k-$170.00k": 0.004153510772184425,
"$180.00k-$190.00k": 0.002701356626896694,
"$110.00k-$120.00k": 0.013195357305735017,
"$220.00k-$230.00k": 0.0006076886021645845,
"$130.00k-$140.00k": 0.011160008724588761,
"$370.00k-$380.00k": 0.0001702927752706897,
"$240.00k-$250.00k": 0.0004910497149928792//,
// "$380.00k-$390.00k": 0.00006298499907272085,
// "$300.00k-$310.00k": 0.00014229944234948042,
// "$500.00k-$510.00k": 0.0003919066608969297,
// "$540.00k-$550.00k": 0.00009564388748079833,
// "$30.00k-$40.00k": 0.12264112430556122,
// "$10.00k-$20.00k": 0.11912912741282118,
// "$0.00-$10.00k": 0.1194382204638262,
// "$60.00k-$70.00k": 0.07218664088169667,
// "$80.00k-$90.00k": 0.041483786611488695,
// "$70.00k-$80.00k": 0.05156255285199575,
// "$50.00k-$60.00k": 0.0887400317491051,
// "$90.00k-$100.00k": 0.03705034251009218,
// "$320.00k-$330.00k": 0.0015373005329230756,
// "$100.00k-$110.00k": 0.032045367861554305,
// "$150.00k-$160.00k": 0.011347797332935205,
// "$40.00k-$50.00k": 0.10100577712408161,
// "$170.00k-$180.00k": 0.0026453699610542755,
// "$200.00k-$210.00k": 0.0046107352098975094,
// "$140.00k-$150.00k": 0.005612663250702457,
// "$190.00k-$200.00k": 0.0012457033149938124,
// "$210.00k-$220.00k": 0.0007324922114383091,
// "$230.00k-$240.00k": 0.0007453224890271966,
// "($10.00k)-$0.00": 0.00029626277341613137,
// "$250.00k-$260.00k": 0.002918304957036066
}



      data = d3.entries(dataObject);
      console.log(data);





var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var formatPercent = d3.format(".0%");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>value:</strong> <span style='color:red'>" + d.value + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

  x.domain(data.map(function(d) { return d.key; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("value");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.key); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)



function type(d) {
  d.value = +d.value;
  return d;
}