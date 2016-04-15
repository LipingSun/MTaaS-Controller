'use strict';

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const api_v1 = "/api/v1";

var devices = require('./routes/devices');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('/', function (req, res) {
    res.send("MTaaS Controller");
});
app.use(api_v1 + '/devices', devices);


module.exports = app;
