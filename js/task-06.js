const imputEl = document.querySelector("#validation-input");
const styleImputEl = document.querySelector("style");

const counterEl = () => {
  if (imputEl.value.length === +imputEl.dataset.length) {
    imputEl.classList.remove("invalid");
    imputEl.classList.add("valid");
  } else {
    imputEl.classList.remove("valid");
    imputEl.classList.add("invalid");
  }
  console.log(imputEl.value.length);
  console.log(+imputEl.dataset.length);
};

imputEl.addEventListener("blur", counterEl);
