const logRequest = (req, res, next) => {
  console.log("Terjadi request ke PATH : ", req.path);
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logRequest;
