
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
	this.windowHeight = $(window).height();
	this.sectionHeight = this.windowHeight - this.headerHeight;
	this.sectionsEl = $('.main-content section');
	this.footerPos = $('.main-content section').last().position().top + this.sectionHeight;
	this.windowWidth = $(window).width();
	
	// High priority bug: If user refresh on mid site, has to init the active section
	this.activeSection = this.sectionsEl.first();
	this.activeSectionViewportY = 0;
	
	this.progress = new Progress();
	
	
	
	if (verbose) { console.log('Constructor HERE!'); }
	
	// Initialization
	this.init = function () {
		if (verbose) { console.log('init() BEGINS!'); }
		
		this.autoSectionWidth();
		this.overwriteScroll();
		this.bindResize();
		this.bindKeydown();
		
		this.progress.init();
		
		if (verbose) { console.log('init() ENDS!'); }
	};
	
	this.autoSectionWidth = function () {
		this.sectionsEl.each(function () {
			var maxPosLeft = 0;
			var maxWidth = 0;
			$(this).find('> *').each(function () {
				if (maxPosLeft < $(this).position().left) {
					maxPosLeft = $(this).position().left;
					maxWidth = $(this).width();
				}
			});
			if ($(this).find('> *').length > 0 && (maxPosLeft + maxWidth) > $(this).width()) {
				$(this).css('width', (maxPosLeft + maxWidth));
			}
		});
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
			
			base.activeSectionViewportY += (direction === 'right' ? 1 : -1) * base.windowWidth * defaultSettings.sectionVerticalMoveDistance;
			//console.log('if (' + base.activeSectionViewportY + ' < 0): ' + (base.activeSectionViewportY < 0).toString());
			//console.log('else if (' + base.activeSectionViewportY + ' > ' + (activeSectionWidth - base.windowWidth) + '): ' + (base.activeSectionViewportY > (activeSectionWidth - base.windowWidth).toString()));
			if (base.activeSectionViewportY < 0) {
				base.activeSectionViewportY = 0;
			} else if (base.activeSectionViewportY > (activeSectionWidth - base.windowWidth)) {
				base.activeSectionViewportY = activeSectionWidth - base.windowWidth;
			}
			
			// Move section view
			$(base.activeSection).css('transform', 'translate3d(' + (-1 * base.activeSectionViewportY) + 'px,0,0)');
			
			// Calculate the active section progress
			var maxProgress = activeSectionWidth - base.windowWidth;
			this.progress.setProgress( base.activeSectionViewportY / maxProgress );
			
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
			for (var i = 0; (targetPos === mainWindowTop && i < base.sectionsEl.length); i++) {
				
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
			for (var k = base.sectionsEl.length - 1; (targetPos === mainWindowTop && k >= 0); k--) {
				
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
		base.animateHeaderColor();
	};
	
	this.animateHeaderColor = function () {
		var headerColor = $(this.activeSection).attr('data-header-color');
		console.log('headerColor: ' + headerColor);
		
		this.headerEl.animate({ 'background-color': headerColor }, 1000, $.bez([0.7,0.1,0.3,0.9]));
	};
	
	
	
};
