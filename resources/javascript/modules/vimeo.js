/*
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
