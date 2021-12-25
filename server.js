/** @format */

require('dotenv').config()
const http = require('http')
const app = require('./app/app')

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`)
})
