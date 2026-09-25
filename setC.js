const taskName = document.getElementById('taskName');
const taskInfo = document.querySelector('#taskInfo');
const messageArea = document.getElementById('messageArea');
const statusSelect = document.getElementById('statusSelect');
const newTaskForm = document.getElementById('newTaskForm');

taskName.parentElement.style.backgroundColor = '#eeeeee';
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
    newTask.textContent = document.getElementById('newTaskInput').value;
    document.getElementById('taskList').appendChild(newTask);
    showMessage(`New task submitted: ${newTask.textContent}`);

    const temporaryMessage = document.createElement('p');
    temporaryMessage.textContent = 'Temporary task message';
    document.getElementById('taskContainer').appendChild(temporaryMessage);
    document.getElementById('taskContainer').removeChild(temporaryMessage);
    newTaskForm.reset();
}

document.getElementById('updateTaskButton').addEventListener('click', updateTask);
document.addEventListener('keydown', detectEnterKey);
statusSelect.addEventListener('change', updateStatus);
taskInfo.addEventListener('mouseover', highlightTaskInfo);
taskInfo.addEventListener('mouseout', restoreTaskInfo);
newTaskForm.addEventListener('submit', submitNewTask);
