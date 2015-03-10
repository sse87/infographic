


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'green',
		'class': 'some three classes'
	});
	$('.main-content').append(base);
	
	
	$('<h1>Hello, this is the green section</h1>').appendTo(base);
	$('<p>This text is appended to the section by a different way.</p>').appendTo(base);
	
	// ...
	
});




