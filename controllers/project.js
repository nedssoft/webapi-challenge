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

module.exports ={
  getAllProjects
}
