


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'black',
		'class': 'some three classes',
		'style': 'height: 1000px;'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the black section</h1>').appendTo(wrapper);
	
	// ...
	
});




