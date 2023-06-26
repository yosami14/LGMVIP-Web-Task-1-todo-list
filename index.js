const btnListener = document.querySelector('#btnListner');
btnListener.addEventListener('click', addListFunction);

const addTask = document.querySelector('.addTaskHeader');
addTask.addEventListener('click', showInput);

// Task counter
let taskCount = 0;
taskCount++;

let listDateHolder = document.querySelector(".listDateHolder");
listDateHolder.textContent = date();

let datetime = document.querySelector(".datetime");
datetime.textContent = time();

function addListFunction() {
  const inputValue = document.querySelector('#listInput').value;
  const addList = document.querySelector('.addedList');

  // Create list div
  const listDiv = document.createElement('div');
  listDiv.classList.add('lists');

  // Task count
  let taskCounter = document.querySelector(".taskCount");
  taskCounter.textContent = taskCount++;

  // Create checkbox
  const checkBtn = document.createElement('input');
  checkBtn.type = 'checkbox';
  checkBtn.classList.add('checkBtn');
  checkBtn.classList.add('checkList');
  listDiv.appendChild(checkBtn);

  // Add input value
  const toDotext = document.createElement('span');
  toDotext.classList.add('toDoText');
  toDotext.textContent = inputValue;
  listDiv.appendChild(toDotext);

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteBtn.classList.add('deleteList');
  listDiv.appendChild(deleteBtn);

  // Append div
  addList.appendChild(listDiv);

  // Add event listeners to delete button and checkbox
  deleteBtn.addEventListener('click', function() {
    listDiv.remove(); // Remove the corresponding listDiv when the delete button is clicked
  });

  checkBtn.addEventListener('change', function() {
    if (checkBtn.checked) {
      toDotext.style.textDecoration = 'line-through'; // Apply strikethrough when the checkbox is checked
    } else {
      toDotext.style.textDecoration = 'none'; // Remove strikethrough when the checkbox is unchecked
    }
  });
}

function showInput() {
  const listView = document.querySelector('.listView');
  listView.classList.remove('hidden');
}

function date() {
  const now = new Date();
  const options = { weekday: 'short', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  return formattedDate;
}

function time() {
  const now = new Date();
  const formattedTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  return formattedTime;
}
