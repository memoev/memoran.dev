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

// API calls!

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
    // console.log(req.body);
    notes.create(req.body).then( note => {
        res.json(note);
    }).catch( error => {
        res.status(500);
        res.json(error);
    })
})

app.put('/notes/:id', (req, res) => {
    // console.log(req.body);
    notes.updateNote(req.params.id, req.body.newContent).then( note => {
        res.json(note)
    }).catch( error => {
        res.status(500);
        res.json(error);
    })
})

app.delete('/notes/:id', (req, res) => {
    notes.deleteMe(req.params.id)
        .then(note => {res.json(note)})
        .catch(error => {res.json(error);})
})

const port = process.env.PORT || 4020;
app.listen(port, () => {
    console.log(`You know what time it is: ${port}`);
})