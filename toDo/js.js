const toDoARr = []

const submit = document.querySelector(`#submit`);
const todoNameInput = document.querySelector (`#todo_name_input`);
const todoContainer = document.querySelector (`#todo_container`);
submit.addEventListener("click", subMitTodo);

function subMitTodo (evt) {

    const todoObj={
        name: todoNameInput.value, 
        id:self.crypto.randomUUID(),
        done: false, 
    };
    toDoARr.unshift(todoObj);
    writeTodos()
}


//

function writeTodos(){

todoContainer.innerHTML ="";
toDoARr.forEach(todoObj=> {
    let isChecked;
    if (todoObj.done===true){
        isChecked = "checked";
    }
    else{
        isChecked="";
    }
todoContainer.innerHTML += `<li data-id=${todoObj.id}><h2>${todoObj.name}</h2><input type="checkbox" name="todoCheck" ${isChecked} /></li>`;
});

todoContainer.querySelectorAll("li").forEach(li=>{

const checkBox =li.querySelector ("input");
checkBox.addEventListener("click",(evt)=>{
    evt.preventDefault();
    const correspondingDataObj = toDoARr.find((toDo)=>toDo.id ===li.dataset.id);
    correspondingDataObj.done =!correspondingDataObj.done;
    console.log("correspondingDataObj",correspondingDataObj);
    writeTodos();
});

});

}