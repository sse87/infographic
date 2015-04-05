module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration
        jshint: {
            files: ['Gruntfile.js', 'js/main.js', 'js/info.js', 'js/util.js', 'js/plugins/*.js', 'js/sections/*.js'],
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                eqnull: true,
                browser: true,
                globals: { jQuery: true },
                boss: true,
                jquery: true
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.files %>',
                tasks: ['jshint']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['jshint','watch']);
};
