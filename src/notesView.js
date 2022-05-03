const notesModel = require('./notesModel')

class notesView {

  constructor(notesModel = new notesModel) {
    this.notesModel = notesModel
  }

  displayNotes() {
    let selectNote = document.querySelector("#main-container");
    let div = document.createElement("div");
    div.className = "notesModel";
    div.innerText = this.notesModel.notes[0];
    selectNote.append(div);
    console.log(selectNote)
    console.log(div.innerText)
  }
}

module.exports = notesView;