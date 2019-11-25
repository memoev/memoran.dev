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

const getCategoryNotes = (category) => {
    return notes.find({category: category})
}

const create = (note) => {
    const result = Joi.validate(note, schema);
    if (result.error === null) {
        note.created = new Date();
        return notes.insert(note)
    } else {
        return Promise.reject(result.error)
    }
}

const updateNote = (id, newContent) => {
    return notes
      .findOneAndUpdate({ _id: id }, { $set: { content: newContent } });
}

module.exports = {
    getAll,
    getCategoryNotes,
    create,
    updateNote
}