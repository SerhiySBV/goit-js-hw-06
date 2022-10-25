const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrList = [];
for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = `${ingredient}`;
  liEl.classList.add("item");
  arrList.push(liEl);
}
const listIngredients = document.querySelector("#ingredients");
listIngredients.append(...arrList);
