const db = require("../database");

class Cities {
  static retreiveAll(callback) {
    db.query("SELECT city_name from cities", function(err, res) {
      if (err.error) return callback(err);
      callback(res);
    });
  }
  static insert(city, callback) {
    db.query("INSERT INTO cities(city_name) values($1)", [city], function(
      err,
      res
    ) {
      if (err.error) return callback(err);
      callback(res);
    });
  }
}

module.exports = Cities;
