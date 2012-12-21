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


}());