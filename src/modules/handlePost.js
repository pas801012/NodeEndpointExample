var exports = (module.exports = {});
exports.AddNumber = function(a, b) {
  return a + b;
};

exports.insertData = function(params) {
  if (params.filter(x => x != null).length === 3) {
    // insertMyData(params);
  }
};

// function insertMyData(params) {
//   var sqlite3 = require('sqlite3').verbose();
//   var db = new sqlite3.Database('./temHum.db');
//   db.serialize(function() {
//     db.run(
//       // "INSERT INTO tempHumData ( sensor, timestamp, temperature, humidity)\
//       'INSERT INTO tempHumData ( sensor, temperature, humidity)\
//        VALUES (?, ?, ?)',
//       params,
//       function(err) {
//         if (err) {
//           console.log('ERROR: ', err);
//         }
//       }
//     );
//   });
//   db.close();
// }
