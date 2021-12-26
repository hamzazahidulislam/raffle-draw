/** @format */

const router = require('express').Router()
const db = require('../db/db')

router.use('/api/v1/tickets', require('../routes/ticket'))

module.exports = router
