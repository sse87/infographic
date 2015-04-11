


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'yellow',
		'data-header-bg-color': '#EF6C00',// Orange: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 
        'class': 'limit limit-body' 
        }).appendTo(base);

	$('<h1 class="yellow-title">Total deathcount</h1>').appendTo(wrapper);
	$('<canvas id="canvas" height="190" width="600"></canvas>').appendTo(wrapper);

	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(255,183,77,0.5)",
				strokeColor : "rgba(255,183,77,0.8)",
				highlightFill: "rgba(255,183,77,0.75)",
				highlightStroke: "rgba(255,183,77,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			},
			{
				fillColor : "rgba(245,124,0,0.5)",
				strokeColor : "rgba(245,124,0,0.8)",
				highlightFill : "rgba(245,124,0,0.75)",
				highlightStroke : "rgba(245,124,0,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
	}
	
});




