


$(document).ready(function () {
	
	var $green = $('<div></div>', {
		'id': 'green',
		'class': 'some classes idk'
	}).appendTo('body > .container');
	
	$green.append( $('<h1>Hello, this is the green section</h1>') );
	
	$('<p>This text is appended to the section by a different way.</p>').appendTo($green);
	
});




