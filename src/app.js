const express = require('express')
const router = require('./routes')
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const errorHandler = require('./utils/errorHandler')

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1', router)

app.use(errorHandler)

module.exports = app