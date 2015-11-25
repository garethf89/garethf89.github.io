module.exports = function (grunt) {

	var data = {
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			src:{
				root:"",
				css:"_site/css",
				scss:"_site/css",
				js:"js",
				img:"images",
                bower: "bower_components",
                testing:"tests",
			},
			dest:{
				root:"_site",
                scss:"_site/css",
				css:"_site/css",
				js:"_site/js",
				img:"images",
			}
		},
        url: "index.html"
	};
    
    
    // measures the time each task takes
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt,{data: data});
};