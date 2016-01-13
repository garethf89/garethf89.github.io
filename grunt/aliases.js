module.exports = function (grunt) {

    grunt.registerTask('default', ['concurrent']);
    
    grunt.registerTask('build', ['cssmin', 'newer:imagemin']);
        
};