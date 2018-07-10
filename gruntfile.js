module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            develop: {
                options: {
                    sourcemap: true /** Immer auf die Schreibweise achten, bei der options Liste im Plugin gucken**/
                },
                files: {
                    'develop/css/main.css': 'develop/sass/main.scss' /*** erst Ziel, dann Quelle ***/
                }
            },
            distribution: {
                options: {
                    sourcemap: true,
                    style: 'compressed'
                },
                files: {
                    'distribution/css/main.css': 'develop/sass/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['develop/sass/**/*.scss'],
                tasks: ['sass:develop']
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');/** Immer auf die Schreibweise achten, ob du hier das richtige Plugin aufrufts ***/
    grunt.loadNpmTasks('grunt-contrib-watch');/** registriert automatisches Aktualsieren ***/


    grunt.registerTask('default', ['sass']); /** ruft alle Konfigurationen des Plugins sass auf**/
    grunt.registerTask('deployment', ['sass:distribution']);/** ruft nur die Config fürs Deployment auf ***/

}