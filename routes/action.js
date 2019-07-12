const express = require("express");
const { getAllActions, createNewAction, deleteAction, updateAction, getActionById } = require("../controllers/action");
const { addActionValidator, validateProjectId, validateActionId } = require("../middlewares");

const router = express.Router();

router.get("/", getAllActions);
router.post(
  "/:id/project",
  validateProjectId,
  addActionValidator,
  createNewAction
);
router.delete("/:id",validateActionId, deleteAction);
router.put("/:id", validateActionId,addActionValidator, updateAction);
router.get("/:id", validateActionId, getActionById);


module.exports = router;
