class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });
    this.hideButtonEl = document.querySelector("#hide-message-button");

    this.hideButtonEl.addEventListener("click", () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    console.log("Thanks for clicking me!");
    let main = document.querySelector("#main-container");
    let inputEL = document.querySelector("#message-input");
    let div = document.createElement("div");
    div.id = "message";
    div.innerText = inputEL.value;
    main.append(div);
  }

  hideMessage() {
    document.querySelector("#message").remove();
  }
}

module.exports = MessageView;
