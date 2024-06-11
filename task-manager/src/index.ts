// GETTING THE ELEMENTS FROM THE HTML FILE
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
// THIS CHECK (IF) WE NEED THIS BECAUSE TS IS NOT HAPPY WITH POSSIBLE NULL VALUES
if (taskInput && addButton && clearButton) {
 addButton.addEventListener("click", () => {
 const taskText = taskInput.value.trim();
 // CREATE LIST ITEM
 if (taskText !== "") {
 const listItem = document.createElement("li");
 listItem.textContent = taskText;
 // DELETE TASK
 const deleteButton = document.createElement("button");
 deleteButton.textContent = "Delete";
 deleteButton.addEventListener("click", () => {
 taskList.removeChild(listItem);
 });
 listItem.appendChild(deleteButton);
 taskList.appendChild(listItem);
 // CLEAR INPUT FIELD
 taskInput.value = "";
 }
 });
 // CLEARING COMPLETED TASKS
 clearButton.addEventListener("click", () => {
 const completedTasks = taskList.querySelectorAll("li");
 // LOOP OVER ALL THE TASKS AND DELETE THEM
 completedTasks.forEach((task) => {
 if (task.querySelector("button")) {
 taskList.removeChild(task);
 }
 });
 });
}

var x: string = "mi bola";
console.log("chupapi "+x);

const myVar = 50;

function m(){
    const myVar = 30;
    console.log(myVar);
}
m();
console.log(myVar);
