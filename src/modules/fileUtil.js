const fs = require('fs');
var exports = (module.exports = {});

//create a function that takes a file path
exports.readFile = function(filePath) {
  return new Promise(function(resolve, reject) {
    //perform the readFile function in the fs node module
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        //reject any errors found
        reject(err);
      } else {
        //parse the file output into JSON
        data = JSON.parse(data);
        //send the data back as promise
        resolve(data);
      }
    });
  });
};
