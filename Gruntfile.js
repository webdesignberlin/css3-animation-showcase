	/*
	 * Generated on 2014-02-24
	 * generator-prototype v0.4.20
	 * 
	 *
	 * Copyright (c) 2014 Sebastian Fitzner
	 * Licensed under the MIT license.
	 */

	'use strict';

	// # Globbing
	// for performance reasons we're only matching one level down:
	// '<%= config.src %>/templates/pages/{,*/}*.hbs'
	// use this if you want to match all subfolders:
	// '<%= config.src %>/templates/pages/**/*.hbs'

	module.exports = function(grunt) {

	  // measures the time each task takes
	  require('time-grunt')(grunt);

	  var options = {
            // Project settings
            config : {
				// in this directory you can find your grunt config tasks
                src: "helpers/_grunt/*.js"
            },
            paths: {
                // Configurable paths
                src: 'resources',
                helper: 'helpers',
                dist: '_output'
            },
            ports : {
                app : '9000',
                test : '9001',
                livereload : 35729
            }
        };

        // Load grunt configurations automatically
        var configs = require('load-grunt-configs')(grunt, options);

        // Define the configuration for all the tasks
        grunt.initConfig(configs);

	  // Load Tasks
	  
	  grunt.loadNpmTasks('assemble'); 
	  grunt.loadNpmTasks('grunt-newer');
	  grunt.loadNpmTasks('grunt-htmlhint');
	  grunt.loadNpmTasks('grunt-prettysass');
	  grunt.loadNpmTasks('grunt-bg-shell');
	  grunt.loadNpmTasks('grunt-sync');
	  grunt.loadNpmTasks('grunt-contrib-clean');
	  grunt.loadNpmTasks('grunt-contrib-connect');
	  grunt.loadNpmTasks('grunt-concurrent');
	  grunt.loadNpmTasks('grunt-contrib-cssmin');
	  grunt.loadNpmTasks('grunt-contrib-watch'); 
	  
	  grunt.loadNpmTasks('grunt-grunticon'); 
	  grunt.loadNpmTasks('grunt-packager'); 
	  grunt.loadNpmTasks('grunt-combine-media-queries'); 
	  grunt.loadNpmTasks('grunt-bless'); 
	  grunt.loadNpmTasks('grunt-autoprefixer'); 
	  grunt.loadNpmTasks('grunt-contrib-compass'); 
	  grunt.loadNpmTasks('grunt-devtools'); 
	  
	 // Simple Tasks
	 
		grunt.registerTask('icons', [
			'grunticon'
		]); 
		grunt.registerTask('js', [
			'packager'
		]); 
		grunt.registerTask('css', [
			'compass:dist'
		]);
	  
		grunt.registerTask('cssDev', [
	        'bgShell:devCompass'
	    ]);
	    grunt.registerTask('watchCSS', [
	        'bgShell:watchCompass'
	    ]);
	    grunt.registerTask('cssProd', [
	        'bgShell:prodCompass'
	    ]);
		grunt.registerTask('watchJS', [
			'sync:js'
		]);
		grunt.registerTask('check-html', [
			'htmlhint'
		]);
		grunt.registerTask('prettyscss', [
			'prettysass'
		]);

	// Advanced Tasks
	  grunt.registerTask('server', [
		'concurrent:rendering',
		'concurrent:syncing',
	    'watchCSS',
	    'connect:livereload', 
	    'watch'
	  ]);

	  grunt.registerTask('build', [
	    'clean',
		'js',
		'concurrent:syncing',
	    'cssProd',
		'cmq',
		'autoprefixer',
		'cssmin',
		'bless', 
		'concurrent:build'
	  ]);

	  grunt.registerTask('default', [
	    'server'
	  ]);

	};
