const NotesModel = require("./notesModel");
const NotesApi = require("./notesApi");
const EmojiApi = require("./emojiApi");

class NotesView {
  constructor(
    notesModel = new NotesModel(),
    notesApi = new NotesApi(),
    emojiApi = new EmojiApi()
  ) {
    this.notesApi = notesApi;
    this.notesModel = notesModel;
    this.emojiApi = emojiApi;

    this.mainContainerEl = document.querySelector("#main-container");

    this.inputEl = document.querySelector("#message-input");

    this.buttonEl = document.querySelector("#add-button");

    this.resetAllEl = document.querySelector("#delete-button");

    this.resetAllEl.addEventListener("click", () => {
      this.notesApi.reset();
      this.notesModel.reset();
      this.displayNotes();
    });

    this.buttonEl.addEventListener("click", () => {
      const noteObject = this.notesModel.convertString(this.inputEl.value);
      this.notesApi.createNote(
        noteObject,
        () => {
          this.notesModel.addNote(noteObject.content);
          this.displayNotes();
          console.log("hi");
          // Clears the input in the text field
          this.inputEl.value = "";
        },
        () => {
          this.displayError();
        }
      );
    });
  }

  displayNotes() {
    this.clearNotes();

    this.notesModel.getNotes().forEach((note) => {
      this.emojiApi.createEmoji(
        note,
        (emojiNote) => {
          const noteEl = document.createElement("div");
          noteEl.innerText = emojiNote.emojified_text;
          noteEl.classList.add("note");
          this.mainContainerEl.append(noteEl);
        },
        () => {
          const noteEl = document.createElement("div");
          noteEl.innerText = note;
          noteEl.classList.add("note");
          this.mainContainerEl.append(noteEl);
        }
      );
    });
  }

  clearNotes() {
    document
      .querySelectorAll("div.note")
      .forEach((element) => element.remove());
  }

  displayNotesFromApi() {
    this.notesApi.loadNotes((receivedData) => {
      this.notesModel.setNotes(receivedData);
      this.displayNotes();
    });
  }

  displayError() {
    const errorEl = document.createElement("div");
    errorEl.innerText = "Oops, something went wrong!";
    errorEl.classList.add("error");
    this.mainContainerEl.append(errorEl);
  }
}

module.exports = NotesView;
