const myTasks = [];

function addTask() {
    let newTask = document.getElementById("task").innerHTML;
    myTasks.push(newTask);
    createTableRow(myTasks);
    saveTasks(myTasks);
    
    
}


function createTableRow(taskArray) {
    const table = document.getElementById("taskTable");
    var row = table.insertRow(-1);
    var insertTask = row.insertCell(1);
    const lastElement = taskArray[taskArray.length - 1];

    insertTask.innerHTML = lastElement
}

function saveTasks(taskArray){
    localStorage.setItem("storedTasks", JSON.stringify(taskArray));
}

function displayTasks(){
    const table = document.getElementById("taskTable");
    let retrievedArray = JSON.parse(localStorage.getItem("storedTasks"));
    for (let i = 0; i < retrievedArray.length - 1; i ++){
        const row = table.insertRow(-1);
        const cell = row.insertCell(1);
        cell.innerHTML = retrievedArray[i];
    }
}
// retrieves the saved localstorage and converts into array
//    const myStoredTasks = localStorage.getItem("storedTasks");
//    const retrievedTasks = JSON.parse(myStoredTasks);