// var fileUtil = require('../fileUtil.js');
// var readFile = fileUtil.readFile;
// const JSONFILE = 'src/customers.json';

module.exports = {
  getDefault: function(req, res) {
    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      // var POST = qs.parse(body);
      // console.log('postBody', POST);
      console.log('body', JSON.parse(body));
    });

    // //redirect all other url paths to the help path
    // res.writeHead(302, { Location: '/help' });
    // res.end();
  }
};
