class notesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(newNote) {
    return this.notes.push(newNote);
  }

  reset() {
    return (this.notes = []);
  }
}

module.exports = notesModel;
