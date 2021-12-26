<!-- @format -->

# Lottery API

- sell lottery tcket
- update lottery ticket
- delete lottery ticket
- get all lottery tickets
- get ticket by id
- bulk buy (user can purchase multiple tickets)
- raffle draw

Ticket :

- number (unique)
- username
- price
- timestamp

Routes:

- /tickets/t/:tickectId GET - find ticket by id
- /tickets/u/:username GET - find ticket by username
- /tickets/t/:ticketId PATCH - update ticket by ticketId
- /tickets/t/:ticketId DELETE - delete ticket by ticketId
- /tickets/u/:username GET - find tickets for a given username
- /tickets/u/:username PATCH - update tickets for a given username
- /tickets/u/:username DELETE - delete all tickets for a given username
- /tickets/draw GET - raffle draw
- /tickets/sell POST - create new ticket
- /tickets/bulk POST - bull create new tickets
- /tickets GET - find all tickets
