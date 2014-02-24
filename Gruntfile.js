/*
 * Generated on 2014-02-24
 * generator-prototype v0.4.9
 * https://github.com/Prototype-Group/generator-prototype
 *
 * Copyright (c) 2014 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

// Timer
var timer = require("grunt-timer");

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  // init timer
  timer.init(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'resources',
      dist: '_output'
    },
	
	bgShell: {
        _defaults: {
             bg: true
        },

        watchCompass: {
            cmd: 'compass watch'
        }, 
		
        devCompass: {
			bg: false,
            cmd: 'compass watch'
        }, 
		
		prodCompass: {
			bg: false,
			cmd: 'compass compile -e production --force'
		}
    },
	
	'grunticon-sass': {
			icons: {
				options: {
					src: '<%= config.src %>/img/svg/icons',
					dest: '<%= config.src %>/scss/icons',

					datasvgcss: "_icons.data.svg.scss",
					datapngcss: "_icons.data.png.scss",
					urlpngcss: "_icons.png.scss",

					previewhtml: false,
					loadersnippet: false,

					pngcrush: false,
					pngfolder: "../../../img/png_icons/",
					pngPath: '<%= config.dist %>/img/png_icons/',

					pseudoselectors: true,
					oneimport: false
				}
			}
		}, 
	'svg-sprites': {
		options: {
		  paths: {
					spriteElements: "<%= config.src %>/img/svg",
					sprites: "<%= config.dist %>/img/sprites",
					css: "<%= config.src %>/scss/icons"
				},
		  sizes: {
			large: 125,
			medium: 100,
			small: 50
		  },
		  refSize: "medium",
		  unit: 5,
		  cssSuffix: "scss",
		  prefix: "_icon"
		},
	}, 
	  compass: {
          dist: {
              options: {
                  config: 'config.rb',  // css_dir = 'dev/css'
                  cssDir: '<%= config.dist %>/css'
              }
          }
      }, 
	packager: {
		default: {
			options: {
				config: '<%= config.src %>/js/project.jspackcfg',
				cwd: '<%= config.src %>/js/'
			}
		}
	},  
      htmlhint: {
          all: {
              options: { // Want to know what configurations are available? http://htmlhint.com/
				htmlhintrc: '.htmlhintrc'
			  },
              src: ['<%= config.dist %>/*.html']
          }
      },   
      prettysass: {
            options: {
                alphabetize: true,
                indent: "t"
            },
            scss: {
                src: [
				'<%= config.src %>/scss/drupal/**/*.scss',
				'<%= config.src %>/scss/global/**/*.scss',
				'<%= config.src %>/scss/icons/**/*.scss',
				'<%= config.src %>/scss/modules/**/*.scss',
				'<%= config.src %>/scss/utils/**/*.scss',
				]
            }
        },
	  
	sync: {
		js: {
			files: [
				  // includes files within path and its sub-directories
				  {
					cwd: 'resources/js',
					src: '**/*.js', 
					dest: '_output/js'
				  }
			]
		}
	},
	concurrent: {
        rendering: {
            tasks: ['assemble', 'sync:js'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
    watch: {
      assemble: {
        files: ['<%= config.src %>/{data,templates}/**/{,*/}*.{md,hbs,yml,json}'],
        tasks: ['assemble']
      },
	  js: {
			files: '<%= config.src %>/js/{,*/}*.js',
			tasks: 'sync:js'
	  },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/css/{,*/}*.css', // if you want to use browser-sync for css just comment out this line
          '<%= config.dist %>/js/{,*/}*.js',
          '<%= config.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= config.dist %>/media/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
		scss: {
			files: ['/scss/{,*/}*.scss']
		}
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },
	
    assemble: {
		options: {
            flatten: true,
            assets: '<%= config.dist %>',
            data: '<%= config.src %>/data/*.{json,yml}',
            helpers: '<%= config.src %>/helpers/*.js',
            partials: '<%= config.src %>/templates/partials/**/*.hbs'
        },
		pages: {
			options: {
				layout: '<%= config.src %>/templates/layouts/tpl_default.hbs',
				plugins: ['assemble-contrib-sitemap','assemble-related-pages'],
			},
			files: {
				'<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
			}
		},
		ajax: {
            options: {
                layout: '<%= config.src %>/templates/layouts/tpl_ajax.hbs'
            },
            files: {
				'<%= config.dist %>/ajax-content/': ['<%= config.src %>/templates/pages/ajax/*.hbs']
            }
        }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml,js}']
	
  });

  // Load Tasks
  
  grunt.loadNpmTasks('assemble'); 
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.loadNpmTasks('grunt-devtools'); 
  grunt.loadNpmTasks('grunticon-sass'); 
  grunt.loadNpmTasks('dr-grunt-svg-sprites'); 
  grunt.loadNpmTasks('grunt-contrib-compass'); 
  grunt.loadNpmTasks('grunt-packager'); 
  grunt.loadNpmTasks('grunt-htmlhint'); 
  grunt.loadNpmTasks('grunt-prettysass'); 
  
 // Simple Tasks
 
	grunt.registerTask('icons', [
		'grunticon-sass'
	]); 
	grunt.registerTask('sprites', [
		'svg-sprites'
	]); 
	grunt.registerTask('css', [
		'compass:dist'
	]);
	grunt.registerTask('js', [
		'packager'
	]); 
	grunt.registerTask('html', [
		'htmlhint'
	]);
	grunt.registerTask('prettyscss', [
		'prettysass'
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

// Advanced Tasks
  grunt.registerTask('server', [
 'concurrent:rendering',
    'watchCSS',
    'connect:livereload', 
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
	'js',
	'watchJS',
	
	'assemble',
    'cssProd',
	'prettyscss'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
