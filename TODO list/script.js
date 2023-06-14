const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.addEventListener('click', toggleTaskStatus);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

// Function to mark a task as completed
function toggleTaskStatus(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('completed');
}
