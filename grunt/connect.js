module.exports = {
    server: {
      options: {
        protocol: 'http',
        port: 8081,
        base: '<%= paths.dest.root %>',
         keepalive: true
      }
    }
 }