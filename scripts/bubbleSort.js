var swapped = false;

while (!swapped){
	for (var i = 0; i < 5; i++){
		twoConsecutiveBars = d3.selectAll("rect")
		                       .filter(function(d){ return (d3.select(this).attr("x") == i * (barWidth + barMargin)) || (d3.select(this).attr("x") == (i+1) * (barWidth + barMargin)) ;});
        twoConsecutiveBars.transition()
                          .duration(2000)
                          .delay(1000)
		                  .style("fill", "#DF7652")
		                  .transition();
	}
	swapped = true;
}