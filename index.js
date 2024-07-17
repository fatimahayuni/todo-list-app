const prompt = require('prompt-sync')();

let todos = [];


function App() {
    let running = true;
    while (running) {
        showMenu();

        const userChoice = getUserInput();

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
    console.log();
    console.log("===== Todo List Menu =====");
    console.log("1. Show all tasks");
    console.log("2. Add a new task");
    console.log("3. Modify an existing task");
    console.log("4. Delete a task");
    console.log("5. Exit");
  }
  
function getUserInput() {
    console.log();
    return prompt("Enter your choice: ")
}

// The interfaces of the 4 CRUD features

function showAllTasksInterface() {
    if (todos.length === 0) {
        console.log("There are no tasks to display.");
        return
    }
    console.log("==== TASKS ====");
    for (let task of todos) {
        console.log(`ID: ${task.id}, Name: ${task.name}, Urgency: ${task.urgency}`);
    }
}

function addTaskInterface() {
    let name = prompt("Enter the name of the task: ");
    let urgency = parseInt(prompt("Enter the urgency (1-5): "));
    addTodoModeling(todos, name, urgency);
    console.log();
    console.log("Task added successfully!");
}

function modifyTaskInterface() {
    let id = parseInt(prompt("Enter the task ID to modify: "));
    let updateTaskName = prompt("Enter the new name for the task: ");
    let updateUrgency = parseInt(prompt("Enter the new urgency (1-5): "));
    modifyTaskModeling(todos, id, updateTaskName, updateUrgency);
    console.log("Task updated successfully!");
}

function deleteTaskInterface() {
    let id = parseInt(prompt("Enter the task ID to delete: "));
    deleteTaskModeling(todos, id);
    console.log("Task deleted successfully!");
}

// =============================================
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
    let task = null;

    // Look for the id in the todos array
    for (let t of todos) {
        if (t.id == id){
            task = t;
        } //todo understand how to read object from its value. t.id is nameofObject.key
        
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