


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

	var zombieBodyLeft = $(
        '<div class="zombie-body zombie-body-left">' +
            '<div class="zombie-title">' + 
                '<h3>Sleepers</h3>' + 
            '</div>' +
        '</div>'
    ).appendTo(wrapper);
	var zombieBodyRight = $(
        '<div class="zombie-body zombie-body-right">' + 
            '<div class="zombie-title">' + 
                '<h3>Walkers</h3>' + 
            '</div>' +
        '</div>'
        ).appendTo(wrapper);
	var zombieBodyMiddle = $(
        '<div class="zombie-body zombie-body-middle">' + 
            '<div class="zombie-title">' + 
                '<h3>Runners</h3>' + 
            '</div>' +
        '</div>'
        ).appendTo(wrapper);

	var zombieWrapperLeft = $(
        '<div class="zombie-wrapper">' + 
        '</div>'
        ).appendTo(zombieBodyLeft);

	var zombieWrapperRight = $(
        '<div class="zombie-wrapper">' + 
        '</div>'
        ).appendTo(zombieBodyRight);

	var zombieWrapperMiddle = $(
        '<div class="zombie-wrapper">' + 
        '</div>'
        ).appendTo(zombieBodyMiddle);

	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-01.png");'
	}).appendTo(zombieWrapperLeft);
	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-03.png");'
	}).appendTo(zombieWrapperRight);
	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-02.png");'
	}).appendTo(zombieWrapperMiddle);
	
	
	
});




