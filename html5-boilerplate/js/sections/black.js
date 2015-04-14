


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'black',
		'data-header-bg-color': '#37474F',// Blue Grey: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	$('<div></div>', { 
		'class': 'limit limit-body', 
	}).appendTo(base);
	
	
});




