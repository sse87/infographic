
/*JS Lint helpers: */
/*global $, Info, Chart */
/*jslint unused:false */

$(document).ready(function () {
	
	setTimeout(function() {
		var info = new Info();
		info.init();
	}, 100);
    var randomScalingFactor = function(){ return Math.round(Math.random()*100);};

    var pieData = [
            {
                value: 150378,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Asia"
            },
            {
                value: 89032,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Europe"
            },
            {
                value: 100394,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "North America"
            },
            {
                value: 54093,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Africa"
            },
            {
                value: 73992,
                color: "#689F38",
                highlight: "#8BC34A",
                label: "Oceania"
            },
            {
                value: 37298,
                color: "#4D5360",
                highlight: "#616774",
                label: "South America"
            }
        ];

    var barChartData = {
        labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],
        datasets : [
            {
                label: "Zombie",
                fillColor : "rgba(247,70,74,0.5)",
                strokeColor : "rgba(247,70,74,0.8)",
                highlightFill: "rgba(247,70,74,0.75)",
                highlightStroke: "rgba(247,70,74,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "Suicide",
                fillColor : "rgba(70,191,189,0.5)",
                strokeColor : "rgba(70,191,189,0.8)",
                highlightFill: "rgba(70,191,189,0.75)",
                highlightStroke: "rgba(70,191,189,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "Murder",
                fillColor : "rgba(104,159,56,0.5)",
                strokeColor : "rgba(104,159,56,0.8)",
                highlightFill : "rgba(104,159,56,0.75)",
                highlightStroke : "rgba(104,159,56,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]

    };

    window.onload = function(){

        var ctx1 = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx1).Pie(pieData);

        var pieCanvas = document.getElementById("chart-pie-1");
        var pieChart = pieCanvas.getContext("2d");
        window.myPie = new Chart(pieChart).Doughnut(pieData, {
            responsive: false,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        });

        var helpers = Chart.helpers;
        var legendHolderPie = document.createElement('div');
        legendHolderPie.innerHTML = window.myPie.generateLegend();
        // Include a html legend template after the module doughnut itself
        helpers.each(legendHolderPie.firstChild.childNodes, function(legendNode, index){
            helpers.addEvent(legendNode, 'mouseover', function(){
                var activeSegment = window.myPie.segments[index];
                activeSegment.save();
                activeSegment.fillColor = activeSegment.highlightColor;
                window.myPie.showTooltip([activeSegment]);
                activeSegment.restore();
            });
        });
        helpers.addEvent(legendHolderPie.firstChild, 'mouseout', function(){
            window.myPie.draw();
        });
        pieCanvas.parentNode.appendChild(legendHolderPie.firstChild);

        var barCanvas = document.getElementById("chart-bar-1");
        var barChart = barCanvas.getContext("2d")
        window.myBar = new Chart(barChart).Bar(barChartData, {
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            scaleBeginAtZero : true,
            responsive : false,
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        });
/*
        var legendHolderBar = document.createElement('div');
        legendHolderBar.innerHTML = window.myBar.generateLegend();

        document.getElementById('legend').appendChild(legendHolderBar.firstChild);
        */

        var legendHolderBar = document.createElement('div');
        legendHolderBar.innerHTML = window.myBar.generateLegend();
        // Include a html legend template after the module doughnut itself
        helpers.each(legendHolderBar.firstChild.childNodes, function(legendNode, index){
            helpers.addEvent(legendNode, 'mouseover', function(){
                var activeSegment = window.myBar.segments[index];
                activeSegment.save();
                activeSegment.fillColor = activeSegment.highlightColor;
                window.myBar.showTooltip([activeSegment]);
                activeSegment.restore();
            });
        });
        helpers.addEvent(legendHolderBar.firstChild, 'mouseout', function(){
            window.myBar.draw();
        });
        barCanvas.parentNode.appendChild(legendHolderBar.firstChild);

/*
		var ctx4 = document.getElementById("chart-bar-2").getContext("2d");
		window.myBar = new Chart(ctx4).Bar(barChartData, {
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            scaleBeginAtZero : true,
			responsive : false
		});
        */
    };
});
