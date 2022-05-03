const notesModel = require("./notesModel");

class notesView {
  constructor(notes = new notesModel()) {
    this.notesModel = notes;
    this.selectNote = document.querySelector("#main-container");
  }

  displayNotes() {
    const notes = this.notesModel.getNotes();

    notes.forEach((note) => {
      let newEL = document.createElement("div");
      newEL.className = "newNote";
      newEL.innerText = note;
      this.selectNote.append(newEL);
    });
  }
}

module.exports = {
  notesView,
  notesModel,
};
