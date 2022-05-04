const notesModel = require("./notesModel");

class notesView {
  constructor(notes = new notesModel()) {
    this.notesModel = notes;
    this.selectNote = document.querySelector("#main-container");

    this.inputEL = document.querySelector("#message-input");

    this.buttonEL = document.querySelector("#add-note");

    this.buttonEL.addEventListener("click", () => {
      this.notesModel.addNote(this.inputEL.value);
      this.clearNotes();
      this.displayNotes();

      // Clears the input in the text field
      this.inputEL.value = "";
    });
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

  clearNotes() {
    document
      .querySelectorAll("div.newNote")
      .forEach((element) => element.remove());
  }
}

module.exports = {
  notesView,
  notesModel,
};
