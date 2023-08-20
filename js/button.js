document.getElementById('apply-coupon').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyButton = document.getElementById('apply-btn');
    if(text === 'SELL200'){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute('disabled', true);
    }
})
document.getElementById('apply-btn').addEventListener('click', function()){
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
}