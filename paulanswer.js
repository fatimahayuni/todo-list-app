const prompt = require('prompt-sync')();

let todos = [];

function App() {
    let running = true;
    while (running) {
        showMenu()
        const userChoice = getUserInput();

        if (userChoice === "1") {
            showAllTasks();
        } else if (userChoice === "2") {
            addNewTask();
        } else if (userChoice === "3") {
            modifyExistingTask();
        } else if (userChoice === "4") {
            deleteTaskInterface();
        } else if (userChoice === "5") {
            console.log("*** Exiting...👋🏻👋🏻 ***");
            running = false;
        } else {
            console.log("🛑 Invalid choice. Please try again.");
        }
    }
}

function showMenu() {
    console.log();
    console.log("==== Todo List Menu ====");
    console.log("1. 🔖 Show all tasks");
    console.log("2. 🟢 Add a new task");
    console.log("3. 🛠️ Modify an existing task");
    console.log("4. ❌ Delete a task");
    console.log("5. 👋🏻 Exit");
}

function getUserInput() {
    console.log();
    return prompt("Enter your choice: ");
}

function showAllTasks() {
    if (todos.length === 0) {
        console.log("There are no tasks to display.");
        return
    }
    console.log("==== Tasks ====");
    for (let task of todos) {
        console.log(`ID: ${task.id}, Name: ${task.name}, Urgency: ${task.urgency}`);
    }
}

function addNewTask() {
    let name = prompt("Enter the name of the task: ");
    let urgency = parseInt(prompt("Enter the urgency (1-5): "));
    addTodo (todos, name, urgency);
    console.log("Task added successfully!")
}

function modifyExistingTask() {
    let id = parseInt(prompt("Enter the task ID to modify: "));
    let newTaskName = prompt("Enter the new name for the task: ");
    let newUrgency = parseInt(prompt("Enter the new urgency (1-5): "));
    modifyTask(todos, id, newTaskName, newUrgency);
    console.log("Task modified");
}

function deleteTask(todos, id) {
    let indexToDelete = null;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDelete = i;
            break;
        }
    }
    if (indexToDelete !== null) {
        todos.splice(indexToDelete, 1);
    } else {
        console.log("Task is not found");
    }
}

function deleteTaskInterface() {
    let id = parseInt(prompt("Enter the task ID to delete: "));
    deleteTask(todos, id);
    console.log("Task deleted successfully!");
}

function addTodo(todos, name, urgency) {
    // declare an object called newTodo
    let newTodo = {
        id: Math.floor(Math.random() * 100 + 1),
        name: name,
        urgency: urgency
    };

    // push a new task into the empty array.
    todos.push(newTodo);
}

function modifyTask(todos, id, newTaskName, newUrgency) {
    // declare as 'null' to indicate starts with no value, also to signal that a task with a certain id isn't found. also to make it cler that the variable is meant to hold an object (a task) or nothing, rather than a promite value like 0 or an empty string. 
    //todo why can't we declare it as empty string instead?
    let task = null;
    for (let t of todos) {
        if (t.id == id) {
            task = t;        }
    }
    if (task) {
        task.name = newTaskName;
    } else {
        console.log("Task is not found");
    }
}

App();