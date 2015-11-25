module.exports = {
    images: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.img %>/',
            src: ['**/*.{png,jpg}'],
            dest: '<%= paths.dest.img %>/'
                }]
    }
};