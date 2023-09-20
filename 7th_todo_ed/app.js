// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');



// Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);







// functions
function addTodo(e) {
    e.preventDefault();
    
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Checked
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('completed-btn');
    todoDiv.appendChild(completedBtn);
    // trash
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    // clear the input box
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;

    if (item.className == 'trash-btn'){
        const todo = item.parentElement
        todo.classList.add('fall');
        // wait till animation to end then delete item
        todo.addEventListener("transitioned", () => todo.remove())
        
    } else if (item.className == 'completed-btn') {
        item.parentElement.classList.toggle('completed');
    }
}