
/*JS Lint helpers: */
/*global Chart */
/*jslint unused:false */

$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'blue',
		'data-header-bg-color': '#2E7D32',// Green: 800
		'data-header-color': '#FFF3E0'
	}).appendTo('.main-content');
	
	var weapons = [
		/* FIREARMS */
		{
			image: 'weapon1.png',
			name: 'AK-47',
			description: 'What this Soviet-made assault rifle lacks in accuracy, it makes up for in firepower. You can squeeze off these higher caliber rounds in single shots for ammo conservation, or room-clear with fully automatic fire.',
			type: 'Firearm',
			stats: {
				accuracy: 97,
				magSize: 40,
				weight: 4.5
			}
		},
		{
			image: 'weapon2.png',
			name: 'Auto Shotgun',
			description: 'The Auto Shotgun is excellent against hordes of enemies, especially in tight areas like houses or hallways, because they can take out several enemies in a few good shots.',
			type: 'Firearm',
			stats: {
				accuracy: 76,
				magSize: 10,
				weight: 5
			}
		},
		{
			image: 'weapon6.png',
			name: 'Magnum Pistol',
			description: 'An alternative to a melee weapon or pistol, the Magnum holds eight massive half-inch rounds guaranteed to leave a hole the size of a dinner plate. When incapacitated, this powerful handgun will put down any swarming common infected with a single shot.',
			type: 'Firearm',
			stats: {
				accuracy: 99,
				magSize: 8,
				weight: 1.8
			}
		},
		{
			image: 'weapon10.png',
			name: 'Grenade Launcher',
			description: 'Highly explosive shells from this weapon are guaranteed to blast infected to pieces within a tight radius, and stagger any infected immediately outside of that radius. It takes a while to reload, so make your shots count. ',
			type: 'Firearm',
			stats: {
				accuracy: 72,
				magSize: 1,
				weight: 5
			}
		},
		{
			image: 'weapon15.png',
			name: 'M1911 Pistol',
			description: 'Even though they are meant as emergency weapons, the Pistols make great secondaries, or even primaries for Hunting Rifle and Pump Shotgun/Auto Shotgun users because of their unlimited ammo, decent power, and above average accuracy.',
			type: 'Firearm',
			stats: {
				accuracy: 93,
				magSize: 15,
				weight: 1.2
			}
		},
		{
			image: 'weapon16.png',
			name: 'Silenced Submachine Gun',
			description: 'Fast rate of fire allows it to rip up Hordes and Special Infected that are at medium distance.',
			type: 'Firearm',
			stats: {
				accuracy: 97,
				magSize: 50,
				weight: 2.1
			}
		},
		{
			image: 'weapon17.png',
			name: 'Hunting Rifle',
			description: 'The Hunting Rifle is a medium to long range weapon best suited for engaging targets in open areas. For example, it is ideal for standing off and sniping a street filled with Common Infected prior to stepping out from a building or alley.',
			type: 'Firearm',
			stats: {
				accuracy: 100,
				magSize: 15,
				weight: 5.6
			}
		},
		{
			image: 'weapon18.png',
			name: 'M60 ',
			description: 'The high capacity of rounds without reloading can really help when faced with a large swarm of Infected.',
			type: 'Firearm',
			stats: {
				accuracy: 97,
				magSize: 150,
				weight: 7.2
			}
		},
		/* MELEE WEAPONS */
		{
			image: 'weapon3.png',
			name: 'Baseball Bat',
			description: 'Batter up!',
			type: 'Melee',
			stats: {
				weight: 2
			}
		},
		{
			image: 'weapon4.png',
			name: 'Chainsaw',
			description: 'Realize every zombie killer\'s dream with the ultimate in gore-splattering destruction. But the fun won\'t last forever&mdash;once the gas gauge hits E (emptied), it\'s useless',
			type: 'Melee',
			stats: {
				weight: 7
			}
		},
		{
			image: 'weapon5.png',
			name: 'Crowbar',
			description: 'The right weapon in the right place.',
			type: 'Melee',
			stats: {
				weight: 2.4
			}
		},
		{
			image: 'weapon7.png',
			name: 'Axe',
			description: 'Great for clearing out crowds of infected, this handy lumberjack-approved melee weapon will have you stacking up the zombies like cordwood.',
			type: 'Melee',
			stats: {
				Weight: 2.5
			}
		},
		{
			image: 'weapon8.png',
			name: 'Frying Pan',
			description: 'Great for flying off handles with.',
			type: 'Melee',
			stats: {
				weight: 2.7
			}
		},
		{
			image: 'weapon9.png',
			name: 'Katana',
			description: 'This blade aint for buttering bread.',
			type: 'Melee',
			stats: {
				weight: 1.7
			}
		},
		{
			image: 'weapon11.png',
			name: 'Machete',
			description: 'The perfect blade for clearing sudden rainforests.',
			type: 'Melee',
			stats: {
				weight: 1.8
			}
		},
		/* THROWABLES*/
		{
			image: 'weapon12.png',
			name: 'Molotov Cocktail',
			description: 'The Molotov Cocktail is a throwable weapon that engulfs an area with flames for approximately 15 to 17 seconds. The area of effect is quite large and spreads over time before self-extinguishing. ',
			type: 'Throwable',
			stats: {
				weight: 0.8
			}
		},
		{
			image: 'weapon14.png',
			name: 'Pipe Bomb',
			description: 'The Pipe Bomb is an IED that can be used offensively, defensively and for diversionary purposes.',
			type: 'Throwable',
			stats: {
				weight: 0.9
			}
		}
	];
	
	
	
	var nav = $('<nav></nav>').appendTo(base);
	weapons.forEach(function (weapon, i) {
		var wrapper = $('<div></div>', {
			'class': 'wrapper'
		}).appendTo(nav);
		$('<a></a>', {
			'href': '#weapon-' + i,
			'style': 'background-image: url("img/weapons/' + weapon.image + '");'
		}).appendTo(wrapper);
	});
	$('#blue nav a').click(function (e) {
		e.preventDefault();
		$('#blue .container').hide();
		var index = $(this).attr('href').replace('#weapon-', '');
		$('#blue .container').eq(index).show();
	});
	
	
	weapons.forEach(function (weapon, i) {
		
		var container = $('<div></div>', {
			'class': 'container',
			'id': 'weapon-' + i,
			'style': 'display: none;'
		}).appendTo(base);
		
		var column1 = $('<div></div>', {
			'class': 'column'
		}).appendTo(container);
		$('<div></div>', {
			'class': 'image',
			'style': 'background-image: url("img/weapons/' + weapon.image + '");'
		}).appendTo(column1);
		$('<div></div>', {
			'class': 'specs',
			'html': '<canvas id="canvasWeapon' + i + '" height="450" width="450"></canvas>'
		}).appendTo(column1);
		
		var column2 = $('<div></div>', {
			'class': 'column'
		}).appendTo(container);
		$('<div></div>', {
			'class': 'text',
			'html': '<h2>%name%</h2><div class="type">%type%</div><div class="desc">%desc%</div>'
				.replace('%name%', weapon.name).replace('%type%', weapon.type).replace('%desc%', weapon.description)
		}).appendTo(column2);
		
		/*var data = {
			labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			datasets: [
				{
					label: 'My First dataset',
					fillColor: 'rgba(46,125,50,0.2)',
					strokeColor: 'rgba(46,125,50,1)',
					pointColor: 'rgba(46,125,50,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: [65, 59, 90, 81, 56, 55, 40]
				}
			]
		};
		
		$(window).load(function () {
			var context = document.getElementById('canvasWeapon' + i).getContext('2d');
			var chart = new Chart(context).PolarArea(data);
		});*/
	});
	
	var radarChartTestWrapper = $('<div></div>').appendTo(base);
	$('<canvas id="canvas" height="450" width="450"></canvas>').appendTo(radarChartTestWrapper);
	
	var radarChartData = {
		labels: ['Accuracy', 'Mag Size', 'Weight'],
		datasets: [
			{
				label: 'My First dataset',
				fillColor: 'rgba(46,125,50,0.2)',
				strokeColor: 'rgba(46,125,50,1)',
				pointColor: 'rgba(46,125,50,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(220,220,220,1)',
				data: [97, 150, 7.2]
			}
		]
	};
	$(window).load(function () {
		window.myRadar = new Chart(document.getElementById('canvas').getContext('2d')).Radar(radarChartData);
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




