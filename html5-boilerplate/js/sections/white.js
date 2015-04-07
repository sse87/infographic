


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'white',
		'data-header-color': '#B0BEC5'// Blue Grey: 200
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the white section</h1>').appendTo(wrapper);
	
	// ...
	
});




