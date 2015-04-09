


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'green',
		'data-header-bg-color': '#00695C',// Teal: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	
	$('<p class="card title" style="left: 100px;top: 120px;">Zombie heads</p>').appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 150px;bottom: 10%;background-image: url("img/zombies/zombie-01.png");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 550px;top: 10%;background-image: url("img/zombies/zombie-02.png");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 940px;bottom: 5%;background-image: url("img/zombies/zombie-03.png");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 1330px;top: 5%;background-image: url("img/zombies/zombie-04.png");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 1725px;bottom: 20%;background-image: url("img/zombies/zombie-05.png");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 2110px;top: 15%;background-image: url("img/zombies/zombie-06.png");'
	}).appendTo(base);
	
	
});




