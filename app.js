const name = prompt('Enter Your Name');
const mainHeader = document.querySelector('h1');
mainHeader.innerText = name + "'s Todo List";
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//event listener
todoButton.addEventListener('click', addTodo);
function addTodo(event){
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = '';
  trashButton.addEventListener('click', deleteTodo);
  function deleteTodo(){
    todoDiv.removeChild(newTodo);
    todoDiv.removeChild(completedButton);
    todoDiv.removeChild(trashButton);
  }
  completedButton.addEventListener('click', complete = () => {
    alert('Congratulations on completing your task');
    todoDiv.removeChild(newTodo);
    todoDiv.removeChild(completedButton);
    todoDiv.removeChild(trashButton);
  })
}



