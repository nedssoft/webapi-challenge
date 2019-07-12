const express = require('express')
const { getAllProjects, createNewProject } = require('../controllers/project')
const { addProjectValidator } = require('../middlewares')
const router = express.Router()

router.get('/', getAllProjects)
router.post('/', addProjectValidator,createNewProject)
module.exports = router;
