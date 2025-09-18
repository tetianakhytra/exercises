import { saveTodosIntoLocalStorage, getTodosFromLocalStorage } from "./utils.js";

const submit = document.querySelector("#submit");
const nameInput = document.querySelector("#todo_name_input");
const quantityInput = document.querySelector("#todo_quantity_input");
const todoContainer = document.querySelector("#todo_container");
const doneContainer = document.querySelector("#done_container");

let todos = getTodosFromLocalStorage() || [];

submit.addEventListener("click", () => {
  const text = nameInput.value.trim();
  const quantity = parseInt(quantityInput.value.trim()) || null;
  if (!text) return;

  todos.push({ id: Date.now(), text, quantity, completed: false });
  nameInput.value = "";
  quantityInput.value = "";
  saveTodosIntoLocalStorage(todos);
  render();
});

function render() {
  todoContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    if (todo.completed) {
  li.classList.add("completed");
}
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? "checked" : ""}>
      <span>${todo.text}${todo.quantity ? ` (quantity: ${todo.quantity})` : ""}</span>
      <button>✖️</button>`;

    const checkbox = li.querySelector("input");
   const deleteBtn = li.querySelector("button");
deleteBtn.classList.add("delete-btn");

    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      saveTodosIntoLocalStorage(todos);
      render();
    });

    deleteBtn.addEventListener("click", () => {
     todos = todos.filter(function(todoItem) {
  return todoItem.id !== todo.id;
});
saveTodosIntoLocalStorage(todos);
      render();
    });

    (todo.completed ? doneContainer : todoContainer).appendChild(li);
  });
}

render();
