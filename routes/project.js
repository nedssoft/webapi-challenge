const express = require("express");
const {
  getAllProjects,
  createNewProject,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectActions
} = require("../controllers/project");
const { addProjectValidator, validateProjectId } = require("../middlewares");
const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", validateProjectId, getProjectById );
router.get("/:id/actions", validateProjectId, getProjectActions);
router.post("/", addProjectValidator, createNewProject);
router.put("/:id", validateProjectId, addProjectValidator, updateProject);
router.delete("/:id", validateProjectId, deleteProject);


module.exports = router;
