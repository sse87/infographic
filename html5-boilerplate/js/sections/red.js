
// Text taken from https://www.youtube.com/watch?v=rACeLDeJDIM
var arrText = [
	"Why Does The Government Have A Zombie Apocalypse Plan?",
	"In 2014 Foreign Policy magazine uncovered a US Military document detailing a contingency plan against a Zombie Apocalypse.",
	"Carrying a disclaimer starting 'This is not a joke', it painstakingly plots how the US would react if it faced swarms of the undead.",
	"Why Does The Government Have A Zombie Apocalypse Plan?",
	"Drafted on April 30 2011, conplan 8888-11 claims to be a comprehensive strategy detailing defensive and offensive operations to be launched if a pandemic breaks out.",
	"It describes 8 forms of zombie that could pose a threat to humanity.",
	"Ranging from the vegetarian zombie which eliminates plant life and leads to mass starvation to the terrifying Pathogenic Zombie recognizable from popular culture.",
	"They also consider the risk of walking dead created as bio-weapons 'Evil-Magic Zombies' born from voodoo spells and enchantment and even zombies that have come from space.",
	"The plan highlights zombies' strengths, including their ability to survive without water.",
	"It also notes vulnerabilities including photo-sensitivity and an inability to climb or swim.",
	"Perhaps most worryingly, buried in the document was the order to \"Maintain emergency plans to employ nuclear weapons within the United States to eradicate zombie hoards\"",
	"In media reports, the US government have insisted that the document was created as a training exercise...",
	"...to teach employees how to plan for real emergencies such as 2014's Ebola Outbreak.",
	"They claim to have used a zombie scenario as it's completely fictional and would minimize public panic should the plans leak.",
	"Even if officials aren't covering up an impending zombie apocalypse, it could mean that the US Government are prepared to maintain order...",
	"...in some unspecified future disaster or pandemic disease by nuking their own citizens."];

$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'red',
		'data-header-bg-color': '#C62828',// Red: 800
		'data-header-color': '#FFF3E0'
	});
	$('.main-content').append(base);
	
	arrText.forEach(function (text, i) {
		$('<p></p>', {
			'class': 'card nr' + i + (i === 0 ? ' title' : ''),
			'html': text
		}).css({
			'left': (100 + (i * 350)) + 'px'
		}).appendTo(base);
	});
	
});




