var exports = (module.exports = {});
// var qs = require('querystring');
var helper = require('./helper.js');

var routes = require('./routes/routesPost.js');

exports.handlePost = function(req, res) {
  let route = helper.parseRoute(req.url);
  switch (route) {
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
