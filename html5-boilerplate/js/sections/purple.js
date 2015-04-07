


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'purple',
		'data-header-color': '#4527A0'// Deep Purple: 800
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit' }).appendTo(base);
	$('<h1>Hello, this is the purple section</h1>').appendTo(wrapper);
	
	// ...
	
});




