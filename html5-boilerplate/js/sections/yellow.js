


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'yellow',
		'data-header-bg-color': '#EF6C00',// Orange: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	
	$('<h1>Yellow, this is the yellow section</h1>').appendTo(base);
	$('<p>Hi, i\'m a paragraph!</p>').appendTo(base);
	
});




