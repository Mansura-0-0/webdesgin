

// Loading saved cart or creating empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Updati Cart Contonts on Screen
function updateCartDisplay() {
    const cartList = document.querySelector(".cart-items");
    const totalElement = document.querySelector(".cart-total");

    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = `<li class="list-group-item">No items in cart</li>`;
    } else {
        cart.forEach(item => {
            cartList.innerHTML += `
                <li class="list-group-item d-flex justify-content-between">
                    ${item.name}
                    <span>$${item.price.toFixed(2)}</span>
                </li>
            `;
            total += item.price;
        });
    }

    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Saving back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Listening to add to cart buttons
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        cart.push({ name, price });
        updateCartDisplay();
    });
});

// Checkout button logic writting
document.querySelector(".checkout-btn").addEventListener("click", () => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn != "1") {
        alert("Please login before checking out.");
        localStorage.setItem("redirectAfterLogin", "checkout");  
        window.location.href = "/login";  
        return;
    }

    window.location.href = "/checkout";
});

// Updating cart on load
updateCartDisplay();
