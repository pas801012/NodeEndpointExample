var exports = (module.exports = {});
var routes = require('./routes/routesGet.js');

exports.handleGet = function(req, res) {
  //get the url string from the request url
  let url = req.url.split('?') ? req.url.split('?')[0] : req.url;
  switch (url) {
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
