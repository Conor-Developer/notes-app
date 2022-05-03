/**
 * @jest-environment jsdom
 */

const fs = require("fs");
// const notesModel = require("./notesModel");
const notes = require("./notesView");
jest.mock("./notesModel");

describe(notes.notesView, () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    notes.notesModel.mockClear();
    notesModelDouble = new notes.notesModel();
    newNotesView = new notes.notesView(notesModelDouble);
  });

  it("creates a new instance of the notesModel class", () => {
    expect(newNotesView.notesModel).toBeInstanceOf(notes.notesModel);
  });

  it("displayNotes gets the list of notes from the model", () => {
    notesModelDouble.getNotes.mockImplementation(() => [
      "Buy Milk",
      "Buy Sugar",
    ]);

    newNotesView.displayNotes();

    expect(document.querySelectorAll("div.newNote").length).toEqual(2);
  });
});
