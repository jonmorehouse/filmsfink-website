Project.Modules.header = function() {

	var header_animate = (function() {

			var container = $('#header').children('div'),
				css_data = {
					'top': [-200, 20],
					'left': [-200, -100],
					'rotation': [-30, 15]
				},
				animation_length = 800,
				intervals = 100;//this is the number of intervals that we run

			var animate = function(counter) {

				if (typeof(counter) === "undefined") counter = 0;

				var next = function() {

					counter++;

					var delay = animation_length / intervals;
					if (counter <= intervals) return setTimeout(function() {

						animate(counter);

					}, delay);

					else return true;
					
				}

				var _top = css_data.top[0] + ((css_data.top[1] - css_data.top[0]) / intervals * counter);
				var _left = css_data.left[0] + ((css_data.left[1] - css_data.left[0]) / intervals * counter);
				var _rotation = css_data.rotation[0] + ((css_data.rotation[1] - css_data.rotation[0]) / intervals * counter);

				container.css({
					top: _top + "px",
					left: _left + "px",
					WebkitTransform: "rotate(" + _rotation + "deg)",
					'-moz-transform' : "rotate(" + _rotation + "deg)"
				}, next());
			}

			animate();//initiate the self running function
		}());

};