var exports = (module.exports = {});
// var qs = require('querystring');

var routes = require('./routes/routesPost.js');

exports.handlePost = function(req, res) {
  //get the url string from the request url
  let url = req.url.split('?') ? req.url.split('?')[0] : req.url;
  switch (url) {
    // case '/help':
    //   routes.help(res);
    //   break;
    // case '/allCustomers':
    //   routes.allCustomers(res);
    //   break;
    // case '/customer':
    //   routes.customer(res, req);
    //   break;
    default:
      routes.getDefault(req, res);
      break;
  }
};
