let input = document.querySelector('.input');
let submit = document.querySelector('.add');
let tasksDiv = document.querySelector('.tasks');

// empty array of tasks
let arrayOfTasks = [];

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
}


