var exports = (module.exports = {});
var routes = require('./routes/routesGet.js');
var helper = require('./helper.js');

exports.handleGet = function(req, res) {
  let route = helper.parseRoute(req.url);

  switch (route) {
    case '/help':
      routes.help(res);
      break;
    case '/allCustomers':
      routes.allCustomers(res);
      break;
    case '/customer':
      routes.customer(res, req);
      break;
    default:
      routes.getDefault(res);
      break;
  }
};
