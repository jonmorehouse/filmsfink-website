/*
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


};