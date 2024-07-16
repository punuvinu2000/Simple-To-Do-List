document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', manageTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function manageTask(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        } else if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        }
    }
});
