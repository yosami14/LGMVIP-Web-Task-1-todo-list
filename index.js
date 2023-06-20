const btnListener = document.querySelector('#btnListner');
btnListener.addEventListener('click', addListFunction);

function addListFunction() {
  const inputValue = document.querySelector('#listInput').value;
  const addList = document.querySelector('.addedList');
  //CREATE LIST
  const listDiv = document.createElement('div');
  listDiv.textContent = inputValue;
  listDiv.classList.add('lists')

  //CREATE DELETE BTN AND CHECK BTN
  const deleteBtn = '<i class="fa-solid fa-xmark"></i>' ;
  addList.appendChild(listDiv);
}
