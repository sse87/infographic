


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

});




