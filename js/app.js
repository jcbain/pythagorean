// Define chart constants
var chartWidth     = 400;
var chartHeight    = 400;
var padding        = 25;

// Create svg element
var svg             = d3.select('#chart')
    .append('svg')
    .attr('width', chartWidth)
    .attr('height', chartHeight);

var x_scale          = d3.scaleLinear()
    .domain([0, 4])
    .range([padding, chartWidth-padding]);

var y_scale          = d3.scaleLinear()
    .domain([0, 4])
    .range([chartHeight-padding, padding]);

svg.append('path')
   .attr('d',
         'M ' + x_scale(0) + ' ' + y_scale(0) +
         ' L ' + x_scale(4) + ' ' + y_scale(0) +
         ' L ' + x_scale(0) + ' ' + y_scale(3)
       )
    .attr('fill', '#12b978');
