'use strict';

var vogels = require('vogels');
var path = require('path');

vogels.AWS.config.loadFromPath(path.resolve(".") + '/credentials.json');

module.exports = vogels;