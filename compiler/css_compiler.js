//modules
var less = require('less');
var fs = require('fs');
var yuicompressor = require('yuicompressor');

var bootstrap_less_path = require('path').dirname(require.main.filename) + "/resources/components/bootstrap/less/";

// compress the final file
var compress = function(file) {

	/*
	try {
		yuicompressor.compress(file, {

			charset: 'utf8',
			type: 'css',

		}, function(err, compressed_css, extra) {

			if (err) console.log(err);

			fs.writeFile(file, compressed_css, 'utf8', function(err) {

				if (err) console.log("Compressed file not written properly");

			});

			return true;

		});
		return true;
	} catch (error) {

		console.log("CSS COMPRESSION DID NOT WORK");
		return true;
	}

	*/

	return true;
}


//compile the individual file into the main file
var compile_less = function(list, output, current) {

	if (typeof(current) === "NULL") current = 0;

	var next = function() {

		current++;

		if (current !== list.length) return compile_less(list, output, current);

		else return compress(output);
	}

	var write = function(css) {

		var log = fs.createWriteStream(output, {'flags': 'a'});
		// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
		log.write(css);
			return next();
	}

	var render = function(file, raw_less, callback) {

		var path = "", 
			pieces = file.split("/");

		for (var i = 0, z = pieces.length -1; i < z; i++)
			path += pieces[i] + "/";

		var render_less = (function() {

			var parser = new(less.Parser)({

				paths: [path, bootstrap_less_path],
				filename: file,
			});

			parser.parse(raw_less, function (err, tree) {

				var css;

				if (!err) {

					try {

						css = tree.toCSS({compress: true});//convert the css 
						callback(css);//write the file now!

					} catch(tree_err) {

						console.log("Error in " + file);
						next();
					}
				}//end of if

				else
					console.log(err);
			});//end of parser
		}());//end of render method

	}

	fs.readFile(list[current], 'utf8', function(err, content) {

		if (!err)
			return render(list[current], content, write);

		else 
			return next();
	});
}

// exported module files
exports.compile = function(list, output) {

	fs.writeFile(output, "", function(error) {

		if(!error) return compile_less(list, output, 0);

		else return true;
	});
}

