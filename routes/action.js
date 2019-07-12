const express = require("express");
const { getAllActions, createNewAction, deleteAction } = require("../controllers/action");
const { addActionValidator, validateProjectId } = require("../middlewares");

const router = express.Router();

router.get("/", getAllActions);
router.post(
  "/:id/project",
  validateProjectId,
  addActionValidator,
  createNewAction
);
router.delete("/:id", deleteAction);


module.exports = router;
