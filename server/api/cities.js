var express = require("express");
var Cities = require("../models/cities");

var router = express.Router();

router.get("/", function(req, res) {
  Cities.retreiveAll(function(err, cities) {
    if (err) return res.json(err);
    return res.json(cities);
  });
});

router.post("/", function(req, res) {
  city = req.body.city;
  Cities.insert(city, function(err, res) {
    if (err) return res.json(err);
    return res.json(cities);
  });
});

module.exports = router;
