module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.initConfig({
		uglify:{
			aptions:{
				compress:true,
				report:true,
				//banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			app:{
				files:{
					"public/app.min.js":[
					"public/js/init.js",
					"public/js/backbone/models/article.js",
					"public/js/backbone/collections/articles.js",
					"public/js/backbone/views/article.js",
					"public/js/backbone/views/app.js",
					"public/js/backbone/routers/base.js",
					"public/js/main.js"
					],
					"public/vendors.min.js":[
    				"public/js/vendor/underscore.js",
    				"public/js/vendor/backbone.js",
    				"public/js/vendor/swig.js",
					"public/js/vendor/socket.io.js",
					"public/js/vendor/neon.js",
    				"public/js/vendor/CustomEvent.js",
    				"public/js/vendor/CustomEventSupport.js",
    				"public/js/vendor/PonyExpress.js",
					]
				}
			}
		},
		cssmin:{
			combine:{
				options:{
					report:true,
					compress:true,
					banner:'/*My minified css file*/'
				},
				files:{
					"public/site.min.css":[
						"public/css/normalize.css",
						"public/css/puls4.css"
					]
				}
			}
		}

	});

	grunt.registerTask('default',['uglify','cssmin']);


};