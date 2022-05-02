const notesModel = require("./notesModel");

describe(notesModel, () => {
  it("checks const variable is an instance of notesModel", () => {
    const notes = new notesModel();

    expect(notes).toBeInstanceOf(notesModel);
  });

  it("checks this.getNotes returns an array", () => {
    const notes = new notesModel();

    expect(notes.getNotes()).toEqual([]);
  });

  it("adds a string to the this.notes variable", () => {
    const notes = new notesModel();

    notes.addNote("Buy milk");
    expect(notes.getNotes()).toEqual(["Buy milk"]);
  });

  it("#reset will clear this.notes array", () => {
    const notes = new notesModel();

    notes.addNote("Buy milk");
    notes.reset();

    expect(notes.getNotes()).toEqual([]);
  });
});
