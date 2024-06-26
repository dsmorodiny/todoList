const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  taskList.append(newTask);
  taskInput.value = "";
  // Добавляем кнопку для удаления задачи к новой задаче
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("deleteButton");
  newTask.appendChild(deleteButton);
});

// При клике на задачу, она помечается как выполненная или снова как невыполненная
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
  // При клике на кнопку удаления, задача удаляется
  if (event.target.classList.contains("deleteButton")) {
    event.target.parentElement.remove();
  }
});
