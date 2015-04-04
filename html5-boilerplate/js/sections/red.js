


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'red',
		'class': 'some three classes',
		'style': 'height: 1000px;'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the red section</h1>').appendTo(wrapper);
	$('<p>Hi, i\'m a paragraph!</p>').appendTo(wrapper);
	$('<p>This is wrapped up in a limited container</p>').appendTo(wrapper);
	
});





