const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

module.exports = (app) => {
  app.enable('trust proxy');

  // helmet config
  app.use(helmet({
    cacheControl: false,
    frameguard: false,
  }));

  // rate limits
  app.use('/api', rateLimit({
    windowMs: 60 * 1000,
    delayMs: 0,
    max: 10,
  }));
};

