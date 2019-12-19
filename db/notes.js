const db = require('./connection');
const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().required(),
    title: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.string()
})

const notes = db.get('notes');

const getEverything = () => {
    return notes.find({});
}

const getAll = (username) => {
    return notes.find({username: username});
}

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

const deleteMe = id => {
    return notes.remove({ _id: id });
}

module.exports = {
    getEverything,
    getAll,
    getCategoryNotes,
    create,
    updateNote,
    deleteMe
}