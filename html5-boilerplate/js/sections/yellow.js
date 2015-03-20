


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'yellow',
		'class': 'some three classes',
		'style': 'height: 1000px;'
	});
	$('.main-content').append(base);
	
	
	$('<h1>Yellow, this is the yellow section</h1>').appendTo(base);
	$('<p>Hi, i\'m a paragraph!</p>').appendTo(base);
	
	// Scroll button
	var scrollBtn = $('<button>Scroll to next...</button>').appendTo(base);
	// Bind click event
	scrollBtn.click(function () {
		
		var nextSectionPosition = base.next().position().top;
		animateTo({
			position: nextSectionPosition,
			callback: function () {
				alert('Scrolling animation finished, this is the callback function letting you know [yellow]');
			}
		});
		
	});
	
	// ...
	
});




