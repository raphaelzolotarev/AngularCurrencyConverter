"use strict";
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
if (taskInput && addButton && clearButton) {
    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });
    clearButton.addEventListener("click", () => {
        const completedTasks = taskList.querySelectorAll("li");
        completedTasks.forEach((task) => {
            if (task.querySelector("button")) {
                taskList.removeChild(task);
            }
        });
    });
}
var x = "mi bola";
console.log("chupapi " + x);
const myVar = 50;
function m() {
    const myVar = 30;
    console.log(myVar);
}
m();
console.log(myVar);
