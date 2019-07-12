
const { handleError } = require('../helpers')

const errorHandler = (err, req, res, next) => {
  handleError(err, res);
  next();
};

module.exports = {
  errorHandler
}