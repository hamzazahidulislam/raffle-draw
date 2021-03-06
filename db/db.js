/** @format */

const Ticket = require('../models/Ticket')

class MyDB {
  constructor() {
    this.tickets = []
  }

  /**
   * cretae and save a new Ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} returns a new Ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price)
    this.tickets.push(ticket)
    return ticket
  }

  /**
   * create a multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Ticket[]} returns an array of Ticket objects
   */
  bulkCreate(username, price, quantity) {
    const result = []
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price)
      result.push(ticket)
    }
    return result
  }

  /**
   * returns available tickets
   * @returns {Ticket[]} returns an array of Ticket objects
   */
  find() {
    return this.tickets
  }

  /**
   * find tickets by ticket id
   * @param {string} ticketId
   * @returns {Ticket} returns a Ticket object
   */
  findById(ticketId) {
    return this.tickets.find((ticket) => ticket.id === ticketId)
  }

  /**
   * find all tickets for a given user
   * @param {string} username
   * @returns {Ticket[]} returns an array of Ticket objects
   */
  findByUsername(username) {
    return this.tickets.filter((ticket) => ticket.username === username)
  }

  /**
   * update ticket
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @return {Ticket} returns a Ticket object
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId)
    if (ticket) {
      ticket.updateAt = new Date()
      Object.assign(ticket, ticketBody)
      return ticket
    }
  }

  /**
   * delete a ticket
   * @param {string} ticketId
   * @return {boolean} Boolean
   */
  deleteById(ticketId) {
    const ticket = this.findById(ticketId)
    if (ticket) {
      this.tickets = this.tickets.filter((t) => t.id !== ticketId)
      return true
    }
    return false
  }

  /**
   * find winners
   * @param {number} winnerCount
   * @return {Ticket[]} returns an array of Ticket objects
   */
  draw(winnerCount) {
    let winnerIndexs = new Array(winnerCount)

    let index = 0
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length)
      console.log('winnerIndex: ', winnerIndex)
      if (!winnerIndexs.includes(winnerIndex)) {
        winnerIndexs[index++] = winnerIndex
        continue
      }
    }

    const winner = winnerIndexs.map((index) => this.tickets[index])
    return winner
    // const tickets = this.find()
    // const winners = []
    // while (winners.length < winnerCount) {
    //   const winner = tickets.splice(
    //     Math.floor(Math.random() * tickets.length),
    //     1
    //   )[0]
    //   winners.push(winner)
    // }
    // return winners
  }
}

const myDB = new MyDB()
module.exports = myDB
