/** @format */

const myDB = require('../db/db')
myDB.create('user1', 100)
myDB.create('user2', 100)
myDB.create('user3', 100)
myDB.create('user4', 100)
myDB.create('user5', 100)
myDB.bulkCreate('user5', 100, 10)

const tickets = myDB.find()
console.log('all tickets',tickets));
const winners = myDB.winner(2)
console.log('winners',winners));