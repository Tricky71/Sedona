module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    

    grunt.initConfig({
        less: {
            style: {
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },

        
        
        watch: {
            style: {
              files: ["less/**/*.less"],
              tasks: ["less"],
              options: {
                  spawn: false,
              },
            }				
        }
       
    });

    grunt.registerTask('default', ['less', 'watch']);
}