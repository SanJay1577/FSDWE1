let tasks = [];

let taskForm = document.getElementById("taskForm");
let taskList = document.getElementById("tasklist");

//create
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  const newTask = { id: Date.now(), title, description, completed: false };
  let checkedTask = isTaskExist(newTask);
  addNewTask(checkedTask);
  taskForm.reset();
});

function showErrorMessage(msg) {
  let erroMessage = document.getElementById("err-msg");
  erroMessage.innerText = msg;
  setTimeout(() => {
    removeErrorMessage();
  }, 1000);
}
function removeErrorMessage() {
  let erroMessage = document.getElementById("err-msg");
  erroMessage.innerText = "";
}
function addNewTask(task) {
  if (task) {
    removeErrorMessage();
    tasks.push(task);
    fetchTasks();
  } else {
    showErrorMessage("Task Already exist");
  }
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

//check task already exist
function isTaskExist(t) {
  let alreadyExist = tasks.find((task) => task.title == t.title);
  if (alreadyExist) {
    return null;
  }
  return t;
}

//fetch task
function fetchTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    renderTask(task);
  });
}
fetchTasks();
// check task already exist and throw error
