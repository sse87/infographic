


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'yellow',
		'class': 'some three classes',
		'style': 'height: 1000px;'
	});
	$('.main-content').append(base);
	
	
	$('<h1>Yellow, this is the yellow section</h1>').appendTo(base);
	$('<p>Hi, i\'m a paragraph!</p>').appendTo(base);
	
});




