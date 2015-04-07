
/*JS Lint helpers: */
/*global $ */
/*jslint unused:false */

// This is to encapsulate the progress element and functionality
var Progress = function () {
	
	this.progressWrapperEl = null;
	this.progressEl = null;
	
	var hasInit = false;
	var m_Progress = 0;
	
	this.setProgress = function (progress) {
		if (progress >= 0 && progress <= 1) {
			m_Progress = progress;
			if (hasInit === false) {
				this.init();
			}
			this.animateBar();
		}
	};
	this.getProgress = function () {
		return m_Progress;
	};
	
	this.animateBar = function () {
		$(this.progressEl).css('width', (m_Progress * 100) + '%');
	};
	
	this.init = function () {
		// Wrapper
		this.progressWrapperEl = $('<div class="progress-wrapper"></div').css({
			'background-color': 'transparent',
			'bottom': '0',
			'height': '10px',
			'position': 'absolute',
			'width': '100%'
		}).appendTo('html > body > header');
		// Progress bar
		this.progressEl = $('<div class="progress"></div>').css({
			'background-color': '#E65100',
			'height': '10px',
			'transition': 'width 1s cubic-bezier(0.7,0.1,0.3,0.9) 0s',
			'width': '0%'
		}).appendTo(this.progressWrapperEl);
		// Init flag
		hasInit = true;
	};
	
};
