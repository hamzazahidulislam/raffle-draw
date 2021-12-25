const Ticket = require('../models/Ticket');

class MyDB{
    constructor(){
        this.tickets = []
    }

    /**
     * cretae and save a new Ticket
     * @param {string} username 
     * @param {number} price 
     * @returns {Ticket} returns a new Ticket object
     */
    create(username,price){
        const ticket = new Ticket(username,price);
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * create a multiple ticket for a single user
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Ticket[]} returns an array of Ticket objects
     */
    bulkCreate(username,price,quantity){
        const result = [];
        for(let i = 0; i < quantity; i++){
            this.create(username,price);
            result.push(this.tickets[this.tickets.length-1]);
        }
        return result;
    }

    }

    // return all tickets
    find(){

    }

    // single ticket
    findById(){

    }

    // update ticket instanceof
    updateById(){

    }

    //delete ticket
    deleteById(){

     }

     //raffle draw
     draw(){

     }
}

const myDB = new MyDB();
module.exports = myDB;