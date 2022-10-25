const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створить окремий елемент < li >.
//   Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const arrList = [];
for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = `${ingredient}`;
  liEl.classList.add("item");
  arrList.push(liEl);
}
const listIngredients = document.querySelector("#ingredients");
listIngredients.append(...arrList);
