


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

	$('<h1 class="yellow-title">Welcome back, survivor.</h1>').appendTo(wrapper);
    $(  '<div class="chart-container">' + 
            '<div class="chart-title">' + 
                '<span>Causes of death</span>' + 
            '</div>' + 
            '<div class="chart-wrapper chart-wrapper-bar">' + 
                '<canvas id="chart-bar-1"></canvas>' + 
            '</div>' + 
        '</div>').appendTo(wrapper);
    $(  '<div class="chart-container chart-container-pie">' + 
            '<div class="chart-title">' + 
                '<span>Deaths by continent</span>' + 
            '</div>' + 
            '<div class="chart-wrapper chart-wrapper-pie">' + 
                '<canvas id="chart-pie-1"></canvas>' + 
            '</div>' + 
        '<div id="legend"></div>' + 
        '</div>').appendTo(wrapper);

});




