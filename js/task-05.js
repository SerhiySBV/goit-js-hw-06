const inputNameEL = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");
const changeNameEl = (evt) => {
  if (!evt.currentTarget.value) {
    return (outputNameEl.textContent = "Anonymous");
  }
  outputNameEl.textContent = evt.currentTarget.value;
};

inputNameEL.addEventListener("input", changeNameEl);
