


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'white',
		'class': 'some three classes',
		'style': 'height: 1000px;'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the white section</h1>').appendTo(wrapper);
	
	// ...
	
});




