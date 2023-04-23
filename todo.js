// Create an empty array to store the todo list
const todoList = [];

// Render the todo list on the page
renderTodoList();

// This function generates HTML for the todo list and adds it to the page
function renderTodoList() {

        // Start with an empty string
        let todoListHTML = '';

        // Loop through each item in the todo list array
        for (let i = 0; i < todoList.length; i++) {

                // Get the name and due date for this todo item
                const todoObject = todoList[i];
                // const name = todoObject.name;
                // const dueDate = todoObject.dueDate;
                const { name, dueDate } = todoObject;

                // Generate HTML for this todo item, including a delete button
                const html = `
                <div class="todo-output">${name}</div> 
                <div class="date-output">${dueDate}</div> 
                <button onclick="
                    todoList.splice(${i},1);
                    renderTodoList();
                " class="delete-todo-button">
                    Delete
                </button>
            `;

                // Add this HTML to the todoListHTML string
                todoListHTML += html;
        }

        //add the todoListHTML to the page
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

//This function add new todo items to the list
function addTodo() {

        //Get the name and the due date from the fields
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;

        const dateInputElement = document.querySelector('.js-due-date-input');
        const dueDate = dateInputElement.value;

        //add new todo item to the todo list array
        todoList.push({
                // name: name,
                // dueDate: dueDate
                name,
                dueDate
        });

        //clear the input field
        inputElement.value = '';

        //Render the updated to-do list on the page
        renderTodoList();
}
