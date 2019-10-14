const http = require('http');

var hGet = require('./modules/handleGet.js');
var hPost = require('./modules/handlePost.js');

//Create a http server
http
  .createServer(function(req, res) {
    console.log(req.method, req.url);
    switch (req.method) {
      case 'GET':
        hGet.handleGet(req, res);
        break;
      case 'POST':
        hPost.handlePost(req, res);
        break;
      default:
        break;
    }
  })
  .listen(8080, function() {
    //listen on port 8080
    console.log('server start at port 8080');
  });
