


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'blue',
		'class': 'some three classes',
		'style': 'height: 1000px;'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the blue section</h1>').appendTo(wrapper);
	
	// ...
	
});




