// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);






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

    // the functio to save todo items to local storage
    saveLocalTodos(todoInput.value)

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

function filterTodo(e) {
    const todos = todoList.children;
    let arrTodo = Array.prototype.slice.call( todos );

    arrTodo.forEach(todo => {
        switch(e.target.value) {
            case 'all': 
                todo.style.display = 'flex';
            break;
            case 'completed': 
                if (todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
            case 'uncompleted': 
                if (!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
        }
    })
}

function saveLocalTodos(todo){
    let todos= [];
    if(localStorage.getItem('seventh.todos') === null) {
        todos =[];
    } else {
        todos = JSON.parse(localStorage.getItem('seventh.todos'))
    }
    todos.push(todo);
    localStorage.setItem('seventh.todos', JSON.stringify(todos))
}