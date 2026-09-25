const taskName = document.getElementById('taskName');
const taskInfo = document.querySelector('#taskInfo');
const messageArea = document.getElementById('messageArea');
const statusSelect = document.getElementById('statusSelect');
const taskContainer = document.getElementById('taskContainer');
const taskList = document.getElementById('taskList');
const newTaskForm = document.getElementById('newTaskForm');
const newTaskInput = document.getElementById('newTaskInput');

// Demonstrate DOM navigation from the task name to its containing section.
const taskSection = taskName.parentElement;
taskSection.style.backgroundColor = '#eeeeee';
messageArea.style.color = 'green';

function showMessage(message) {
    messageArea.textContent = message;
}

function updateTask() {
    showMessage('Task updated successfully!');
}

function detectEnterKey(event) {
    if (event.key === 'Enter') {
        showMessage('Enter key detected!');
    }
}

function updateStatus(event) {
    showMessage(`Selected status: ${event.target.value}`);
}

function highlightTaskInfo() {
    taskInfo.style.backgroundColor = 'lightgreen';
}

function restoreTaskInfo() {
    taskInfo.style.backgroundColor = '#eeeeee';
}

function submitNewTask(event) {
    event.preventDefault();

    const newTask = document.createElement('li');
    newTask.textContent = newTaskInput.value;
    taskList.appendChild(newTask);
    showMessage(`New task submitted: ${newTaskInput.value}`);

    const temporaryMessage = document.createElement('p');
    temporaryMessage.textContent = 'Temporary task message';
    taskContainer.appendChild(temporaryMessage);
    taskContainer.removeChild(temporaryMessage);
    newTaskForm.reset();
}

document.getElementById('updateTaskButton').addEventListener('click', updateTask);
document.addEventListener('keydown', detectEnterKey);
statusSelect.addEventListener('change', updateStatus);
taskInfo.addEventListener('mouseover', highlightTaskInfo);
taskInfo.addEventListener('mouseout', restoreTaskInfo);
newTaskForm.addEventListener('submit', submitNewTask);
