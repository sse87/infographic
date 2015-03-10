


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'red',
		'class': 'some three classes'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the red section</h1>').appendTo(wrapper);
	$('<p>Hi, i\'m a paragraph!</p>').appendTo(wrapper);
	$('<p>This is wrapped up in a limited container</p>').appendTo(wrapper);
	
	// Scroll button
	var scrollBtn = $('<button>Scroll to next...</button>').appendTo(wrapper);
	// Bind click event
	scrollBtn.click(function () {
		
		var nextSectionPosition = base.next().position().top;
		animateTo({
			position: nextSectionPosition,
			callback: function () {
				alert('Scrolling animation finished, this is the callback function letting you know [red]');
			}
		});
		
	});
	
	// ...
	
});





