// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи. -->

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const createButtonEL = document.querySelector("[data-create]");
const destroyButtonEL = document.querySelector("[data-destroy]");
const createBoxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    amount = inputEl.value;
    const boxesArray = [];
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      boxesArray.push(box);
    }
    createBoxesContainer.append(...boxesArray);
  }
};
const destroyBoxes = () => {
  createBoxesContainer.innerHTML = "";
};

createButtonEL.addEventListener("click", createBoxes);
destroyButtonEL.addEventListener("click", destroyBoxes);
