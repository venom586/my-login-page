document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Login form submitted!");
});

document.getElementById("google-login").addEventListener("click", function() {
    alert("Google Login Clicked");
});

document.getElementById("facebook-login").addEventListener("click", function() {
    alert("Facebook Login Clicked");
});