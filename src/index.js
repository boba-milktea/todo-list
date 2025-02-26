import { v4 as uuid } from 'https://jspm.dev/uuid';

// data
const taskList = {
    tasks: [
        {
            uuid: 'b3418cd0-a624-412d-8982-d21c0797fb29',
            text: 'review promise',
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

// utilities?
const render = () => {
    dom.taskList.innerHTML = createHtmlEle();
};

const filter = (id) => {
    taskList.tasks = taskList.tasks.filter((task) => id !== task.uuid);
};

const getTaskObj = (id) => {
    return taskList.tasks.filter((task) => id === task.uuid);
};

// handlers
const handleAdd = (e) => {
    e.preventDefault();
    if (dom.taskInput.value.trim()) {
        taskList.tasks.unshift({
            uuid: uuid(),
            text: dom.taskInput.value,
            completed: false
        });
        render();
    } else {
        alert('please enter a task');
    }
    dom.taskInput.value = '';
};

const handleClick = (e) => {
    e.target.dataset.edit && handleEdit(e.target.dataset.edit);
    e.target.dataset.delete && handleDelete(e.target.dataset.delete);
    e.target.dataset.complete && handleComplete(e.target.dataset.complete);
};

const handleEdit = (id) => {
    const taskObj = getTaskObj(id);
    if (taskObj.length > 0) {
        dom.taskInput.value = taskObj[0].text;
        filter(id);
        render();
    }
};

const handleDelete = (id) => {
    filter(id);
    render();
};

const handleComplete = (id) => {
    const completedTask = taskList.tasks.find((task) => id === task.uuid);
    if (completedTask) {
        completedTask.completed = true;
    }
    render();
};

// create html elements
let htmlEle;

const createHtmlEle = () => {
    let htmlEle = '';
    taskList.tasks.forEach((task) => {
        htmlEle += `<li id="task-${task.uuid}" class=${
            task.completed ? 'completed' : ''
        }>
            ${task.text.toLowerCase()}
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

// events
dom.addBtn.addEventListener('click', handleAdd);
document.addEventListener('click', handleClick);

render();
