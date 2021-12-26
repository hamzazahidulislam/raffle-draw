/** @format */

require('dotenv').config()
const express = require('express')

const app = express()

app.get('/_ah/health', (_req, res) => {
  res.status(200).send('ok')
})

app.use('/', require('./routes'))

module.exports = app
