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

  setNotes(data) {
    return (this.notes = data);
  }
}

module.exports = notesModel;
