document.addEventListener('DOMContentLoaded', function() {
  const todoForm = document.querySelector('.todoForm');
  const todoInput = document.querySelector('.todoinput');
  const todoList = document.querySelector('.todos');
  const showCompletedTasksBtn = document.querySelector('.complete');
  const showDeletedTasksBtn = document.querySelector('.Delete');
  const completedTasksList = document.querySelector('.CompletedTask');
  const deletedTasksList = document.querySelector('.DeletedTask');


  function createNewTask(taskText) {
      
      const li = document.createElement('li');
      li.textContent = taskText;

      
      const actionsDiv = document.createElement('div');
      actionsDiv.classList.add('actions');
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.classList.add('completeBtn'); 
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('deleteBtn'); 

      actionsDiv.appendChild(completeBtn);
      actionsDiv.appendChild(deleteBtn); 
      li.appendChild(actionsDiv);

      
      todoList.appendChild(li);
  }

  
  todoForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const todoText = todoInput.value.trim(); 

      if (todoText !== '') {
          createNewTask(todoText);
          todoInput.value = ''; 
      }
  });

  
  todoList.addEventListener('click', function(event) {
      const target = event.target;

      if (target.classList.contains('completeBtn')) {
          const li = target.closest('li');
          li.classList.toggle('complete'); 
          if (li.classList.contains('complete')) {
              
              completedTasksList.appendChild(li);
          } else {
              
              todoList.appendChild(li);
          }
      } else if (target.classList.contains('deleteBtn')) {
          const li = target.closest('li');
          
          deletedTasksList.appendChild(li);
      }
  });

  
  showCompletedTasksBtn.addEventListener('click', function() {
      
      completedTasksList.style.display = 'block';
      deletedTasksList.style.display = 'none';
  });


  showDeletedTasksBtn.addEventListener('click', function() {
      
      deletedTasksList.style.display = 'block';
      completedTasksList.style.display = 'none';
  });
});
