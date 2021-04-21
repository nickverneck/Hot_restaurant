const { reverse } = require('dns');
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
const waitlist=[
    {
        name:'John',
        id:23,
        email:'john@gmail.com',
        phone:'3333333',

    },
]

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/api/tables', (req, res) => res.json(reservations));
app.get('/api/waitlist', (req, res) => res.json(waitlist));



 
app.post('/api/tables', (req, res) => {
    const newreservation = req.body;
    console.log(newreservation)
    if (reservations.length < 5) {
        
        reservations.push(newreservation);
        return res.json(true);
    } 
    else {
        waitlist.push(newreservation);
        return res.json(false);
    }
   
    
})


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
