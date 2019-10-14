var fileUtil = require('../fileUtil.js');
var readFile = fileUtil.readFile;
const JSONFILE = 'src/customers.json';

module.exports = {
  help: function(res) {
    //write a response to send to the client
    res.write('Try localhost:8080/customer?    fname=Elaine&lname=Rushmore');
    res.end();
  },

  allCustomers: function(res) {
    readFile(JSONFILE)
      .then(function(data) {
        res.write(JSON.stringify(data));
        res.end();
      })
      .catch(function(e) {
        console.warn(e.toString());
      });
  },

  customer: function(res, req) {
    //if the user is requesting the customer url path
    //if a query exists find the first and last name from it
    //get the query string from the request url
    let query = req.url.split('?') ? req.url.split('?')[1] : '';
    if (query) {
      let fname = query.split('&')[0].split('=')[1];
      let lname = query.split('&')[1].split('=')[1];
      let name = fname + ' ' + lname;
      let output = 'none';
      //read the json file for customer
      readFile(JSONFILE).then(
        function(data) {
          //loop through all the customers
          for (const customer of data) {
            //check if the customer name in the record  matches the name in the query
            if (customer.name == name) {
              //if they match, set output to be the customer data
              output = customer;
            }
          }
          if (output != 'none') {
            //send the output to the client if a customer was  found
            res.write(JSON.stringify(output));
            res.end();
          } else {
            //send a response to the client if no customer data found
            res.write('no customer data for: ' + name);
            res.end();
          }
        },
        function(err) {
          console.warn('ERROR: incorrect filename or path');
        }
      );
    }
  },

  getDefault: function(res) {
    //redirect all other url paths to the help path
    res.writeHead(302, { Location: '/help' });
    res.end();
  }
};
