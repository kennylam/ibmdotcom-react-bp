const spawn = require('cross-spawn');
const server = require('../server/server');

const client = spawn('./node_modules/react-scripts/bin/react-scripts.js', ['start'], {
  env: Object.assign({}, process.env, {
    REACT_APP_SERVER: 'http://localhost:5000',
  }),
  stdio: 'inherit',
});

client.on('error', (error) => {
  // esling-disable-next-line no-console
  console.log(`ERROR: ${error}`);
  server.close();
});

client.on('close', () => {
  server.close();
});

