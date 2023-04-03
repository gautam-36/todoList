console.log("console is active")

const form = document.querySelector('#new-task-form')
const input = document.querySelector('#new-task-input')
const list_el = document.querySelector('#tasks')
const dateEl = document.querySelector("#dateEl")
const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
dateEl.innerText += " " + day + "/" + month + "/" + year

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    // edit button
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    // update button
    const task_update_el = document.createElement('button');
    task_update_el.classList.add('complete');
    task_update_el.innerText = 'Complete';

    // delete button
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = `<span class="material-symbols-outlined">
    delete
    </span>`;

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_update_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = '';

    //  for edit features 

    task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() == 'edit') {
            task_edit_el.innerText = "save"
            task_input_el.removeAttribute('readonly');
            task_input_el.focus()
        } else {
            task_edit_el.innerText = "edit"
            task_input_el.setAttribute("readonly", "readonly")
        }
    });

    // update feature 
    task_update_el.addEventListener('click', (e) => {
        console.log("completed")
        task_input_el.style.textDecoration = "line-through"
        task_input_el.style.color = "#179621"
        if (task_update_el.innerText.toLowerCase() == 'complete') {
            task_update_el.innerText = 'completed'
        }
        else {
            task_input_el.style.textDecoration = "none"
            task_update_el.innerText = 'complete'
            task_input_el.style.color = "#fff"
        }

    })


    // for delete feature 
    task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el)
    })

})