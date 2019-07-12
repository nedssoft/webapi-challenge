const express = require('express')
const projectRoutes = require('./project')

const router = express.Router()

router.use('/projects', projectRoutes)

module.exports = router;