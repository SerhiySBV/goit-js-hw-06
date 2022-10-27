// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const inputNameEL = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");
const changeNameEl = (evt) => {
  if (!evt.currentTarget.value) {
    return (outputNameEl.textContent = "Anonymous");
  }
  outputNameEl.textContent = evt.currentTarget.value;
};

inputNameEL.addEventListener("input", changeNameEl);
