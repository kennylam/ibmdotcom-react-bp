const express = require('express');
const path = require('path');

const app = express();
require('./config/express')(app);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// error handling for routes
require('./config/error-handler')(app);

module.exports = app;

