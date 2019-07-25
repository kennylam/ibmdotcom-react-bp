module.exports = (app) => {
  // forward 404 to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    err.message = 'Not Found';
    next(err);
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.log(err);
    const error = {
      status: err.status || err.code || 500,
      error: err.error || err.message,
    };
    res.status(error.status).json(error);
  });
};

