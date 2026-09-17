const mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    ddescription: {
        type: String,
        minlength: 10,
    }
});

const NoteModel = mongoose.model('Notes', noteSchema);
module.exports = NoteModel;