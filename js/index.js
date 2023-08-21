let total = 0;
let discount = 0;
// let finalTotal = 0;

function handelClickBtn(target) {
    const selectedItemsContainer = document.getElementById('selectedItems');
    const itemName = target.querySelector('.card-body p').innerText; 
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);
    const price = target.querySelector('.card-body h4').innerText.split(" ") [0] ;
    total = parseInt(total) + parseInt(price );
    const totalPrice = document.getElementById('totalPrice').innerText = total;
    if (totalPrice >= 200){
      discount = 0.20 * totalPrice;
      const discountAmount = document.getElementById('discount').innerText = discount;
    }
    else {
      discount = 0;
      document.getElementById('discount').innerText = discount.toFixed(2);
    }
    const finalPrice = total - discount;
    document.getElementById('finalPrice').innerText = finalPrice.toFixed(2);
    document.getElementById('purchase-btn').addEventListener('keyup', function(event) {
      const text = event.target.value;
      const purchaseButton = document.getElementById('purchase-btn');
      
      if (total >= 1) {
        purchaseButton.removeAttribute('disabled');
      } else {
        purchaseButton.setAttribute('disabled', true);
      }
      
    });
  }
  
 
  