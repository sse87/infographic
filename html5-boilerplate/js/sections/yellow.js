


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'yellow',
		'data-header-bg-color': '#EF6C00',// Orange: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	var wrapper = $('<div></div>', { 'class': 'limit', 'style': 'margin-top: 150px;' }).appendTo(base);
	$('<h1>Yellow, this is the yellow section</h1>').appendTo(wrapper);
	
});




