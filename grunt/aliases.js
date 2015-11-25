module.exports = function (grunt) {

    grunt.registerTask('default', ["watch"]);
    
    grunt.registerTask('build', ['cssmin', 'newer:imagemin']);
        
};