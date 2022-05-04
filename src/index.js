const notes = require("./notesView");

const note = new notes.notesView();

note.displayNotesFromApi();

module.exports = note;
