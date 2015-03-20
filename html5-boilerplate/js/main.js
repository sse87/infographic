

var Info = function () {
	
	console.log('Constructor HERE!');
	
	// Private variables
	var privateVar = "This is only to show example of a private variable";
	
	// Public variables
	this.headerHeight = $('body > header').height();
	this.windowHeight = $(window).height();
	this.sectionHeight = this.windowHeight - this.headerHeight;
	this.sectionsEl = $('.main-content section');
	this.footerPos = $('.main-content section').last().position().top + this.sectionHeight;
	
	
	
	// Initialization
	this.init = function () {
		console.log('init() HERE!');
		
		this.overwriteScroll();
		this.bindResize();
		this.bindKeydown();
		
	};
	
	this.bindResize = function () {
		console.log('bindResize() HERE! [sectionHeight:' + this.sectionHeight + ']');
		var base = this;
		
		// Change section height dynamically
		$(window).resize(function () {
			base.headerHeight = $('body > header').height();
			base.windowHeight = $(window).height();
			base.sectionHeight = base.windowHeight - base.headerHeight;
			base.sectionsEl.css({ 'height': base.sectionHeight });
			base.footerPos = $('.main-content section').last().position().top + base.sectionHeight;
		});
		
		// Initial the section height
		$(window).resize();
	};
	
	this.bindKeydown = function () {
		var base = this;
		
		$(document).keydown(function (e) {
			var tag = e.target.tagName.toLowerCase();
			switch (e.which) {
				
				case Key.UP:
				case Key.PAGE_UP:
					e.preventDefault();
					if (tag != 'input' && tag != 'textarea') base.moveUp();
				break;
				
				case Key.DOWN:
				case Key.PAGE_DOWN:
				case Key.SPACE:
					e.preventDefault();
					if (tag != 'input' && tag != 'textarea') base.moveDown();
				break;
				
				case Key.HOME:
					e.preventDefault();
					console.log('animateTo: 0');
					animateTo({ position: 0 });
				break;
				
				case Key.END:
					e.preventDefault();
					console.log('animateTo: ' + base.footerPos);
					animateTo({ position: base.footerPos });
				break;
			}
		});
		
	};
	
	this.overwriteScroll = function () {
		var base = this;
		
		var lastAnimation = 0;
		var quietPeriod = 500;
		var animationTime = 1000;
		var newScrollMethod = function (event, delta) {
			deltaOfInterest = delta;
			//console.log('delta: ' + delta);
			var timeNow = new Date().getTime();
			// Cancel scroll if currently animating or within quiet period
			if (timeNow - lastAnimation < quietPeriod + animationTime) {
				event.preventDefault();
				return;
			}
			
			if (deltaOfInterest < 0) {
				base.moveDown();
			} else {
				base.moveUp();
			}
			lastAnimation = timeNow;
		};
		// Overwrite scroll and bind it to the new function
		$(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
			event.preventDefault();
			var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
			newScrollMethod(event, delta);
		});
		
	};
	
	this.moveDown = function () {
		this.moveToNextSection('down');
	};
	this.moveUp = function () {
		this.moveToNextSection('up');
	};
	this.moveToNextSection = function (direction) {
		console.log('moveToNextSection(' + direction + '); HERE!');
		var base = this;
		
		var offset = base.headerHeight;
		var mainWindowTop = $(document).scrollTop() + offset;
		//console.log('#### mainWindowTop: ' + mainWindowTop);
		
		var targetPos = mainWindowTop;
		if (direction === 'down') {
			for (var i = 0; (targetPos == mainWindowTop && i < base.sectionsEl.length); i++) {
				
				var thisSectionPos = $(base.sectionsEl[i]).position().top;
				if (targetPos < thisSectionPos) {
					targetPos = thisSectionPos;
				}
				//console.log('     thisSectionPos[' + i + ']: ' + thisSectionPos + ' - targetPos: ' + targetPos);
				
			}
			// This is a hack to be able to scroll to bottom
			if (targetPos === mainWindowTop) {
				targetPos += base.sectionHeight;
			}
		}
		else if (direction === 'up') {
			for (var i = base.sectionsEl.length - 1; (targetPos == mainWindowTop && i >= 0); i--) {
				
				var thisSectionPos = $(base.sectionsEl[i]).position().top;
				if (targetPos > thisSectionPos) {
					targetPos = thisSectionPos;
				}
				//console.log('     thisSectionPos[' + i + ']: ' + thisSectionPos + ' - targetPos: ' + targetPos);
				
			}
		}
		
		//console.log('targetPos:' + targetPos + ' - offset:' + offset + ' - Animate to: ' + (targetPos - offset));
		animateTo({ position: (targetPos - offset) });
	};
	
};

$(document).ready(function () {
	
	console.log('document is ready!');
	
	setTimeout(function() {
		var info = new Info();
		info.init();
	}, 100);
	
});






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

var Key = {
	TAB: 9,
	ENTER: 13,
	ESC: 27,
	SPACE: 32,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	SHIFT: 16,
	CTRL: 17,
	ALT: 18,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	HOME: 36,
	END: 35,
	BACKSPACE: 8,
	DELETE: 46,
	isArrow: function (k) {
		k = k.which ? k.which : k;
		switch (k) {
			case KEY.LEFT:
			case KEY.RIGHT:
			case KEY.UP:
			case KEY.DOWN:
				return true;
		}
		return false;
	},
	isControl: function (e) {
		var k = e.which;
		switch (k) {
			case KEY.SHIFT:
			case KEY.CTRL:
			case KEY.ALT:
				return true;
		}
		if (e.metaKey) return true;
		return false;
	},
	isFunctionKey: function (k) {
		k = k.which ? k.which : k;
		return k >= 112 && k <= 123;
	}
};
