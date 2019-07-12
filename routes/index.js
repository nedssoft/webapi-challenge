const express = require('express')
const projectRoutes = require('./project')
const actionRoutes = require('./action')

const router = express.Router()

router.use('/projects', projectRoutes)
router.use('/actions', actionRoutes)

module.exports = router;