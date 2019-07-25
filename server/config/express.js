const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

module.exports = function demoApp(app) {
  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.static(path.join(__dirname, '..', '..', 'build')));
  app.use(morgan('dev'));

  // ibm cloud?
  if (process.env.VCAP_APPLICATION) {
    require('./security')(app);
  }
};

