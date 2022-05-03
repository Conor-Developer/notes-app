/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const View = require("./view");

describe("Page view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    view = new View();
  });

  it("displays 2 paragraphs", () => {
    expect(document.querySelectorAll("p").length).toBe(2);
  });

  it("#addParagraph adds 1 paragraph and displays on page", () => {
    view.addParagraph();

    expect(document.querySelectorAll("p").length).toBe(3);
  });

  it("#clearParagraphs removes all paragraphs displayed on page", () => {
    view.clearParagraphs();

    expect(document.querySelectorAll("p").length).toBe(0);
  });
});
