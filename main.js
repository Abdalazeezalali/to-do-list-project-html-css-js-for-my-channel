const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const emptyText = document.getElementById('emptyText');

// قائمة المهام في الذاكرة أثناء جلسة العمل فقط
let tasks = [];


// Add task event
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text === '') return;

    tasks.push(text);
    taskInput.value = '';
    render();
});

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}

function render() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        emptyText.style.display = 'block';
    } else {
        emptyText.style.display = 'none';
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'حذف';
        delBtn.className = 'delete-btn';
        delBtn.onclick = function () { deleteTask(index); };

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}