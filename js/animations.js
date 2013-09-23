// Based on http://www.creativebloq.com/css3/getting-css-animations-trigger-1132906

// Animatie, using CSS properties, when an element comes into the browser viewport

// Using Modernizr, check if the browser supports CSS animation
if (Modernizr.csstransitions) {
	// Browser supports CSS animation
	// load in the CSS animation file
	document.write('<link rel="stylesheet" href="css/animation.css">');

	// Function to set a staggered delay on the animation
	// Giving it a nice delayed CSS animation per item
	$.fn.trans = function () {
		var t = arguments[0],
			d = arguments[1] || '';
		if (t) {
			$.each(this, function (i, e) {
				$(['-webkit-', '-moz-', '-o-', '-ms-', '']).each(function (i, p) {
					$(e).css(p + 'transition' + d, t);
				});
			});
		}
	};	
	
	// When this (usually parent) element comes into the browser viewport (using a percentage of the parent)
	// per child item set the animation delay and remove the 'animateBegin' class
	// then CSS automatically starts to animate its CSS properties (see animations.css)
	$('#blocks').appear({
		once: true,
		percentage: 30,
		appear: function () {
			var delay = 250,
				stagger = 800,
				sequential_delay = stagger * parseInt($(this).data('delay')) || 0;

			$(this).children().each(function (i, e) {
				$(e).trans(i * delay + sequential_delay + 'ms', '-delay');
			});
			$(this).removeClass('animateBegin');
		},
		forEachVisible: function (i, e) {
			$(e).data('delay', i);					
		}
	});
}