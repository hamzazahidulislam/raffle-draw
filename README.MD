<!-- @format -->

# Rafflw Draw

API documentation

## 1. install packages

```sh
npm i
```

## 2. Run The App

```sh
npm run start
```

# Rafflw Draw API

### Create a New Ticket

`POST /api/v1/tickets/sell`

Request body:

    {
        "username":"Hamza",
        "price":15
    }

### Response

    {
        "message": "Ticket created Successfully",
        "ticket": {
            "id": "3IieICm3h",
            "username": "Hamza",
            "price": 15,
            "createAt": "2021-12-27T06:54:08.488Z",
            "updateAt": "2021-12-27T06:54:08.488Z"
        }
    }

## Bulk Create New Tickets

`POST /api/v1/tickets/bulk`

Request body:

    {
        "username":"Hamza",
        "price":15,
        "quantity":3
    }

### Response

    {
        "message": "Bulk Ticket created Successfully",
        "ticket": [
            {
                "id": "wVM-rJjKH",
                "username": "Hamza",
                "price": 15,
                "createAt": "2021-12-27T06:54:46.175Z",
                "updateAt": "2021-12-27T06:54:46.175Z"
            },
            {
                "id": "kwNh9IjlVB",
                "username": "Hamza",
                "price": 15,
                "createAt": "2021-12-27T06:54:46.175Z",
                "updateAt": "2021-12-27T06:54:46.175Z"
            },
            {
                "id": "VS8sDwGfEO",
                "username": "Hamza",
                "price": 15,
                "createAt": "2021-12-27T06:54:46.175Z",
                "updateAt": "2021-12-27T06:54:46.175Z"
            }
        ]
    }

## Find All Tickets

`GET /api/v1/tickets`

### Response

    {
        "message": "Tickets found Successfully",
        "tickets": [
            {
                "id": "3IieICm3h",
                "username": "Hamza",
                "price": 15,
                "createAt": "2021-12-27T06:54:08.488Z",
                "updateAt": "2021-12-27T06:54:08.488Z"
            },
            {
                "id": "kwNh9IjlVB",
                "username": "Hamza",
                "price": 15,
                "createAt": "2021-12-27T06:54:46.175Z",
                "updateAt": "2021-12-27T06:54:46.175Z"
            },
            {
                "id": "VS8sDwGfEO",
                "username": "Hamza",
                "price": 15,
                "createAt": "2021-12-27T06:54:46.175Z",
                "updateAt": "2021-12-27T06:54:46.175Z"
            }
        ]
    }

### Raffle Draw

`GET /api/v1/tickets/draw`

`GET /api/v1/tickets/draw?wc=3`

Request Query Param wc --> 3

### Response

    {
        "message": "Ticket drawn Successfully",
        "winners": [
            {
                "id": "3IieICm3h",
                "username": "Hamza",
                "price": 15,
                "createAt": "2021-12-27T06:54:08.488Z",
                "updateAt": "2021-12-27T06:54:08.488Z"
            }
        ]
    }

### Find Ticket By Id

`GET /api/v1/tickets/t/Os0uPojWi`

Request Param ticketId --> ticketId

### Response

    {
        "id": "Os0uPojWi",
        "username": "Hamza",
        "price": 15,
        "createAt": "2021-12-27T07:13:49.286Z",
        "updateAt": "2021-12-27T07:13:49.286Z"
    }

### Update Ticket By TicketId

`PATCH /api/v1/tickets/t/gFakoXCLL`

Request Param ticketId --> ticketId

Request body:

    {
        "username":"Hamza",
        "price":15
    }

### Response

    {
        "message": "Updated ticket successfully",
        "ticket": {
            "id": "Os0uPojWi",
            "username": "Hamza",
            "price": 15,
            "createAt": "2021-12-27T07:13:49.286Z",
            "updateAt": "2021-12-27T07:15:39.734Z"
        }
    }

### Delete Ticket By TicketId

`DELETE /api/v1/tickets/t/Os0uPojWi`

Request Param ticketId --> ticketId

### Response

    Deleted ticket successfully

### Find Tickets For a given username

`GET /api/v1/tickets/u/Hamza`

Request Param username --> username

### Response

    {
        "id": "Os0uPojWi",
        "username": "Hamza",
        "price": 15,
        "createAt": "2021-12-27T07:13:49.286Z",
        "updateAt": "2021-12-27T07:13:49.286Z"
    }

### Update Ticket By TicketId

`PATCH /api/v1/tickets/t/gFakoXCLL`

Request Param ticketId --> ticketId

Request body:

    {
        "username":"Hamza",
        "price":15
    }

### Response

    {
        "message": "Updated ticket successfully",
        "ticket": {
            "id": "Os0uPojWi",
            "username": "Hamza",
            "price": 15,
            "createAt": "2021-12-27T07:13:49.286Z",
            "updateAt": "2021-12-27T07:15:39.734Z"
        }
    }

### Delete Ticket By TicketId

`DELETE /api/v1/tickets/t/Os0uPojWi`

Request Param ticketId --> ticketId

### Response

    Deleted ticket successfully
