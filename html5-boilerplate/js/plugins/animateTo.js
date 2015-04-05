
/*JS Lint helpers: */
/*global $ */
/*jslint unused:false */

var animateTo = function (options) {
	
	// Make it idiot proof so the can't brake it
	if (typeof options === 'number') {
		var pos = options;
		options = { position: pos };
	}
	else if (typeof options !== 'object') {
		options = {};
	}
	
	// The default settings, if defined in options, it will overwrite the defaults
	var animateToDefaults = {
		position: 0,
		duration: 1000,// 'fast' === 400ms && 'slow' === 1000ms
		easing: $.bez([0.7,0.1,0.3,0.9]),// Equivalent to cubic-bezier(0.7,0.1,0.3,0.9)
		callback: function () {}
	};
	
	// Merge defaults and options, without modifying defaults
	var settings = $.extend({}, animateToDefaults, options);
	
	// Executing scrolling animation to the position
	// 'body, html' is to make sure it will work in all browsers
	var runCallback = true;
	$('body, html').animate({
		scrollTop: settings.position
	}, settings.duration, settings.easing, function () {
		if (runCallback) {
			runCallback = false;
			settings.callback();
		}
	});
	
};
