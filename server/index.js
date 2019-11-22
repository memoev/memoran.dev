const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require("morgan");

// Models
const notes = require('./db/notes')

const app =  express();

// Middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json ({
        message: 'Fullstack Message Board!'
    });
});

app.get('/notes', (req, res) => {
    notes.getAll().then( (notes) => {
        res.json(notes)
    })
});

const port = process.env.PORT || 4020;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})