let tasks = [];

let taskForm = document.getElementById("taskForm");
let taskList = document.getElementById("tasklist");

//create
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  const newTask = { id: Date.now(), title, description, completed: false };
  addNewTask(newTask);
  taskForm.reset();
});

function addNewTask(task) {
  tasks.push(task);
  fetchTasks();
}
//read
function renderTask(task) {
  const taskElement = document.createElement("li");
  taskElement.innerHTML = `
     <p>${task.title}</p>
     <div class="buttons">
     <button onclick="editTask(${task.id})">Edit</button>
     <button onclick="deleteTask(${task.id})">Delete</button>
     </div>
     `;
  taskList.appendChild(taskElement);
}

//update
function editTask(id) {
  const task = tasks.find((task) => task.id === id);
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  deleteTask(id);
}

//delete
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id != id);
  fetchTasks();
}

//fetch task
function fetchTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    renderTask(task);
  });
}
fetchTasks();
