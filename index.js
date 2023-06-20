const btnListener = document.querySelector('#btnListner');
btnListener.addEventListener('click', addListFunction);


const addTask = document.querySelector('.addTaskHeader');
addTask.addEventListener('click', showInput);

let taskCount = 0;

function addListFunction() {
  const inputValue = document.querySelector('#listInput').value;
  const addList = document.querySelector('.addedList');

  
  
  // CREATE LIST DIV
  const listDiv = document.createElement('div');
  listDiv.classList.add('lists');

  // CREATE CHECKBOX
  const checkBtn = document.createElement('input');
  checkBtn.type = 'checkbox';
  checkBtn.classList.add('checkList');
  listDiv.appendChild(checkBtn);

  // Adding Input Value
  const toDotext = document.createElement('span');
  toDotext.classList.add('toDoText');
  toDotext.textContent = inputValue;
  listDiv.appendChild(toDotext);

  // CREATE DELETE BUTTON
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteBtn.classList.add('deleteList');
  listDiv.appendChild(deleteBtn);

  // Appending Div
  addList.appendChild(listDiv);

  // Add event listeners to delete button and checkbox
  deleteBtn.addEventListener('click', function() {
    listDiv.remove(); // Remove the corresponding listDiv when delete button is clicked
  });

  checkBtn.addEventListener('change', function() {
    if (checkBtn.checked) {
      toDotext.style.textDecoration = 'line-through'; // Apply strikethrough when checkbox is checked
    } else {
      toDotext.style.textDecoration = 'none'; // Remove strikethrough when checkbox is unchecked
    }
  });
}

function showInput(){

const listView = document.querySelector('.listView')
listView.classList.remove('hidden')
}