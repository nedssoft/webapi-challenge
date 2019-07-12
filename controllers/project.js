const Project = require("../data/helpers/projectModel");
const { ErrorHandler } = require("../helpers");
//get all projects
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.get();
    if (projects.length) {
      res.status(200).json({
        status: "OK",
        projects
      });
    } else {
      throw new ErrorHandler(404, "No Projects found in the database");
    }
  } catch (error) {
   next(error)
  }
};

const createNewProject = async (req, res, next) => {
  try {
    const project = await Project.insert(req.body);
    if(project) {
      return res.status(201).json({
        status: 'OK',
        project
      })
    } else {
      throw new ErrorHandler(500, 'Error occurred trying to save project')
    }
  } catch (error) {
    next(error)
  }
}
const updateProject = (req, res, next) => {
  
}

module.exports ={
  getAllProjects,
  createNewProject
}
