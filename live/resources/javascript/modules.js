/*** NOTES ***/
// t: current time, b: begInnIng value, c: change In value, d: duration

/***** MY CUSTOM EASING FUNCTIONS *****/


/** FOLLOWING FUNCTIONS REWRITTEN FROM: http://gsgd.co.uk/sandbox/jquery/easing/ **/
jQuery.extend( jQuery.easing,
{
	// swing: function (x, t, b, c, d) {
		// return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	// },
	ease_in_quad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	ease_out_quad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	ease_in_out_quad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	
	ease_in_cubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	
	ease_out_cubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	
	ease_in_out_cubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	ease_in_quart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	ease_out_quart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	ease_in_out_quart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	ease_in_quint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	ease_out_quint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	ease_in_out_quint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	ease_in_sine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	ease_out_sine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	ease_in_out_sine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	ease_in_expo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	ease_out_expo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	ease_in_out_expo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	ease_in_circ: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	ease_out_circ: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	ease_in_out_circ: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	ease_in_elastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	ease_out_elastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	ease_in_out_elastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	ease_in_back: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	ease_out_back: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	ease_in_out_back: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	ease_in_bounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	ease_out_bounce: function (x, t, b, c, d) {

		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	ease_in_out_bounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});var Project = (function($, document) {

	var modules = modules || {};

	var pages = pages || {};

	return {

		'pages': pages,
		'Pages': pages,

		'Modules': modules,
		'modules': modules,
	};
	
}(jQuery, document));Project.Modules.header = function() {

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

};/*
	LINK ALL ELEMENTS TOGETHER BY DATA-LINK = 'name'
*/

Project.Modules.scroll = function(container) {

	container.click(function() {

		var link = $(this).attr('data-link').toLowerCase(),
			destination = $('div[data-link="' + link + '"]'),
			scroll_position = destination.position().top,
			difference,
			speed;

	difference = ($(window).scrollTop() - scroll_position);
	
	if (difference < 0) difference *= -1;

	if (difference < 1000) speed = difference*1.4;

	else if (difference < 1500) speed = difference*0.5;

	else speed = difference * 0.3;

	$("html, body").animate(
    	{ scrollTop: scroll_position + "px" }, speed, 'ease_out_bounce');

		// $(window).animate({scrollTop : scroll_position + "px"});
		// $(window).scrollTop(scroll_position);
		window.history.pushState({}, link, "#" + link);

		return false;

	});



};/*
	Bumpbox module is responsibly for handling individual bumpboxes -- will be responsible for self closing etc as well
*/

Project.Modules.bumpbox = function(link, container, initial_animation, final_animation) {


	var status = true,
		visible = false,
		animation_time = 1000,
		temp_clicker_html = "<div id='temp_clicker></div>",//pre-styled so that when it is clicked it will be what we click to get out of this element!
		temp_clicker = $('#temp_clicker');

	(function() {

		// $(document).append(temp_clicker_html);

	}());

	link.click(function() {
			
		if (!visible) {

			initial_animation();//this is the function passed in by calling object

			container.fadeIn(animation_time, function() {

				temp_clicker.fadeIn(animation_time);//this is the temp clicker that when clicked will remove the bumpbox!

			});//fade in the bumpbox

			visible = true;	
		}
	});

	temp_clicker.click(function() {

		container.fadeOut(animation_time, function() {

			temp_clicker.fadeOut(animation_time);
		});//fade out the bumpbox
		final_animation();//run the passed animation
		temp_clicker.fadeOut(animation_time);
		visible=false;
		
	});


	container.find(".exit").click(function() {

		container.fadeOut(animation_time, function(){
			temp_clicker.fadeOut(animation_time);
		});//fade out the bumpbox
		final_animation();//run the passed animation
		visible=false;
		
	});

	container.mouseenter(function() {

		status = true;
	});

	container.mouseleave(function() {

		status = false;
	});


};Project.Modules.contact = function(form) {

	var submission = (function() {


		var data = function() {

			var _data = {};

			_data.destination = form.attr('data-destination');//this is the destination email
			_data.email = form.find('[name="email"]').attr('value');
			_data.sender = form.find('[name="name"]').attr('value');
			_data.message = form.find('[name="message"]').attr('value');


			return _data;
		};

		form.find('input[type="submit"]').click(function() {

			var submission = data(),
				_url = form.attr('action');

			$.ajax({

				type:"POST",
				url: _url,
				data: submission
				
			}).done(function(response) {
				
				var data = $.parseJSON(response);

				if (data.status) {
					form.parent().html("<h1>" + data.message + "</h1>");
					$('html, body').animate({scrollTop: "0px"}, 500, 'ease_out_bounce');
					window.history.pushState({}, link, "#" + link);
				}

				else form.append("<p>" + data.message + "</p>");

			});

			return false;
		});

	}());

	var form_animation = (function() {

		form.find('input[type="text"], textarea').click(function() {

			var initial = $(this).attr('value');

			$(this).attr('value', "");

			$(this).blur(function() {

				if ($(this).attr('value') == "" || $(this).attr('value') == null) $(this).attr('value', initial);
			});
		});


	}());


};/*
	1.) This object is instantiated with a target and destination for all vimeo videos
	2.) This object will dynamically create an iframe and will embed that iframe into the destination section
	3.) This iframe holds the vimeo video
	4.) This object will dynamically create the size of the iframe within the box -- so that it takes up the entire space (expects an iframe already there!) -- can put in checks for that!
*/

Project.Modules.vimeo = function(target, destination) {//this object will take in list of elements that have vimeo attributes

	var data = {

		'target': target, 
		'destination': destination, 
		'iframe': destination.children('iframe')

	};//end of data

	// init is useful for validating the iframe size etc etc
	var init = (function() {//this is run each time a video is implemented--just to reinitialize the elements

		var _data = data;

		_data.height = _data.iframe.height();

		_data.width = _data.iframe.width();

		data = _data;

		return true;

	}());

	var create = function(id) {//

		var _data = data;
		var html = "<iframe src='http://player.vimeo.com/video/" + id + "?badge=0' width='" + _data.destination.width() + "' height='" + _data.destination.height() + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>";
		// html += "<div class='exit'><img src='images/resources/exit.png' /></div>";

		_data.destination.append(html);//actually embed the video! into the div

		return true;
	}

	var stop = function() {

		data.destination.children('iframe').remove();//remove the iframe from the element

	}

	var listen = data.target.click(function() {

		var id = $(this).attr('data-id');

		create(id);

		return true;

	});

	return {

		'stop': stop

	};

};
Project.Pages.home = (function() {

	var vimeo = Project.Modules.vimeo($('#videos > .video'), $('#video_bumpbox'));

	var fade_out = function() {
		// $('#videos, #video_reflections').animate({'opacity': 0.3});
		vimeo.stop();

	}

	var fade_in = function() {

		// $('#videos, #video_reflections').animate({'opacity': 1});
	}


	Project.Modules.bumpbox($('#videos > .video'), $('#video_bumpbox'), fade_in, fade_out);


}());/*
	This is the general form for all the project js submission sections
*/

Project.Pages.project = (function() {

	var contact = Project.Modules.contact($('#contact form'));


}());