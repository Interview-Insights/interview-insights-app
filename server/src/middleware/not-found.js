const notFoundMiddleware = (req, res, next) => {
  return res.send(`Not Found - ${req.originalUrl}`);
};

export default notFoundMiddleware;
