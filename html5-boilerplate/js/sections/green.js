


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

	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-01.png");'
	}).appendTo(zombieBodyLeft);
	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-03.png");'
	}).appendTo(zombieBodyRight);
	$('<div></div>', {
		'class': 'zombie',
		'style': 'background-image: url("img/zombies/zombie-02.png");'
	}).appendTo(zombieBodyMiddle);

	var zombieWrapperLeft = $(
        '<div class="zombie-text">' + 
            '<p>The sleepers are a dangerous breed of zombie. They first appear as if they are dead, but when you get too close they attack.</p>' +
        '</div>' +
        '<div class="zombie-wrapper">' + 
            '<canvas id="chart-green-left" style="width: 350px; height: 311px;"></canvas>' + 
        '</div>'
        ).appendTo(zombieBodyLeft);

	var zombieWrapperRight = $(
        '<div class="zombie-text">' + 
            '<p>The walkers are generally harmless and easy to evade. But when they form a horde they are a dangerous foe.</p>' +
        '</div>' +
        '<div class="zombie-wrapper">' + 
            '<canvas id="chart-green-right" style="width: 350px; height: 311px;"></canvas>' + 
        '</div>'
        ).appendTo(zombieBodyRight);

	var zombieWrapperMiddle = $(
        '<div class="zombie-text">' + 
            '<p>The runners are the most dangerous breed of zombie. They can smell humans from far away and never tire in the chase.</p>' +
        '</div>' +
        '<div class="zombie-wrapper">' + 
            '<canvas id="chart-green-middle" style="width: 350px; height: 311px;"></canvas>' + 
        '</div>'
        ).appendTo(zombieBodyMiddle);
});




