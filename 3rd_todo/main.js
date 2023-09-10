let input = document.querySelector('.input');
let submit = document.querySelector('.add');
let tasksDiv = document.querySelector('.tasks');

// empty array of tasks
let arrayOfTasks = [];

// check whether there are tasks in local storage
if (localStorage.getItem('tasks')) {
    arrayOfTasks = JSON.parse(localStorage.getItem('tasks'));
}

// trigger get data from local storage function
getDataFromLocalStorage();

// add task
submit.onclick = function() {
    if (input.value != null || input.value != '') {
        addTaskToArray(input.value);
        input.value = '';
    }
}

function addTaskToArray(taskText) {
    // task Data object
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false
    };
    // push tasks to the array of Tasks
    arrayOfTasks.push(task);

    // add tasks to page
    addElementsToPAgeFrom(arrayOfTasks);

    // add tasks to local Storage
    addDataToLocalStorageFrom(arrayOfTasks);
    // testing
    // console.log(arrayOfTasks);
    // console.log(JSON.stringify(arrayOfTasks));
}

function addElementsToPAgeFrom(arrayOfTasks) {
    // Tasks Div
    tasksDiv.innerHTML = '';
    // looping on array of tasks to add a class
    arrayOfTasks.forEach((task) => {
        let div = document.createElement('div');
        div.className = 'task';

        // check whether the task is done...
        if (task.completed) {
            div.className = 'task done';
        }

        // giving id and text to the task
        div.setAttribute('data-id', task.id);
        div.appendChild(document.createTextNode(task.title));

        // creating and appending the Delete span
        let span = document.createElement('span');
        span.classNAme = 'del';
        span.appendChild(document.createTextNode('Delete'));
        div.appendChild(span);
        
        // add task div to main Tasks container
        tasksDiv.appendChild(div);
    })
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));

}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem('tasks');
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPAgeFrom(tasks);
    }
}