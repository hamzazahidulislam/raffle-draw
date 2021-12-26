/** @format */

const router = require('express').Router()
const db = require('../db/db')

/**
 * find ticket by id
 * @api {get} /api/v1/tickets/t/:ticketId find ticket by id
 */
router.get('/t/:ticketId', (req, res) => {
  const ticketId = req.params.ticketId
  const ticket = db.findById(ticketId)
  if (ticket) {
    res.status(200).json(ticket)
  } else {
    res.status(404).send('Ticket not found')
  }
})

/**
 * update ticket by ticketId
 * @api {patch} /api/v1/tickets/t/:ticketId update ticket by ticketId
 */
router.patch('/t/:ticketId', (req, res) => {
  const ticketId = req.params.ticketId
  const ticket = db.updateById(ticketId, req.body)
  if (ticket) {
    res.status(200).json({ message: 'Updated ticket successfully', ticket })
  } else {
    res.status(404).send('Ticket not found')
  }
})

/**
 * delete ticket by ticketId
 * @api {delete} /api/v1/tickets/t/:ticketId delete ticket by ticketId
 */
router.delete('/t/:ticketId', (req, res) => {
  const ticketId = req.params.ticketId
  const ticket = db.deleteById(ticketId)
  if (ticket) {
    res.status(203).send('Deleted ticket successfully')
  } else {
    res.status(404).send('Ticket not found')
  }
})

/**
 * find tickets for a given username
 * @api {patch} /api/v1/tickets/u/:username find tickets for a given username
 */
router.get('/u/:username', (req, res) => {
  const username = req.params.username
  const tickets = db.findByUsername(username)
  if (tickets) {
    res.status(200).json(tickets)
  } else {
    res.status(404).send('Tickets not found')
  }
})

router.patch('/u/:username', () => {})
router.delete('/u/:username', () => {})

/**
 * create new ticket
 * @api {post} /api/v1/tickets/sell create new ticket
 */
router.post('/sell', (req, res) => {
  console.log(req.body)
  const { username, price } = req.body
  const ticket = db.create(username, price)
  res.status(201).json({ message: 'Ticket created Successfully', ticket })
})

/**
 * bull create new tickets
 * @api {post} /api/v1/tickets/bulk bull create new tickets
 */
router.post('/bulk', (req, res) => {
  const { username, price, quantity } = req.body
  const ticket = db.bulkCreate(username, price, quantity)
  res.status(201).json({ message: 'Bulk Ticket created Successfully', ticket })
})

/**
 * bull create new tickets
 * @api {get} /api/v1/tickets/bulk bull create new tickets
 */
router.get('/draw', (req, res) => {
  const winnersCount = req.query.wc ?? 3
  const winners = db.draw(winnersCount)
  res.status(200).json({ message: 'Ticket drawn Successfully', winners })
})

/**
 * find all tickets
 * @api {get} /api/v1/tickets find all tickets
 */
router.get('', (req, res) => {
  const tickets = db.find()
  res.status(200).json({ message: 'Tickets found Successfully', tickets })
})

// router.route('/t/:ticketId').get(()={}).patch(()={}).delete(()={})

module.exports = router
