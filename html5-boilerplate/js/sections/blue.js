


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'blue',
		'data-header-color': '#0277BD'// Light Blue: 800
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the blue section</h1>').appendTo(wrapper);
	
	// ...
	
});




