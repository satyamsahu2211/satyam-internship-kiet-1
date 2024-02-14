

function addItem() {
  
  var taskInput = document.getElementById('task');
  var taskText = taskInput.value.trim();


  if (taskText !== '') {
    
      var newItem = document.createElement('li');
      newItem.textContent = taskText;


      var todoList = document.getElementById('todolist');
      todoList.appendChild(newItem);


      taskInput.value = '';
  }
}

function resetForm() {
  document.getElementById('task').value = '';

  document.getElementById('todolist').innerHTML = '';
}
