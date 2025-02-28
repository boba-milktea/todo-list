import { v4 as uuid } from 'https://jspm.dev/uuid';

// data
const taskList = {
    tasks: [
        {
            uuid: 'b3418cd0-a624-412d-8982-d21c0797fb29',
            text: 'review compound component',
            completed: false
        }
    ]
};

// dom
const dom = {
    taskInput: document.getElementById('task-input'),
    addBtn: document.getElementById('add-btn'),
    taskList: document.getElementById('task-list')
};

// utils
const render = () => {
    dom.taskList.innerHTML = createHtmlEle();
};

const filter = (id) => {
    taskList.tasks = taskList.tasks.filter((task) => id !== task.uuid);
};

const findTaskObj = (id) => {
    return taskList.tasks.find((task) => id === task.uuid);
};

// create html elements
let htmlEle;

const createHtmlEle = () => {
    let htmlEle = '';
    taskList.tasks.forEach((task) => {
        htmlEle += `<li id="task-${task.uuid}" class=${
            task.completed ? 'completed' : ''
        }>
            <p>${task.text.toLowerCase()}</p>
             <div class="task">
              <button class="edit-btn" data-edit=${task.uuid}>Edit
              </button>
              <button class="delete-btn" data-delete=${task.uuid}>Del
              </button>
              <button class="complete-btn" data-complete=${task.uuid}>Done
              </button>
              </div>
         </li>`;
    });
    return htmlEle;
};

// handlers
let editingTaskId;

const handleAdd = (e) => {
    e.preventDefault();

    const inputText = dom.taskInput.value.trim();

    if (!inputText) {
        alert('please enter a task');
        return;
    }

    if (editingTaskId) {
        const editingTaskObj = findTaskObj(editingTaskId);
        if (editingTaskObj) {
            editingTaskObj.text = inputText;
            render();
        }
        editingTaskId = '';
    } else {
        taskList.tasks.unshift({
            uuid: uuid(),
            text: dom.taskInput.value,
            completed: false
        });
        render();
    }

    dom.taskInput.value = '';
};

// handlers - for each task buttons

const handleClick = (e) => {
    e.target.dataset.edit && handleEdit(e.target.dataset.edit);
    e.target.dataset.delete && handleDelete(e.target.dataset.delete);
    e.target.dataset.complete && handleComplete(e.target.dataset.complete);
};

const handleEdit = (id) => {
    const taskObj = findTaskObj(id);
    if (taskObj) {
        dom.taskInput.value = taskObj.text;
        editingTaskId = taskObj.uuid;
    }
};

const handleDelete = (id) => {
    filter(id);
    render();
};

const handleComplete = (id) => {
    const completedTask = findTaskObj(id);
    if (completedTask) {
        completedTask.completed = true;
    }
    render();
};

// events
dom.addBtn.addEventListener('click', handleAdd);
document.addEventListener('click', handleClick);

render();
