


$(document).ready(function () {
	

	var Utils = new Utils();
	var base = $('<section></section>', {
		'id': 'green',
		'class': 'some three classes',
		'style': 'height: 1000px;'
	});
	$('.main-content').append(base);
	
	
	$('<p class="box" style="left: 50px;top: 200px;">Zombie art</p>').appendTo(base);
	
	$('<div></div>', {
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
	
	var max = 0;
	var maxWidth = 0;
	base.find('> *').each(function (i) {
		if (max < $(this).position().left) {
			max = $(this).position().left;
			maxWidth = $(this).width();
		}
	});
	base.css('width', (max + maxWidth));
	
});




