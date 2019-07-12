const express = require("express");
const {
  getAllProjects,
  createNewProject,
  updateProject
} = require("../controllers/project");
const { addProjectValidator, validateProjectId } = require("../middlewares");
const router = express.Router();

router.get("/", getAllProjects);
router.post("/", addProjectValidator, createNewProject);
router.put("/:id", validateProjectId, addProjectValidator, updateProject);

module.exports = router;
