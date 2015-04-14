


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'green',
		'data-header-bg-color': '#00695C',// Teal: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);

	var wrapper = $('<div></div>', { 
        'class': 'limit limit-body' 
        }).appendTo(base);

	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-01.png");'
	}).appendTo(wrapper);
	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-02.png");'
	}).appendTo(wrapper);
	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-03.png");'
	}).appendTo(wrapper);
	
	
	
});




