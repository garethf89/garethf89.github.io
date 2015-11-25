module.exports = {
    css: {
        files: ['_site/css/main.css'],
        tasks: ['cssmin'],
        options: {
            spawn: false,
            livereload: true
        },
    },
    server: {
    files: ['.rebooted'],
    options: {
      livereload: true
    }
  } 
};