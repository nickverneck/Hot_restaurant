const express = require('express');
const path = require('path');
const Reservations = require('./Reservations');

// Sets up the Express App

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        name:'nick',
        id:2,
        email:'nicollas@gmail.com',
        phone:'3333333',

    },
    {
        name:'Brandi',
        id:3,
        email:'brandi@gmail.com',
        phone:'3333333',

    },
    {
        name:'Rob',
        id:4,
        email:'Rob@gmail.com',
        phone:'3333333',

    },
    {
        name:'Amy',
        id:5,
        email:'amy@gmail.com',
        phone:'3333333',

    }
]

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
