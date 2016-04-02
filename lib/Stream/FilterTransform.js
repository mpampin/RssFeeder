'use strict'

const through2 = require('through2');

FilterTransform = through2.obj(function(data, encoding, callback) {

});

FilterTransform.lastSaved = 0;

module.exports = FilterTransform;