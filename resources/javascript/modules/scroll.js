/*
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



};