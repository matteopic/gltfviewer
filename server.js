var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect()
// Web Server Root
app.use(serveStatic(__dirname ))

// Map special paths
app.use("/js/assets.js", serveStatic(__dirname + '/target/www/js/assets.js'))
app.use("/css/assets.css", serveStatic(__dirname + '/target/www/css/assets.css'))

var server = app.listen(80, function(){
  console.log('Server running on port 80');
  console.log('Open browser to http://localhost/');
});