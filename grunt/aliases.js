module.exports = function (grunt) {

    grunt.registerTask('default', ["watch"]);
    
    grunt.registerTask('build', ['newer:cssmin', 'newer:imagemin']);
        
};