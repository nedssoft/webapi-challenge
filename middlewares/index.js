
const { handleError } = require('../helpers')
const { ErrorHandler } = require('../helpers')
const errorHandler = (err, req, res, next) => {
  handleError(err, res);
  next();
};

const addProjectValidator = (req, res, next) => {
  try {
    if (!Object.keys(req.body).length ) {
      throw new ErrorHandler(400, 'missing the project information')
    } else {
      const { name, description } = req.body
      if (!name || !description) {
        throw new ErrorHandler(400, 'missing project required project field')
      }
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  errorHandler,
  addProjectValidator
}