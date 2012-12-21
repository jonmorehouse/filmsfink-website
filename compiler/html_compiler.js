/*******

	NOTES:
		This script is to compile jade templates into html and append to the proper pages
		For new projects, validate the variables in compile namespace
		To deploy, look at the options object-literal in generate_html--can change pretty to false for cleaner html
		
******/

exports.compile = (function() {
	
	var fs = require('fs'),
		jade = require('jade');

	var	root_path = require('path').dirname(require.main.filename) + "/",
		destination_path = root_path + "live/",
		data_path = root_path + "data/",
		template_path = root_path + "resources/templates/";

	var save_html = function(data, current) {

		var template_list = data.template_list,
			page = data.page,
			output = data.output;	

		if (typeof(current) === "undefined") current = 0;

		var next = function() {

			current++;

			if (current == template_list.length) return true;

			else return save_html(data, current);
		}

		var write_html = function(html) {

			var log = fs.createWriteStream(output, {'flags': 'a'});
			// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
					
			log.write(html);

			return next();
		
		}

		var generate_html = function(template, template_data) {

			var jade_template_compile_options = {self: false, locals: template_data, pretty: true};
				
			var fn = jade.compile(template, jade_template_compile_options);


			var html = fn(template_data);

			write_html(html);
		}

		var get_template = (function() {


			var template_file = template_path + template_list[current] + ".jade";

			// get the template string!
			fs.readFile(template_file, 'utf8', function(err, template) {

				if (err) return next();

				else {
					var template_data = require(data_path + template_list[current] + ".json");
					generate_html(template, template_data);
				}
			});

		}());
	}



	var compile = function(page, template_list) {

		//clear the html file
		var final_path = destination_path + page + ".html";

		fs.exists(final_path, function(exists) {

			// MAKE SURE FILE IS CLEAR SO WE CAN OPEN IT FOR APPENDING
			fs.writeFile(final_path, "", function(error) {

				// if no error, we need to generate all of the html for this page and append it into it!
				if (!error) {
					var data = {'page': page, 'output': final_path, 'template_list': template_list};
					save_html(data);
				}
			});
		});
	}

	return compile;

}());

