/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const inputEL = document.querySelector("#message-input");
    inputEL.value = "Hello World";

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelector("#message").innerText).toBe("Hello World");
  });
  it("Hides the message after button is clicked", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const showButtonEl = document.querySelector("#show-message-button");
    showButtonEl.click();
    const buttonEl = document.querySelector("#hide-message-button");
    buttonEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
