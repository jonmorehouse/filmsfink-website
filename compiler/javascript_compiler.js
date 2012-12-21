/*
	This Module is going to be responsible for compiling javascript in the correct order into a minified js file
*/
var fs = require('fs'),
	root_path = require('path').dirname(require.main.filename) + "/",
	yuicompressor = require('yuicompressor');

exports.compile = (function() {

	var destination_file;

	var compress = function() {
		/*
		try {
			return yuicompressor.compress(destination_file, {

				charset: 'utf8',
				type: 'js',

			}, function(err, file_data, extra) {

				if (!err) {

					fs.writeFile(destination_file, file_data, 'utf8', function(err) {

						if (err) console.log("Compressed file not written properly");

					});//end of compress function
				}

				else console.log("JAVASCRIPT DID NOT VALIDATE!");
			});

		} catch (error) {

			console.log("Javascript Compression did not work properly");
			return true;
		} 
		*/

		return true;
		
	}

	var compile = function(file_list, current) {

		if (typeof(current) === "undefined") current = 0;

		var next = function () {

			current++;

			if(current == file_list.length) return compress();

			else return compile(file_list, current);
		}	

		var write = function(file_data) {

			var log = fs.createWriteStream(destination_file, {'flags': 'a'});//open file to be appended!

			log.write(file_data);

			return next();
		}

		var file_path = root_path + file_list[current];

		var file_data = fs.readFileSync(file_path, 'utf8');

		return write(file_data);

	}
	
	return function(output, file_list) {

		destination_file = root_path + output;

		return fs.writeFile(destination_file, "", 'utf8', function(err) {

			if(!err) return compile(file_list);

			else return true;

		});
	};

}());