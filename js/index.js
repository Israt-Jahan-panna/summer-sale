let total = 0;
let discount = 0;

function handelClickBtn(target) {
    const selectedItemsContainer = document.getElementById('selectedItems');
    const itemName = target.querySelector('.card-body p').innerText; 
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);
    
    const price = target.querySelector('.card-body h4').innerText.split(" ") [0] ;
    total = parseInt(total) + parseInt(price );
    const totalPrice = document.getElementById('totalPrice').innerText = total;
    document.getElementById('totalPrice').innerText = total.toFixed(2);

    if (total >= 200 ) {
      applyButton.removeAttribute('disabled');
      // applyButton.addEventListener('click', applyCoupon);
    } else {
      applyButton.setAttribute('disabled', true);
      applyButton.removeEventListener('click', applyCoupon);
    }

    updateFinalPrice();

    if (total > 0) {
      purchaseButton.removeAttribute('disabled');
    } else {
      purchaseButton.setAttribute('disabled', true);
    }
  }
  const applyCouponInput = document.getElementById('apply-coupon');
  const applyButton = document.getElementById('apply-btn');
  const purchaseButton = document.getElementById('purchase-btn');

  purchaseButton.addEventListener('keyup', function(event) {
    const text = event.target.value;

    if (total >= 1) {
      purchaseButton.removeAttribute('disabled');
    } else {
      purchaseButton.setAttribute('disabled', true);
    }
  });

  applyCouponInput.addEventListener('keyup', function(event) {
    const text = event.target.value;
    if (total >= 200 && text === 'SELL200') {
      applyButton.removeAttribute('disabled');
      applyButton.addEventListener('click', applyCoupon);
    } else {
      applyButton.setAttribute('disabled', true);
    }
  });
  
    function applyCoupon() {
      discount = 0.20 * total;
      document.getElementById('discount').innerText = discount.toFixed(2);
      updateFinalPrice();
    }

    function updateFinalPrice() {
      const finalPrice = total - discount;
      document.getElementById('finalPrice').innerText = finalPrice.toFixed(2);
    }
    //homepage URL
    const goBackButton = document.getElementById('goHomeBtn');
    goBackButton.addEventListener('click', function() {
      window.location.href = 'http://127.0.0.1:5500/index.html'; 
    });