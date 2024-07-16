const prompt = require('prompt-sync')();

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
            deleteTask();
        } else if (userChoice === "5") {
            console.log("*** Exiting... ***");
            running = false;
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}

function showMenu() {
    console.log();
    console.log("==== Todo List Menu ====");
    console.log("1. Show all tasks");
    console.log("2. Add a new tasks");
    console.log("3. Modify an existing task");
    console.log("4. Delete a task");
    console.log("5. Exit");
}

function getUserInput() {
    console.log();
    return prompt("Enter your choice: ");
}

function showAllTasks() {
    pass
}

function addNewTask() {
    pass
}

function modifyExistingTask() {
    pass
}

function deleteTask() {
    pass
}

App();