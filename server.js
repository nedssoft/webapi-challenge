const express = require('express')
const { errorHandler } = require('./middlewares')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello API')
})
app.use('/api', routes)
app.use(errorHandler)
module.exports = app