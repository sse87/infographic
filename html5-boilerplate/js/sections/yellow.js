


$(document).ready(function () {
	
	var yellow = $('<div></div>', {
		'id': 'yellow',
		'class': 'some classes idk'
	}).appendTo('body > .container');
	
	yellow.append( $('<h1>Yellow, this is the yellow section</h1>') );
	
	$('<p>This text is appended to the section by a different way.</p>').appendTo(yellow);
	
	
	// Scroll button
	$('<button>Scroll to next...</button>').appendTo(yellow).click(function () {
		
		var nextSectionPosition = yellow.next().position().top;
		
		scrollTo(nextSectionPosition, function () {
			alert('Scrolling animation fininshed, this is the callback function letting you know [yellow]');
		});
		
	})
	
});

var scrollTo = function (position, callback) {
	$('html, body').animate({ scrollTop: position }, 'slow', callback);
};



