


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'blue',
		'data-header-bg-color': '#2E7D32',// Green: 800
		'data-header-color': '#FFF3E0'
	}).appendTo('.main-content');
	
	var weapons = [
		{
			text: 'Bla bla bla bla penis bla bla bla, Can you see the penis?',
			image: 'weapon6.png',
			stats: {
				stat1: 5,
				stat2: 15,
				stat3: 25,
				stat4: 35,
				stat5: 55
			}
		},
		{
			text: 'Bla bla bla bla penis bla bla bla, Can you see the penis?',
			image: 'weapon16.png',
			stats: {
				stat1: 5,
				stat2: 15,
				stat3: 25,
				stat4: 35,
				stat5: 55
			}
		},
		{
			text: 'Bla bla bla bla penis bla bla bla, Can you see the penis?',
			image: 'weapon1.png',
			stats: {
				stat1: 5,
				stat2: 15,
				stat3: 25,
				stat4: 35,
				stat5: 55
			}
		}
	];
	
	var nav = $('<nav></nav>').appendTo(base);
	weapons.forEach(function (weapon, i) {
		var wrapper = $('<div></div>', {
			'class': 'wrapper'
		}).appendTo(nav);
		$('<a></a>', {
			'href': '#',
			'id': 'weapon-' + i,
			'style': 'background-image: url("img/weapons/' + weapon.image + '");'
		}).appendTo(wrapper);
	});
	
	/*
	$('<div></div>', { 'class': 'weapon', 'style': 'left:  800px;bottom: 10%;background-image: url("img/weapons/weapon3.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 1300px;top:    10%;background-image: url("img/weapons/weapon7.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 1800px;bottom: 10%;background-image: url("img/weapons/weapon9.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 2300px;top:    10%;background-image: url("img/weapons/weapon5.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 2800px;bottom: 10%;background-image: url("img/weapons/weapon8.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 3300px;top:    10%;background-image: url("img/weapons/weapon11.png");' }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 3800px;bottom: 10%;background-image: url("img/weapons/weapon4.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 4300px;top:    10%;background-image: url("img/weapons/weapon15.png");' }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 4800px;bottom: 10%;background-image: url("img/weapons/weapon6.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 5300px;top:    10%;background-image: url("img/weapons/weapon16.png");' }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 5800px;bottom: 10%;background-image: url("img/weapons/weapon1.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 6300px;top:    10%;background-image: url("img/weapons/weapon2.png");'  }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 6800px;bottom: 10%;background-image: url("img/weapons/weapon17.png");' }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 7300px;top:    10%;background-image: url("img/weapons/weapon18.png");' }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 7800px;bottom: 10%;background-image: url("img/weapons/weapon10.png");' }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 8300px;top:    10%;background-image: url("img/weapons/weapon12.png");width: 125px;' }).appendTo(base);
	$('<div></div>', { 'class': 'weapon', 'style': 'left: 8600px;bottom: 10%;background-image: url("img/weapons/weapon14.png");width: 125px;' }).appendTo(base);
	*/
	
	
});




