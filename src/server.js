console.log("hy there its working!");

var express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/customer');
let db = mongoose.connection;

db.once('open', function () {
  console.log('connected to mongo');
});

db.on('error', function (err) {
  console.log(err);
});


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Method', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});