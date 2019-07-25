#! /usr/bin/env node

const app = require('./index');

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port: %d', port);
});

module.exports = server;

