const request = require("request-promise");

const API_KEY = "f9b38e2276202ab5f6e1590c1856797d";

class Weather {
  static retreiveByCity(city, callback) {
    request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
      json: true
    })
      .then(function(res) {
        callback(res);
      })
      .catch(function(err) {
        console.log(err);
        callback({
          error: "could not reach openweathermap api"
        });
      });
  }
}

module.exports = Weather;
