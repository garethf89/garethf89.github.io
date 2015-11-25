module.exports = {

    //MINIFY
    original: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.css %>/',
            src: ['main.css'],
            dest: '<%= paths.dest.css %>/',
            ext: '.min.css'
            }]
    },
    sitedir: {
        files: [{
            expand: true,
            cwd: '<%= paths.dest.css %>/',
            src: ['main.css'],
            dest: '<%= paths.dest.css %>/',
            ext: '.min.css'
            }]
    }
};