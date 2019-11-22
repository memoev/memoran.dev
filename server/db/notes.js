const db = require('./connection');
const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    title: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.string()
})

const notes = db.get('notes');

const getAll = () => {
    return notes.find();
};

const create = (note) => {
    const result = Joi.validate(note, schema);
    if (result.error === null) {
        note.created = new Date();
        return notes.insert(note)
    } else {
        return Promise.reject(result.error)
    }
}

module.exports = {
    getAll,
    create
}