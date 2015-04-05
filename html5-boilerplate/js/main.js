
// Set true too console log debug messages
var verbose = false;

var Info = function () {
	
	if (verbose) console.log('Constructor HERE!');
	
	// Private variables
	var privateVar = "This is only to show example of a private variable";
	var defaultSettings = {
		quietPeriod: 500,
		animationDuration: 1000,
		easing: 'cubic-bezier(.7,.1,.3,.9)',
		sectionVerticalMoveDistance: 0.01
	};
	
	// Public variables
	this.headerHeight = $('body > header').height();
	this.windowHeight = $(window).height();
	this.sectionHeight = this.windowHeight - this.headerHeight;
	this.sectionsEl = $('.main-content section');
	this.footerPos = $('.main-content section').last().position().top + this.sectionHeight;
	this.windowWidth = $(window).width();
	
	// High priority bug: If user refresh on mid site, has to init the active section
	this.activeSection = this.sectionsEl.first();
	this.activeSectionViewportY = 0;
	
	
	// Initialization
	this.init = function () {
		if (verbose) console.log('init() BEGINS!');
		
		this.overwriteScroll();
		this.bindResize();
		this.bindKeydown();
		
		if (verbose) console.log('init() ENDS!');
	};
	
	this.bindResize = function () {
		var base = this;
		
		// Change section height dynamically
		$(window).resize(function () {
			base.headerHeight = $('body > header').height();
			base.windowHeight = $(window).height();
			base.sectionHeight = base.windowHeight - base.headerHeight;
			base.sectionsEl.css({ 'height': base.sectionHeight });
			base.footerPos = $('.main-content section').last().position().top + base.sectionHeight;
			this.windowWidth = $(window).width();
		});
		
		// Initial the section height
		$(window).resize();
	};
	
	this.bindKeydown = function () {
		var base = this;
		
		$(document).keydown(function (e) {
			var tag = e.target.tagName.toLowerCase();
			switch (e.which) {
				
				case Key.HOME:
					e.preventDefault();
					animateTo({ position: 0 });
				break;
				
				case Key.END:
					e.preventDefault();
					animateTo({ position: base.footerPos });
				break;
				
				case Key.J:
				case Key.W:
				case Key.UP:
				case Key.PAGE_UP:
					e.preventDefault();
					if (tag != 'input' && tag != 'textarea') base.moveUp();
				break;
				
				case Key.K:
				case Key.S:
				case Key.DOWN:
				case Key.PAGE_DOWN:
				case Key.SPACE:
					e.preventDefault();
					if (tag != 'input' && tag != 'textarea') base.moveDown();
				break;
				
				case Key.A:
				case Key.LEFT:
					e.preventDefault();
					if (tag != 'input' && tag != 'textarea') base.moveLeft();
				break;
				
				case Key.D:
				case Key.RIGHT:
					e.preventDefault();
					if (tag != 'input' && tag != 'textarea') base.moveRight();
				break;
				
			}
		});
		
	};
	
	this.overwriteScroll = function () {
		var base = this;
		
		var lastAnimation = 0;
		var newScrollMethod = function (event, delta) {
			var timeNow = new Date().getTime();
			// Cancel scroll if currently animating or within quiet period
			var timeDiff = timeNow - lastAnimation;
			var timeMin = defaultSettings.quietPeriod + defaultSettings.animationDuration;
			if (timeDiff < timeMin) {
				event.preventDefault();
				return;
			}
			
			if (delta < 0) {
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
	
	
	this.moveLeft = function () {
		this.moveWithinActiveSection('left');
	};
	this.moveRight = function () {
		this.moveWithinActiveSection('right');
	};
	this.moveWithinActiveSection = function (direction) {
		//console.log('moveWithinActiveSection(' + direction + '); HERE!');
		var base = this;
		
		if (!base.activeSection) return;
		
		var activeSectionWidth = $(base.activeSection).width();
		//console.log('activeSectionWidth:' + activeSectionWidth + ' - windowWidth:' + base.windowWidth);
		if (activeSectionWidth > base.windowWidth) {
			
			base.activeSectionViewportY += (direction === 'right' ? 1 : -1) * base.windowWidth * defaultSettings.sectionVerticalMoveDistance;
			if (base.activeSectionViewportY < 0) {
				base.activeSectionViewportY = 0;
			} else if (base.activeSectionViewportY > (activeSectionWidth - base.windowWidth)) {
				base.activeSectionViewportY = activeSectionWidth - base.windowWidth;
			}
			
			$(base.activeSection).css('transform', 'translate3d(' + (-1 * base.activeSectionViewportY) + 'px,0,0)');
			
		}
		
	};
	
	
	this.moveDown = function () {
		this.moveToNextSection('down');
	};
	this.moveUp = function () {
		this.moveToNextSection('up');
	};
	this.moveToNextSection = function (direction) {
		//console.log('moveToNextSection(' + direction + '); HERE!');
		var base = this;
		
		var offset = base.headerHeight;
		var mainWindowTop = $(document).scrollTop() + offset;
		//console.log('#### mainWindowTop: ' + mainWindowTop);
		
		var targetPos = mainWindowTop;
		var thisSectionPos = 0;
		if (direction === 'down') {
			for (var i = 0; (targetPos == mainWindowTop && i < base.sectionsEl.length); i++) {
				
				thisSectionPos = $(base.sectionsEl[i]).position().top;
				if (targetPos < thisSectionPos) {
					targetPos = thisSectionPos;
					this.activeSection = base.sectionsEl[i];
				}
				//console.log('     thisSectionPos[' + i + ']: ' + thisSectionPos + ' - targetPos: ' + targetPos);
			}
			// This is a hack to be able to scroll to bottom
			if (targetPos === mainWindowTop) {
				targetPos += base.sectionHeight;
			}
		}
		else if (direction === 'up') {
			for (var k = base.sectionsEl.length - 1; (targetPos == mainWindowTop && k >= 0); k--) {
				
				thisSectionPos = $(base.sectionsEl[k]).position().top;
				if (targetPos > thisSectionPos) {
					targetPos = thisSectionPos;
					this.activeSection = base.sectionsEl[k];
				}
				//console.log('     thisSectionPos[' + i + ']: ' + thisSectionPos + ' - targetPos: ' + targetPos);
			}
		}
		
		//console.log('targetPos:' + targetPos + ' - offset:' + offset + ' - Animate to: ' + (targetPos - offset));
		animateTo({ position: (targetPos - offset) });
	};
	
};

$(document).ready(function () {
	
	if (verbose) console.log('document is ready!');
	
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
	var animateToDefaults = {
		position: 0,
		duration: 1000,// 'fast' === 400ms && 'slow' === 1000ms
		easing: 'cubic-bezier(.7,.1,.3,.9)',
		callback: function () {}
	};
	
	// Merge defaults and options, without modifying defaults
	var settings = $.extend({}, animateToDefaults, options);
	
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

// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
var Key = {
	BACKSPACE: 8,
	TAB: 9,
	ENTER: 13,
	SHIFT: 16,
	CTRL: 17,
	ALT: 18,
	BREAK: 19,
	PAUSE: 19,
	CAPS_LOCK: 20,
	ESC: 27,
	SPACE: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	INSERT: 45,
	DELETE: 46,
	n0: 48, n1: 49, n2: 50, n3: 51, n4: 52,
	n5: 53, n6: 54, n7: 55, n8: 56, n9: 57,
	A: 65, B: 66, C: 67, D: 68, E: 69, F: 70,
	G: 71, H: 72, I: 73, J: 74, K: 75, L: 76,
	M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82,
	S: 83, T: 84, U: 85, V: 86, W: 87, X: 88,
	Y: 89, Z: 90,
	MULTIPLY: 106,
	ADD: 107,
	SUBTRACT: 108,
	DECIMAL_POINT: 109,
	DIVIDE: 110,
	f1: 112, f2: 113, f3: 114, f4: 115,
	f5: 116, f6: 117, f7: 118, f8: 119,
	f9: 120, f10: 121, f11: 122, f12: 123,
	isArrow: function (k) {
		k = k.which ? k.which : k;
		switch (k) {
			case Key.LEFT:
			case Key.RIGHT:
			case Key.UP:
			case Key.DOWN:
				return true;
		}
		return false;
	},
	isControl: function (e) {
		var k = e.which;
		switch (k) {
			case Key.SHIFT:
			case Key.CTRL:
			case Key.ALT:
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
