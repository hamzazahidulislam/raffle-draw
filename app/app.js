/** @format */

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use([morgan('dev'), cors(), express.json()])

app.get('/_ah/health', (_req, res) => {
  res.status(200).send('ok')
})

app.use('/', require('./routes'))

module.exports = app
