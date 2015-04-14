
/*JS Lint helpers: */
/*global */
/*jslint unused:false */

$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'green',
		'data-header-bg-color': '#00695C',// Teal: 800
		'data-header-color': '#FFF3E0'
	}).appendTo('.main-content');
	
	$('<div></div>', {
		'class': 'nextSectionArrow',
		'html': '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" fill="rgba(0,0,0,0.5)"/><path d="M0-.75h24v24h-24z" fill="none"/></svg>'
	}).appendTo(base);
	
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
			'<p>One must always be on alert for Sleepers. They first appear as if they are dead, but when you get too close they attack.</p>' +
		'</div>' +
		'<div class="zombie-wrapper">' + 
			'<canvas id="chart-green-left"></canvas>' + 
		'</div>'
	).appendTo(zombieBodyLeft);
	
	var zombieWrapperRight = $(
		'<div class="zombie-text">' + 
			'<p>The Walkers are generally harmless and easy to evade. But when they form a horde they are a dangerous foe.</p>' +
		'</div>' +
		'<div class="zombie-wrapper">' + 
			'<canvas id="chart-green-right"></canvas>' + 
		'</div>'
	).appendTo(zombieBodyRight);
	
	var zombieWrapperMiddle = $(
		'<div class="zombie-text">' + 
			'<p>The Runners are the most dangerous breed of zombie. They can smell humans from far away and never tire in the chase.</p>' +
		'</div>' +
		'<div class="zombie-wrapper">' + 
			'<canvas id="chart-green-middle"></canvas>' + 
		'</div>'
	).appendTo(zombieBodyMiddle);
});




