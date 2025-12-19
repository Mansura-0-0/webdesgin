document.getElementById('user-login').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;

    // Checking  user in localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('loggedIn', "1");
        localStorage.setItem('currentUser', email);

        // Redirect to where user intended
        let redirect = localStorage.getItem("redirectAfterLogin");
        localStorage.removeItem("redirectAfterLogin");

        if (redirect === "checkout") {
            window.location.href = "/checkout";
        } else {
            window.location.href = "/order";
        }
    } else {
        alert("Invalid email or password");
    }
});



  
  