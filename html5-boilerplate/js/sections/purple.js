


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'purple',
		'data-header-bg-color': '#4527A0',// Deep Purple: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit', 'style': 'margin-top: 150px;' }).appendTo(base);
	$('<h1>Hello, this is the purple section</h1>').appendTo(wrapper);
	
	// ...
	
});




