const submit = document.querySelector(`#submit`);
const todoNameInput = document.querySelector (`#todo_name_input`);
const todoContainer = document.querySelector (`#todo_container`);
const doneContainer = document.querySelector (`#done_container`);

submit.addEventListener("click", subMitTodo);


function subMitTodo (){
console.log("virker");

const li =document.createElement("li");
li.innerHTML = `<input type="checkbox"<h1>${todoNameInput.value}</h1>`;

todoContainer.appendChild(li);

li.addEventListener("click",()=>{
     console.log("parent" ,li.parentElement.id);
    if (li.parentElement.id==="todo_container"){
   
todoContainer.removeChild(li);
doneContainer.appendChild(li);
    }else{
doneContainer.removeChild(li);
todoContainer.appendChild(li);
    }
});
}