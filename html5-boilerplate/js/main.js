
/*JS Lint helpers: */
/*global $, Info */
/*jslint unused:false */

$(document).ready(function () {
	
	setTimeout(function() {
		var info = new Info();
		info.init();
	}, 100);
    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

    var pieData = [
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            },
            {
                value: 40,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Grey"
            },
            {
                value: 120,
                color: "#4D5360",
                highlight: "#616774",
                label: "Dark Grey"
            }

        ];

    var barChartData = {
        labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets : [
            {
                fillColor : "rgba(255,183,77,0.5)",
                strokeColor : "rgba(255,183,77,0.8)",
                highlightFill: "rgba(255,183,77,0.75)",
                highlightStroke: "rgba(255,183,77,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                fillColor : "rgba(245,124,0,0.5)",
                strokeColor : "rgba(245,124,0,0.8)",
                highlightFill : "rgba(245,124,0,0.75)",
                highlightStroke : "rgba(245,124,0,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]

    };

    window.onload = function(){
		var info = new Info();

        var ctx1 = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx1).Pie(pieData);

		var ctx2 = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx2).Bar(barChartData, {
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            scaleBeginAtZero : true,
			responsive : true
		});
    };
});
