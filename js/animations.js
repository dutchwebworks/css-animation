// Animate using CSS when items scroll into view

if (Modernizr.csstransitions) {
	function preloadImages(imgs, callback) {
		var cache = [],
			imgsTotal = imgs.length,
			imgsLoaded = 0;

		$(imgs).each(function (i, img) {
			var cacheImage = document.createElement('img');
			cacheImage.onload = function () {
				if (++imgsLoaded == imgsTotal) callback();
			};
			cacheImage.src = $(img).attr('src');
			cache.push(cacheImage);
		});
	};
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

	document.write('<link rel="stylesheet" href="css/animation.css">');
		
	$(function(){
		//preload images contained within elements that need to animate
		preloadImages($('#blocks .module img'), function () {
			$('#blocks').appear({
				once: true,
				percentage: 30,
				forEachVisible: function (i, e) {
					$(e).data('delay', i);					
				},
				appear: function () {
					console.log('in view!');
					var delay = 250,
						stagger = 800,
						sequential_delay = stagger * parseInt($(this).data('delay')) || 0;

					$(this).children().each(function (i, e) {
						$(e).trans(i * delay + sequential_delay + 'ms', '-delay');
					});
					$(this).removeClass('animateBegin');
				}
			});
		});
	});
}
