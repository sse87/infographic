
/*JS Lint helpers: */
/*global $, Info, Chart */
/*jslint unused:false */

$(document).ready(function () {
	
	setTimeout(function() {
		var info = new Info();
		info.init();
	}, 100);
    var randomScalingFactor = function(){ return Math.round(Math.random()*100);};
    var randomScalingFactorThousand = function(){ return Math.round(Math.random()*100000);};

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
                fillColor : "rgba(255,90,94,0.5)",
                strokeColor : "rgba(255,90,94,0.8)",
                highlightFill: "rgba(255,90,94,0.75)",
                highlightStroke: "rgba(255,90,94,1)",
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

    var lineData = {
        labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        datasets: [
            {
                label: "Sleepers",
                fillColor: "rgba(255,90,94,0.2)",
                strokeColor: "rgba(255,90,94,1)",
                pointColor: "rgba(255,90,94,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                /*data: [48372, 28376, 58766, 19827, 73867, 18276, 98472]*/
                data: [randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand()]
            },
            {
                label: "Runners",
                fillColor: "rgba(70,191,189,0.2)",
                strokeColor: "rgba(70,191,189,1)",
                pointColor: "rgba(70,191,189,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                /*data: [95384, 84398, 58347, 29387, 47837, 63982, 82398]*/
                data: [randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand()]
            },
            {
                label: "Walkers",
                fillColor: "rgba(104,159,56,0.2)",
                strokeColor: "rgba(104,159,56,1)",
                pointColor: "rgba(104,159,56,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                /*data: [87300, 95039, 55387, 67109, 48928, 73847, 29837]*/
                data: [randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand(), randomScalingFactorThousand()]
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
        /* Rightmost pie chart in yellow */
        var legendHolderPie = document.createElement('div');
        legendHolderPie.innerHTML = window.myPie.generateLegend();
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
        pieCanvas.parentNode.parentNode.appendChild(legendHolderPie.firstChild);
        /* ----------------------------- */

        /* Middle chart in yellow */
        var lineCanvas = document.getElementById("chart-bar-middle");
        var lineChart = lineCanvas.getContext("2d");
        window.myLine = new Chart(lineChart).Line(lineData, {
            responsive : false,
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        });
        var legendHolderLine = document.createElement('div');
        legendHolderLine.innerHTML = window.myLine.generateLegend();
        helpers.each(legendHolderLine.firstChild.childNodes, function(legendNode, index){
            helpers.addEvent(legendNode, 'mouseover', function(){
                var activeSegment = window.myLine.segments[index];
                activeSegment.save();
                activeSegment.fillColor = activeSegment.highlightColor;
                window.myLine.showTooltip([activeSegment]);
                activeSegment.restore();
            });
        });
        helpers.addEvent(legendHolderLine.firstChild, 'mouseout', function(){
            window.myLine.draw();
        });
        lineCanvas.parentNode.appendChild(legendHolderLine.firstChild);
        /* ---------------------- */

        /* Leftmost bar chart in yellow */
        var barCanvas = document.getElementById("chart-bar-1");
        var barChart = barCanvas.getContext("2d");
        window.myBar = new Chart(barChart).Bar(barChartData, {
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            scaleBeginAtZero : true,
            responsive : false,
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        });

        var legendHolderBar = document.createElement('div');
        legendHolderBar.innerHTML = window.myBar.generateLegend();
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
        /* ---------------------------- */

    };
});
