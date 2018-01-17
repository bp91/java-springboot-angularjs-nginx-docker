module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n'
			},
			dist: {
				src: [
					'src/main/resources/static/js/*.js',
					'src/main/resources/static/js/angularjs/controller/*.js'
				],
				dest: 'src/main/resources/static/applicationScripts.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'src/main/resources/static/applicationScripts.min.js': [ 'src/main/resources/static/applicationScripts.js' ]
				}
			}
		},
		less: {
			all: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					'src/main/resources/static/css/theme.css': 'src/main/resources/static/css/less/theme.less'
				}
			}
		},
		copy: {
			html: {
				files: [
					{
						expand: true,
						cwd: 'src/main/resources/templates/html/',
						src: ['**'],
						dest: 'src/main/resources/static/templates/'
					}
				]
			},
			html_index: {
				files: [
					{
						expand: true,
						cwd: 'src/main/resources/templates',
						src: ['*.html'],
						dest: 'src/main/resources/static/templates/'
					}
				]
			}
		},
		watch: {
			less: {
				files: [
					'src/main/resources/static/css/less/*.less'
				],
				tasks: [ 'less:all' ],
				options: {
					nospawn: true
				}
			},
			js: {
				files: ['src/main/resources/static/js/**/*.js'],
				tasks: ['concat', 'uglify']
			},
			html: {
				files: ['src/main/resources/templates/html/*.html'],
				tasks: ['copy:html']
			},
			html_index: {
				files: ['src/main/resources/templates/*.html'],
				tasks: ['copy:html_index']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', [ 'concat', 'uglify', 'less', 'copy' ]);
};
