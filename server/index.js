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
    notes.getAll().then( notes => {
        res.json(notes)
    })
});

app.get('/notes/:category', (req, res) => {
    notes.getCategoryNotes(req.params.category).then( notes => {
        res.json(notes)
    })
});

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.create(req.body).then( note => {
        res.json(note)
    }).catch( error => {
        res.status(500);
        res.json(error);
    })
})

app.put('/notes/:id', (req, res) => {
    console.log(req.body.newContent);
    notes.updateNote(req.params.id, req.body.newContent).then( note => {
        res.json(note)
    }).catch( error => {
        res.status(500);
        res.json(error);
    })
})

const port = process.env.PORT || 4020;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})