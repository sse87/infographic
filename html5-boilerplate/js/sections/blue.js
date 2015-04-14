
/*JS Lint helpers: */
/*global Chart */
/*jslint unused:false */

$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'blue',
		'data-header-bg-color': '#2E7D32',// Green: 800
		'data-header-color': '#FFF3E0'
	}).appendTo('.main-content');
	
	function getRandom (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	var weapons = [
		/* FIREARMS */
		{
			image: 'weapon1.png',
			name: 'AK-47',
			description: 'What this Soviet-made assault rifle lacks in accuracy, it makes up for in firepower. You can squeeze off these higher caliber rounds in single shots for ammo conservation, or room-clear with fully automatic fire.',
			type: 'Firearm'
		},
		{
			image: 'weapon2.png',
			name: 'Auto Shotgun',
			description: 'The Auto Shotgun is excellent against hordes of enemies, especially in tight areas like houses or hallways, because they can take out several enemies in a few good shots.',
			type: 'Firearm'
		},
		{
			image: 'weapon6.png',
			name: 'Magnum Pistol',
			description: 'An alternative to a melee weapon or pistol, the Magnum holds eight massive half-inch rounds guaranteed to leave a hole the size of a dinner plate. When incapacitated, this powerful handgun will put down any swarming common infected with a single shot.',
			type: 'Firearm'
		},
		{
			image: 'weapon10.png',
			name: 'Grenade Launcher',
			description: 'Highly explosive shells from this weapon are guaranteed to blast infected to pieces within a tight radius, and stagger any infected immediately outside of that radius. It takes a while to reload, so make your shots count. ',
			type: 'Firearm'
		},
		{
			image: 'weapon15.png',
			name: 'M1911 Pistol',
			description: 'Even though they are meant as emergency weapons, the Pistols make great secondaries, or even primaries for Hunting Rifle and Pump Shotgun/Auto Shotgun users because of their unlimited ammo, decent power, and above average accuracy.',
			type: 'Firearm'
		},
		{
			image: 'weapon16.png',
			name: 'Silenced Submachine Gun',
			description: 'Fast rate of fire allows it to rip up Hordes and Special Infected that are at medium distance.',
			type: 'Firearm'
		},
		{
			image: 'weapon17.png',
			name: 'Hunting Rifle',
			description: 'The Hunting Rifle is a medium to long range weapon best suited for engaging targets in open areas. For example, it is ideal for standing off and sniping a street filled with Common Infected prior to stepping out from a building or alley.',
			type: 'Firearm'
		},
		{
			image: 'weapon18.png',
			name: 'M60 ',
			description: 'The high capacity of rounds without reloading can really help when faced with a large swarm of Infected.',
			type: 'Firearm'
		},
		/* MELEE WEAPONS */
		{
			image: 'weapon3.png',
			name: 'Baseball Bat',
			description: 'Batter up!',
			type: 'Melee'
		},
		{
			image: 'weapon4.png',
			name: 'Chainsaw',
			description: 'Realize every zombie killer\'s dream with the ultimate in gore-splattering destruction. But the fun won\'t last forever&mdash;once the gas gauge hits E (emptied), it\'s useless',
			type: 'Melee'
		},
		{
			image: 'weapon5.png',
			name: 'Crowbar',
			description: 'The right weapon in the right place.',
			type: 'Melee'
		},
		{
			image: 'weapon7.png',
			name: 'Axe',
			description: 'Great for clearing out crowds of infected, this handy lumberjack-approved melee weapon will have you stacking up the zombies like cordwood.',
			type: 'Melee'
		},
		{
			image: 'weapon8.png',
			name: 'Frying Pan',
			description: 'Great for flying off handles with.',
			type: 'Melee'
		},
		{
			image: 'weapon9.png',
			name: 'Katana',
			description: 'This blade aint for buttering bread.',
			type: 'Melee'
		},
		{
			image: 'weapon11.png',
			name: 'Machete',
			description: 'The perfect blade for clearing sudden rainforests.',
			type: 'Melee'
		},
		/* THROWABLES*/
		{
			image: 'weapon12.png',
			name: 'Molotov Cocktail',
			description: 'The Molotov Cocktail is a throwable weapon that engulfs an area with flames for approximately 15 to 17 seconds. The area of effect is quite large and spreads over time before self-extinguishing. ',
			type: 'Throwable'
		},
		{
			image: 'weapon14.png',
			name: 'Pipe Bomb',
			description: 'The Pipe Bomb is an IED that can be used offensively, defensively and for diversionary purposes.',
			type: 'Throwable'
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
		var index = $(this).attr('href').replace('#weapon-', '');
		$('#weaponDetails .image').attr('style', 'background-image: url("img/weapons/' + weapons[index].image +'");');
		var text = '<h2>%name%</h2><div class="type">%type%</div><div class="desc">%desc%</div>';
		text = text.replace('%name%', weapons[index].name);
		text = text.replace('%type%', weapons[index].type);
		text = text.replace('%desc%', weapons[index].description);
		$('#weaponDetails .text').html(text);
		//$('#weaponDetails .specs').
		window.canvasWeaponSpecs.datasets[0].points[0].value = getRandom(20, 100);
		window.canvasWeaponSpecs.datasets[0].points[1].value = getRandom(20, 100);
		window.canvasWeaponSpecs.datasets[0].points[2].value = getRandom(20, 100);
		window.canvasWeaponSpecs.datasets[0].points[3].value = getRandom(20, 100);
		window.canvasWeaponSpecs.datasets[0].points[4].value = getRandom(20, 100);
		window.canvasWeaponSpecs.update();
	});
	
	
	
	var container = $('<div></div>', { 'class': 'container', 'id': 'weaponDetails' }).appendTo(base);
	var column1 = $('<div></div>', { 'class': 'column' }).appendTo(container);
	var column2 = $('<div></div>', { 'class': 'column' }).appendTo(container);
	$('<div></div>', { 'class': 'image' }).appendTo(column1);
	$('<div></div>', { 'class': 'specs', 'html': '<canvas id="canvasWeaponSpecs"></canvas>' }).appendTo(column1);
	$('<div></div>', { 'class': 'text' }).appendTo(column2);
	
	$(window).load(function () {
		var radarChartData = {
			labels: ['Effectiveness', 'Durability', 'Weight', 'Kill Potential', 'Enjoyability'],
			datasets: [
				{
					label: 'My First dataset',
					fillColor: 'rgba(46,125,50,0.2)',
					strokeColor: 'rgba(46,125,50,1)',
					pointColor: 'rgba(46,125,50,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: [0,0,0,0,0]
				}
			]
		};
		var context = document.getElementById('canvasWeaponSpecs').getContext('2d');
		window.canvasWeaponSpecs = new Chart(context).Radar(radarChartData);
		
		// Default click the first weapon
		$('#blue nav a').first().trigger('click');
	});
	
	
});




