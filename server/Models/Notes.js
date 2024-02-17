const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    classID: {
        type: String, required: true
    },
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
});

const Notes = mongoose.model('Note', NotesSchema);

module.exports = Notes;