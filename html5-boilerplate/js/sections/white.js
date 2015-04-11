

$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'white',
		'data-header-bg-color': '#B0BEC5',// Blue Grey: 200
		'data-header-color': '#222'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 
        'class': 'limit limit-body' }).appendTo(base);
	$('<h1>Hello, this is the white section</h1>').appendTo(wrapper);
	
	// ...
	
});




