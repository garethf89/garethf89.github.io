module.exports = function (grunt) {

    grunt.registerTask('default', ["connect", "watch"]);
    
    grunt.registerTask('build', ['cssmin', 'newer:imagemin']);
        
};