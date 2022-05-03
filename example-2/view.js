class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let selectElement = document.querySelector("#main-container");
    let p = document.createElement("p");
    p.innerText = "This paragraph has been dynamically added by JavaScript!";
    selectElement.append(p);
    console.log(selectElement.childNodes);
  }

  clearParagraphs() {
    document.querySelectorAll("p").forEach((element) => element.remove());
  }
}

module.exports = View;
