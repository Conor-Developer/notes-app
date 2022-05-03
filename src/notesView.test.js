/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const notesModel = require("./notesModel");
const notesView = require("./notesView");
jest.mock("./notesModel");

describe(notesView, () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    notesModel.mockClear();
    notesModelDouble = new notesModel();
    newNotesView = new notesView(notesModelDouble);
  });

  it("creates a new instance of the notesModel class", () => {
    expect(newNotesView.notesModel).toBeInstanceOf(notesModel);
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
