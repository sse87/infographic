


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'green',
		'data-header-bg-color': '#00695C',// Teal: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	
	$('<p class="box" style="left: 50px;top: 200px;">Zombie art</p>').appendTo(base);
	
	$('<div /></div>', {
		'class': 'zombie',
		'style': 'left: 150px;bottom: 10%;background-image: url("img/zombies/zombie-01.jpg");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 550px;top: 10%;background-image: url("img/zombies/zombie-02.jpg");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 940px;bottom: 5%;background-image: url("img/zombies/zombie-03.jpg");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 1330px;top: 5%;background-image: url("img/zombies/zombie-04.jpg");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 1725px;bottom: 20%;background-image: url("img/zombies/zombie-05.jpg");'
	}).appendTo(base);
	
	$('<div></div>', {
		'class': 'zombie',
		'style': 'left: 2110px;top: 15%;background-image: url("img/zombies/zombie-06.jpg");'
	}).appendTo(base);
	
	
});




