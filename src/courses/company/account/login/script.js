const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function() {
    const storedEmail = localStorage.getItem("comp-email");
    const storedPassword = localStorage.getItem("comp-password");

    const emailInput = document.querySelector('input[name="comp-email"]');
    const passwordInput = document.querySelector('input[name="comp-password"]');

    if (storedEmail === emailInput.value && storedPassword === passwordInput.value) {
        window.location.href = "https://example.com/dashboard.html";
    } else {
        alert("Invalid email or password");
    }
});