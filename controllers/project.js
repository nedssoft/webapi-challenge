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
const updateProject = async (req, res, next) => {
  try {
    const { project, body } = req;
    const updatedProject = await Project.update(project.id, body)
    if (updatedProject) {
      res.status(200).json({
        status: 'OK',
        updatedProject,
        message: 'Project updated successfully'
      })
    } else {
      throw new ErrorHandler(500, 'Error occurred trying to save project')
    }
  } catch (error) {
    next(error)
  }
}
const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleted = await Project.remove(id);
    if (deleted) {
      return res.status(200).json({ message: "Project deleted"})
    } else {
       throw new ErrorHandler(500, 'Internal server error')
    }
  } catch (error) {
    next(error)
  }
}

const getProjectById = (req, res) => {
  const { project } = req
  return res.status(200).json({ message: 'OK', project})
}

const getProjectActions = async (req, res, next) => {
  try {
    const actions = await Project.getProjectActions(req.project.id)
    if(actions.length) {
      return res.status(201).json({
        status: 'OK',
        actions
      })
    } else {
      throw new ErrorHandler(404, 'No action found for the project with specified ID')
    }
  } catch (error) {
    next(error)
  }
}
module.exports ={
  getAllProjects,
  createNewProject,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectActions
}
