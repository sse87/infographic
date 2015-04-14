


$(document).ready(function () {
	
	var base = $('<section></section>', {
		'id': 'yellow',
		'data-header-bg-color': '#EF6C00',// Orange: 800
		'data-header-color': '#FFF3E0'
	}).appendTo('.main-content');
	
	$('<div></div>', {
		'class': 'nextSectionArrow',
		'html': '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" fill="rgba(0,0,0,0.5)"/><path d="M0-.75h24v24h-24z" fill="none"/></svg>'
	}).appendTo(base);
	
	var wrapper = $('<div></div>', { 
		'class': 'limit limit-body' 
	}).appendTo(base);

	$('<h1 class="yellow-title">Welcome back, survivor.</h1>').appendTo(wrapper);
	$(
		'<div class="subtext-body">' + 
			'<p>A lot of things have happened since your last visit, survivor. Here are some general statistics about the current situation.</p>' + 
		'</div>' + 
		'<div class="chart-body">' + 
			'<div class="chart-container">' + 
				'<div class="chart-title">' + 
					'<h3>Human causes of death</h3>' + 
				'</div>' + 
				'<div class="chart-wrapper chart-wrapper-bar">' + 
					'<canvas id="chart-bar-1"></canvas>' + 
				'</div>' + 
			'</div>' + 
			'<div class="chart-container chart-container-middle">' + 
				'<div class="chart-title">' + 
					'<h3>Zombie population</h3>' + 
				'</div>' + 
				'<div class="chart-wrapper">' + 
					'<canvas id="chart-bar-middle"></canvas>' + 
				'</div>' + 
			'</div>' + 
			'<div class="chart-container chart-container-pie">' + 
				'<div class="chart-title">' + 
					'<h3>Human deaths by continent</h3>' + 
				'</div>' + 
				'<div class="chart-wrapper chart-wrapper-pie">' + 
					'<div class="pie-center">' + 
						'<span>64%</span>' + 
						'<span> left</span>' + 
					'</div>' + 
					'<canvas id="chart-pie-1"></canvas>' + 
				'</div>' + 
				'<div id="legend"></div>' + 
			'</div>' + 
		'</div>'
	).appendTo(wrapper);
	
	
	
});




