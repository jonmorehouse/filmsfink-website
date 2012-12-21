/*
	1.) Given the page and template list
	2.) We fetch the data for inject

*/
//load in modules

var fs = require('fs'),
	mu = require('mu2');

exports.compile = (function() {

	var data = {};

	var init = (function() {

		data.root_path = require('path').dirname(require.main.filename) + "/";

		data.template_path = data.root_path + "resources/templates/";

		data.data_path = data.root_path + "data/";

		data.destination_directory = data.root_path + "live/"; 

		return true;

	}());

	var save_html = function(page, output, template_list, current) {

		if (typeof(current) === "undefined") current = 0;


		var next = function() {

			current++;

			if (current === template_list.length) return true;//we are done!

			else return save_html(page, output, template_list, current);

		}
		var append = function(html) {

			var log = fs.createWriteStream(output, {'flags': 'a'});

			log.write(html);

			return next();

		}//end of append

		var get_html = function(template_data) {

			var template_file = template_list[current] + ".mustache";

			fs.exists(data.template_path + template_file, function(status) {

				if (status) {

					var html = "";

					try {

						mu.clearCache();
						mu.root = data.template_path;

						stream = mu.compileAndRender(data.template_path + template_file, template_data);

						// use the stream function to read the data into html!
						stream.on('data',  function(data) {
							html += data.toString("utf8");
						});

						stream.on('end', function(data) {
							return append(html);
						});

					} catch (error) {

						console.log("Mustache template errors");
						return next();
					}
				}

				else {
					console.log(template_file + " does not exist.");
					return next();

				}
			});
		}

		var init = (function() {


			var template_file = data.data_path + template_list[current] + ".json",
				template_data;

			fs.exists(template_file, function(status) {

				if(!status) {

					console.log(template_file + " doesn't exist data");
					template_data = {};
				}

				else {
					try {

						template_data = require(template_file);
					
					} catch (error) {	

						console.log(template_list[current] + " doesn't have data");

						template_data = {};
					}
				}

				return get_html(template_data);
			});

			return true;

		}());


	}

	var compile = function(page, template_list) {

		var output_file = data.destination_directory + page + ".html";

		fs.writeFile(output_file, "", function(err) {

				if (!err) 
					save_html(page, output_file, template_list);

				else console.log(output_file + " was not able to be opened for writing.");
		});

		return true;

	}

	return compile;


}());