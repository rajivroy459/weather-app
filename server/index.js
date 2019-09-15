/**
 * This is a basic express backend
 */

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express(); // basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/cities", require("./api/cities"));
app.use("/api/weather", require("./api/weather"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

db.query("SELECT NOW()", (err, res) => {
  if (err.error) return console.log(err.error);
  console.log(`database connected at ${res[0].now}`);
});

module.exports = app;
