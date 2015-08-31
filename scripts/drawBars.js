margin = { top: 50, right: 10, bottom: 50, left: 20 };
barWidth = 25,
barNumber = 20,
barMargin = 5;
width = (barWidth + barMargin) * barNumber + margin.left + margin.right;
height = 250;

numberArray = [];
for (var i = 0; i < barNumber; i++){
	numberArray.push(Math.floor(Math.random() * (height -15)) + 1);
}

var svg = d3.select("#chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g");

var barGraph = svg.append("g")
                    .attr("class","g1")
                    .selectAll(".barg")
                    .data(numberArray)
                    .enter();     

barGraph.append("text")
        .attr("x", function(d,i) { return i * (barWidth + barMargin); })
        .attr("y", function(d){ return (height - d - 3);})
        .attr("dx", (barWidth+10)/2 + "px")
        .text(function(d){ return d; });

barGraph.append("rect")
        .attr("x", function(d,i) { return i * (barWidth + barMargin); })
        .attr("y", function(d){ return (height - d);})
        .attr("width", barWidth)
        .attr("height", function(d) {return d;})
        .style("fill", "#527EE5");





