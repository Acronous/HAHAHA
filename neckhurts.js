
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "renzo123" && password === "12345") {
        message.style.color = "#7CFC98";
        message.textContent = "Login Successful! Welcome";
        setTimeout(function() {
            window.location.href = "ti.html";
        }, 1000);
    } else {
        message.style.color = "#ff7070";
        message.textContent = "Invalid username or password!";

    }
});
