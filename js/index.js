
function handelClickBtn(target) {
    const selectedItemsContainer = document.getElementById('selectedItems');
    const itemName = target.querySelector('.card-body p').innerText; 
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);
  }
 
  