const express = require("express");
const {
  getAllActions,
} = require("../controllers/action");

const router = express.Router();

router.get("/", getAllActions);


module.exports = router;
