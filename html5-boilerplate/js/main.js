


$(document).ready(function () {
	
	console.log('document is ready!');
	
});

var animateTo = function (options) {
	
	// Make it idiot proof so the can't brake it
	if (typeof options !== 'object') {
		options = {};
	}
	
	// The default settings, if defined in options, it will overwrite the defaults
	var defaults = {
		position: 0,
		duration: 400,// 'fast' === 400ms && 'slow' === 1000ms
		easing: 'swing',
		callback: function () {}
	};
	
	// Merge defaults and options, without modifying defaults
	var settings = $.extend({}, defaults, options);
	
	// Executing scrolling animation to the position
	// 'body, html' is to make sure it will work in all browsers
	var runCallback = true;
	$('body, html').animate({
		scrollTop: settings.position
	}, settings.duration, function () {
		if (runCallback) {
			runCallback = false;
			settings.callback();
		}
	});
	
};

