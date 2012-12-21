/*
	Watch all files and look for changes in the resources directory

	1.) Compile all less files / minify / use the compatibility
	2.) Compile Templates -- Load in variables from an outside source
	3.) Combine Templates
	4.) Compile / Compress Javascript into one asset 
*/

// MODULES TO REQUIRE
var data = require('./data/assets.json'),//assets js is the required data for this page
	watch = require('watch'),
	mu = require('mu2');

var css_compiler = require('./compiler/css_compiler.js'),
	javascript_compiler = require('./compiler/javascript_compiler.js'),
	mustache_compiler = require('./compiler/mustache_compiler.js');
	// html_compiler = require('./compiler/html_compiler.js');

var counter = 0,
	running = false;

var compile = function() {

	running = true;
	counter++;

	var css = (function() {

		var css_output = "live/resources/css/index.css";
		css_compiler.compile(data.less_files, css_output);

	}());

	var html = (function() {
			
		mu.clearCache();//clear the cache for mu rendering -- speed up performance!
			
		for (var page in data.pages) {
			mustache_compiler.compile(page, data.pages[page]);
		}

	}());

	var javascript = (function() {

		var output = "live/resources/javascript/modules.js";

		javascript_compiler.compile(output, data.javascript_modules);

	}());
	
	console.log("Site compiled. Version = " + counter);
	if (process.argv[2] && process.argv[2] === "listen") 
		return setTimeout(function() {
			running = false;
		},4000);

	else return true;

}

/***** SERVER RUNNER ******/
exports.server_compiler = (function() {

	compile();

});


/****** COMMMAND LINE CONTROLLER ******/
if (process.argv[2] && process.argv[2] === "listen") {

	compile();
	
	console.log("Now listening for file changes")

	watch.createMonitor("resources/", function(monitor) {

		monitor.on("changed", function() {

			if (!running) compile();
		});
	});
}

else {

	// console.log("Compiling project");
	compile();

}
