const express = require('express')
const { errorHandler } = require('./middlewares')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello API')
})
app.use(errorHandler)
module.exports = app