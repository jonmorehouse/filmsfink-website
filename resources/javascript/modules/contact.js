Project.Modules.contact = function(form) {

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


};