const notes = require("./notesView");

const note = new notes.notesView();

note.notesModel.addNote("Buy milk");

note.notesModel.addNote("Buy sugar");

note.displayNotes();

module.exports = notesModel;
