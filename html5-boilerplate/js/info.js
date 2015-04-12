
/*JS Lint helpers: */
/*global $, Progress, animateTo, Key */
/*jslint unused:false */

var Info = function () {
	
	// Private variables
	var verbose = false;
	var defaultSettings = {
		quietPeriod: 500,
		animationDuration: 1000,
		easing: $.bez([0.7,0.1,0.3,0.9]),// Equivalent to cubic-bezier(0.7,0.1,0.3,0.9)
		sectionVerticalMoveDistance: 0.5
	};
	
	// Public variables
	this.headerEl = $('body > header');
	this.headerHeight = $('body > header').height();
	this.footerHeight = $('body > footer').height();
	this.windowHeight = $(window).height();
	this.sectionHeight = this.windowHeight - this.headerHeight;
	this.sectionsEl = $('.main-content section');
	this.windowWidth = $(window).width();
	
	// High priority bug: If user refresh on mid site, has to init the active section
	this.activeSection = this.sectionsEl.first();
	this.activeSectionViewportX = 0;
	
	this.progress = new Progress();
	
	
	
	if (verbose) { console.log('Constructor HERE!'); }

	// Initialization
	this.init = function () {
		if (verbose) { console.log('init() BEGINS!'); }
		
		// Initialize key variables, adjust sizes and bind events
		//this.autoSectionWidth();
		this.overwriteScroll();
		this.bindResize();
		this.bindKeydown();
		
		// Initialize the active section progress bar
		this.progress.init();
		
		// Move to closest section
		this.moveToSection();
		
		if (verbose) { console.log('init() ENDS!'); }
	};
	
	this.autoSectionWidth = function () {
		this.sectionsEl.each(function () {
			var maxPosLeft = 0;
			var maxWidth = 0;
			var marginRight = 100;
			$(this).find('> *').each(function () {
				if (maxPosLeft < $(this).position().left) {
					maxPosLeft = $(this).position().left;
					maxWidth = $(this).outerWidth();
				}
			});
			var sectionWidth = maxPosLeft + maxWidth + marginRight;
			if ($(this).find('> *').length > 0 && sectionWidth > $(this).width()) {
				$(this).css('width', sectionWidth + 'px');
			}
		});
	};
	
	this.bindResize = function () {
		var base = this;
		
		// Change section height dynamically
		$(window).resize(function () {
			base.headerHeight = $('body > header').height();
			base.windowHeight = $(window).height();
			base.footerHeight = $('body > footer').height();
			base.sectionHeight = base.windowHeight - base.headerHeight;
			base.sectionsEl.css({ 'height': base.sectionHeight });
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
					base.scrollToSection(base.sectionsEl.first());
				break;
				
				case Key.END:
					e.preventDefault();
					base.scrollToBottom();
				break;
				
				case Key.J:
				case Key.W:
				case Key.UP:
				case Key.PAGE_UP:
					e.preventDefault();
					if (tag !== 'input' && tag !== 'textarea') { base.moveUp(); }
				break;
				
				case Key.K:
				case Key.S:
				case Key.DOWN:
				case Key.PAGE_DOWN:
				case Key.SPACE:
					e.preventDefault();
					if (tag !== 'input' && tag !== 'textarea') { base.moveDown(); }
				break;
				
				case Key.A:
				case Key.LEFT:
					e.preventDefault();
					if (tag !== 'input' && tag !== 'textarea') { base.moveLeft(); }
				break;
				
				case Key.D:
				case Key.RIGHT:
					e.preventDefault();
					if (tag !== 'input' && tag !== 'textarea') { base.moveRight(); }
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
		
		if (!base.activeSection) { return; }
		
		var activeSectionWidth = $(base.activeSection).width();
		//console.log('activeSectionWidth:' + activeSectionWidth + ' - windowWidth:' + base.windowWidth);
		if (activeSectionWidth > base.windowWidth) {
			
			base.activeSectionViewportX += (direction === 'right' ? 1 : -1) * base.windowWidth * defaultSettings.sectionVerticalMoveDistance;
			//console.log('if (' + base.activeSectionViewportX + ' < 0): ' + (base.activeSectionViewportX < 0).toString());
			//console.log('else if (' + base.activeSectionViewportX + ' > ' + (activeSectionWidth - base.windowWidth) + '): ' + (base.activeSectionViewportX > (activeSectionWidth - base.windowWidth).toString()));
			if (base.activeSectionViewportX < 0) {
				base.activeSectionViewportX = 0;
			} else if (base.activeSectionViewportX > (activeSectionWidth - base.windowWidth)) {
				base.activeSectionViewportX = activeSectionWidth - base.windowWidth;
			}
			
			// Move section view
			$(base.activeSection).css('transform', 'translate3d(' + (-1 * base.activeSectionViewportX) + 'px,0,0)');
			
			// Calculate the active section progress
			var maxProgress = activeSectionWidth - base.windowWidth;
			this.progress.setProgress( base.activeSectionViewportX / maxProgress );
			
		}
		
	};
	this.resetActiveSection = function (section) {
		this.activeSectionViewportX = 0;
		$(section).css('transform', 'translate3d(0,0,0)');
		this.progress.setProgress(0);
	};
	
	
	this.moveDown = function () {
		this.moveToSection('down');
	};
	this.moveUp = function () {
		this.moveToSection('up');
	};
	this.moveToSection = function (input) {
		var base = this;
		
		var direction = null;
		if (input === 'down') {
			direction = 'down';
		} else if (input === 'up') {
			direction = 'up';
		}
		
		// Calculate mainWindowTop and remember to include the offset (headerHeight)
		var mainWindowTop = $(document).scrollTop() + base.headerHeight;
		// Set the three value to help with the search
		var indexBefore = -1, indexAfter = -1, currIndex = -1;
		base.sectionsEl.each(function (i, section) {
			var thisSectionPos = $(section).position().top;
			if (mainWindowTop > thisSectionPos) {
				indexBefore = i;
			} else if (thisSectionPos === mainWindowTop) {
				currIndex = i;
			} else if (mainWindowTop < thisSectionPos && indexAfter === -1) {
				indexAfter = i;
			}
		});
		// After this loop if the currIndex is not set then we can find out which one is closest,
		// the above section border or the below section border.
		
		if (direction === 'up' && indexBefore !== -1) {// Check if overwrite to above index
			currIndex = indexBefore;
		} else if (direction === 'down') {// Check if overwrite to below index
			if (indexAfter === -1) {// That means that active section is the last, so footer is next
				base.scrollToBottom();
				return;
			} else {
				currIndex = indexAfter;
			}
		} else {// If direction is not 'up' nor 'down' then select closest section
			
			// If currIndex is not set, calculate closer index and set that to current
			if (currIndex === -1 && indexBefore !== indexAfter) {
				// If for some reason one of them is not set, then choose the other
				if (indexBefore === -1 || indexAfter === -1) {
					// This math formula will give the one that has value
					currIndex = indexBefore + indexAfter + 1;
				} else {
					// Calculate difference
					var diffAbove = Math.abs( mainWindowTop - $(base.sectionsEl[indexBefore]).position().top );
					var diffBelow = Math.abs( mainWindowTop - $(base.sectionsEl[indexAfter]).position().top );
					// If above distance is smaller (closer) or equal, then choose above
					if (diffAbove < diffBelow || diffAbove === diffBelow) {
						currIndex = indexBefore;
					} else if (diffAbove > diffBelow) {
						currIndex = indexAfter;
					}
				}
			}
			
		}
		
		var targetSection = base.sectionsEl[currIndex];
		if (currIndex === -1) {
			targetSection = base.sectionsEl.first();
		}
		base.scrollToSection(targetSection);
	};
	this.scrollToSection = function (section) {
		var base = this;
		
		var prevSection = base.activeSection;
		setTimeout(function() {
			base.resetActiveSection(prevSection);
		}, 1000);
		base.activeSection = section;
		
		var targetPos = $(base.activeSection).position().top;
		animateTo({ position: (targetPos - base.headerHeight) });
		base.animateHeaderColor();
	};
	this.scrollToBottom = function () {
		var base = this;
		
		var prevSection = base.activeSection;
		setTimeout(function() {
			base.resetActiveSection(prevSection);
		}, 1000);
		base.activeSection = base.sectionsEl.last();
		
		var targetPos = $(base.activeSection).position().top;
		animateTo({ position: (targetPos - base.headerHeight + base.footerHeight) });
		base.animateHeaderColor();
	};
	
	this.animateHeaderColor = function () {
		var headerBackgroundColor = $(this.activeSection).attr('data-header-bg-color');
		var headerColor = $(this.activeSection).attr('data-header-color');
		this.headerEl.animate({
			'background-color': headerBackgroundColor,
			'color': headerColor
		}, 1000, $.bez([0.7,0.1,0.3,0.9]));
	};
	
	
	
};
