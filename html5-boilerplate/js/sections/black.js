


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'black',
		'data-header-bg-color': '#37474F',// Blue Grey: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit', 'style': 'margin-top: 150px;' }).appendTo(base);
	$('<h1>Hello, this is the black section</h1>').appendTo(wrapper);
	
	// ...
	
});




