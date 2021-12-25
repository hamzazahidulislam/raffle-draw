const Ticket = require('../models/Ticket');

class MyDB{
    constructor(){
        this.tickets = []
    }

    /**
     * cretae and save a new Ticket
     * @param {string} username 
     * @param {number} price 
     */
    create(username,price){
        username
        const ticket = new Ticket();
    }

    //sell multiple tickets
    bulkCreate(){

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