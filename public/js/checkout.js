// this is the login chek
var loggedin = localStorage.getItem('loggedIn');
if (loggedin !== "1") {
    localStorage.setItem('redirectAfterLogin', 'checkout');
    window.location.href = "/login";
}

// filling out user forn if it was already typed befoe, pre filling
var currentUserEmail = localStorage.getItem('currentUser');
var users = JSON.parse(localStorage.getItem('users')) || [];
var user = users.find(u => u.email === currentUserEmail);

if (user) {
    var fullnameInput = document.querySelector('input[name="fullname"]');
    var addressInput = document.querySelector('input[name="address"]');

    if (fullnameInput) fullnameInput.value = user.name;
    if (addressInput) addressInput.value = user.address;
}

// displaying cart
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var checkoutItems = document.getElementById("checkout-items");
var totalEl = document.getElementById("checkout-total");

if (checkoutItems) {
    if(cart.length === 0){
        checkoutItems.innerHTML = "<p>Your cart is empty.</p>";
        if(totalEl) totalEl.textContent = "$0.00";
    } else {
        checkoutItems.innerHTML = "";
        cart.forEach(item => {
            let p = document.createElement("p");
            p.textContent = item.name + " - $" + item.price.toFixed(2);
            checkoutItems.appendChild(p);
        });

        let total = cart.reduce((sum, item) => sum + item.price, 0);
        if(totalEl) totalEl.textContent = "$" + total.toFixed(2);
    }
}

// payment and playing order 
var buyNowBtn = document.getElementById('buy-now');
var paymentFailure = document.getElementById("payment-failure");
var paymentSuccess = document.getElementById("payment-success");

if(paymentFailure) paymentFailure.style.display = 'none';
if(paymentSuccess) paymentSuccess.style.display = 'none';

buyNowBtn.addEventListener('click', function(){

    // checking the payment 
    var cardnumber = document.getElementById('cardNumber').value;
    var cardcvv = document.getElementById('cardCvv').value;

    

    // displayinh paayment sucess 
    alert("Payment success");
    if(paymentFailure) paymentFailure.style.display = 'none';
    if(paymentSuccess) paymentSuccess.style.display = 'block';
    localStorage.setItem('checkout', 0);

    // rediectinbg to thank you page 
    const fullname = document.querySelector('input[name="fullname"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const address = document.querySelector('input[name="address"]').value;

    const order = { fullname, phone, address };
    localStorage.setItem('lastOrder', JSON.stringify(order));

    const params = new URLSearchParams(order).toString();
    window.location.href = '/thankyou?' + params;
});

////https://www.youtube.com/watch?v=Nj7zwJZ9bYI&list=PLBkfChuH29a4eJAEkVJVLsqsoSktE33L7
//https://www.youtube.com/watch?v=nGhKIC_7Mkk&list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i&index=3