


$(document).ready(function () {
	
	var $red = $('<div></div>', {
		'id': 'red',
		'class': 'some classes idk'
	}).appendTo('body > .container');
	
	$red.append( $('<h1>Hello, this is the red section</h1>') );
	
	$('<p>This text is appended to the section by a different way.</p>').appendTo($red);
	
	
	// Scroll button
	var $scrollBtn = $('<button>Scroll to next...</button>').appendTo($red);
	$scrollBtn.click(function () {
		
		var nextSectionPosition = $red.next().position().top;
		scrollTo(nextSectionPosition, function () {
			alert('Scrolling animation fininshed, this is the callback function letting you know [red]');
		});
		
	})
	
});

var scrollTo = function (position, callback) {
	$('html, body').animate({ scrollTop: position }, 'slow', callback);
};




