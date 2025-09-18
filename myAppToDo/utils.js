export const saveTodosIntoLocalStorage = (todos) => {
localStorage.setItem("todos", JSON.stringify(todos));
}
export const getTodosFromLocalStorage = () => {
return JSON.parse(localStorage.getItem("todos")) || [];
}