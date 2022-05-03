const notesModel = require("./notesModel");

class notesView {
  constructor(notes = new notesModel()) {
    this.notesModel = notes;
    this.selectNote = document.querySelector("#main-container");
  }

  displayNotes() {
    let newEL = document.createElement("div");
    newEL.className = "newNote";
    newEL.innerText = "Buy Milk";
    this.selectNote.append(newEL);
  }
}

module.exports = notesView;
