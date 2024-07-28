const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
const BIN_ID = "66a65e8ead19ca34f88dfd64";
const MASTER_KEY = "$2a$10$hizbF/WWO7aCi8N9hdKNKuDWhS.ADUD.qn6O4zhWBRRdlOa8ls7t6"

let todos = [];


// =============================================
// The data modeling of each task object.  Add, modify, delete. Read/Shpw is not considered part of it. 
function addTodoModeling(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 1000 + 1),
        name: name,
        urgency: urgency
    }

    todos.push(newTodo);
}

//todo write the code if the id doesn't exist. Currently it is still asking for modification but it is not shown in the amended list. 
function modifyTaskModeling(todos, id, updateTaskName, updateUrgency) {
    let task = null;

    // Look for the id in the todos array
    for (let t of todos) {
        if (t.id == id){
            task = t;
        } 
    }
    
    if (task) {
        task.name = updateTaskName
        task.urgency = updateUrgency
    } else {
        console.log("Task is not found");
    }

}

//todo when an id that doesn't exist is entered, is says 'Task not found' and then'task deleted successfully'. It should not write 'task deleted successfully. Fix this. 
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

async function loadTasks() {
    const response = await axios.get(BASE_JSON_BIN_URL + "/" + BIN_ID + "/latest");
    return response.data.record;
}

async function saveTasks(todos) {
    const response = await axios.put(`${BASE_JSON_BIN_URL}/${BIN_ID}`, todos, {
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": MASTER_KEY
        }
    });
    return response.data;
}

