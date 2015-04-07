


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'black',
		'data-header-color': '#37474F'// Blue Grey: 800
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the black section</h1>').appendTo(wrapper);
	
	// ...
	
});




