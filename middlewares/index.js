
const { handleError, ErrorHandler  } = require('../helpers')

const Project = require('../data/helpers/projectModel')
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

async function validateProjectId(req, res, next) {
  const { id } = req.params;
  if(!id || !Number(id)) {
    next({statusCode: 400, message:"invalid post id" })
  } else {
    const project = await Project.get(id);
    if (project) {
      req.project = project;
      next()
    } else {
      next({statusCode: 404, message:"Project with the specified ID does not exist"})
    }
  }
};

module.exports = {
  errorHandler,
  addProjectValidator,
  validateProjectId
}