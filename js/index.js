let total = 0;
function handelClickBtn(target) {
    const selectedItemsContainer = document.getElementById('selectedItems');
    const itemName = target.querySelector('.card-body p').innerText; 
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);
    const price = target.querySelector('.card-body h4').innerText.split(" ") [0] ;
    total = parseInt(total) + parseInt(price );
    const totalPrice = document.getElementById('totalPrice').innerText = total;
  }
 
  