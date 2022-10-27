// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const counterEl = document.querySelector("#value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const addValue = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};
const remuveValue = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};
decrementEl.addEventListener("click", remuveValue);
incrementEl.addEventListener("click", addValue);
