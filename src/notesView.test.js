/**
 * @jest-environment jsdom
 */

const fs = require('fs');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// const { isTypedArray } = require('util/types');
const notesModel = require('./notesModel');
const notesView = require('./notesView')
jest.mock('./notesModel')

describe(notesView, () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("../index.html");
    notesModel.mockClear();
    notesModelDouble = new notesModel(); 
    newNotesView = new notesView(notesModelDouble);
  })

  it('creates a new instance of the notesModel class', () => {
    expect(newNotesView.notesModel).toBeInstanceOf(notesModel)
  })
  it('displayNotes gets the list of notes from the model', () => {
    notesModelDouble.getNotes.mockImplementation(() => ["Buy milk"])
    newNotesView.displayNotes();
    expect(document.getElementsByClassName("#notesModel").innerText).toBe("Buy milk")
  })
});
