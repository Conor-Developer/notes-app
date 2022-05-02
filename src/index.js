

const notesModel = require("./notesModel");

const notes = new notesModel();

notes.addNote("Buy milk");

console.log(notes.getNotes());

module.exports = notesModel;

