module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n'
			},
			dist: {
				src: [
					'src/main/webapp/js/*.js',
					'src/main/webapp/js/angularjs/controller/*.js'
				],
				dest: 'src/main/webapp/js/applicationScripts.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'src/main/webapp/js/applicationScripts.min.js': [ 'src/main/webapp/js/applicationScripts.js' ]
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
					'src/main/webapp/css/theme.css': 'src/main/webapp/css/less/theme.less'
				}
			}
		},
		copy: {
			html: {
				files: [
					{
						expand: true,
						cwd: 'src/main/webapp/html/',
						src: ['**'],
						dest: 'src/main/resources/templates/'
					}
				]
			},
			css: {
				files: [
					{
						expand: true,
						cwd: 'src/main/webapp/css/',
						src: ['**'],
						dest: 'src/main/resources/static/css/'
					}
				]
			},
			js: {
				files: [
					{
						expand: true,
						cwd: 'src/main/webapp/js/',
						src: ['**'],
						dest: 'src/main/resources/static/js/'
					}
				]
			}
		},
		watch: {
			less: {
				files: [
					'src/main/webapp/css/less/*.less'
				],
				tasks: [ 'less:all' ],
				options: {
					nospawn: true
				}
			},
			js: {
				files: ['src/main/webapp/js/**/*.js'],
				tasks: ['concat', 'uglify']
			},
			html: {
				files: ['src/main/webapp/html/*.html'],
				tasks: ['copy:html']
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