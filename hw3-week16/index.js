const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.className = "task";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.ondblclick = () => {
        const newText = prompt("Тапсырманы өзгерту:", taskSpan.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskSpan.textContent = newText.trim();
        }
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "oshyru";
    deleteButton.onclick = () => listItem.remove();

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();
}