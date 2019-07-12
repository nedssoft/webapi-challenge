const express = require("express");
const { getAllActions, createNewAction } = require("../controllers/action");
const { addActionValidator, validateProjectId } = require("../middlewares");

const router = express.Router();

router.get("/", getAllActions);
router.post(
  "/:id/project",
  validateProjectId,
  addActionValidator,
  createNewAction
);

module.exports = router;
