const prompt = require('prompt-sync')();

let todos = [];


function App() {
    showMenu();
    getUserInput();

    const userChoice = getUserInput();

    running = true;
    while (running) {
        if (userChoice === "1") {
            showAllTasksInterface();
        } else if (userChoice === "2") {
            addTaskInterface();
        } else if (userChoice === "3") {
            modifyTaskInterface();
        } else if (userChoice === "4") {
            deleteTaskInterface();
        } else if (userChoice === "5") {
            console.log("Exiting...");
            running = false;
        } else {
            console.log("Please enter a valid input.");
        }
    }
}

function showMenu() {
    pass
}

function getUserInput() {
    pass
}

// The 4 CRUD features of the app
function showAllTasksInterface() {
    pass
}

function addTaskInterface() {
    pass
}

function modifyTaskInterface() {
    pass
}

function deleteTaskInterface() {
    pass
}



// The data modeling of each task object. 
function addTodoModeling(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 1000 + 1),
        name: name,
        urgency: urgency
    }

    todos.push(newTodo);
}


function modifyTaskModeling(todos, id, updateTaskName, updateUrgency) {
    task = null;

    // Look for the id in the todos array
    for (let t of todos) {
        if (t.id == id); //todo understand how to read object from its value. t.id is nameofObject.key
        task = t;
    }
    if (task) {
        task.name = updateTaskName
    } else {
        console.log("Task is not found");
    }
}

function deleteTaskModeling(todos,id) {
    let indexToDelete = null;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDelete = i;
            break
        }
    }

    if (indexToDelete !== null) {
        todos.splice(indexToDelete, 1)
    } else {
        console.log("Task is not found.");
    }


}

App()