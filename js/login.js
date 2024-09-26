document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let isValid = true;

    // Reset error messages
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    // Check if username is empty
    if (username === "") {
        document.getElementById("usernameError").innerText = "Please fill out this field.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    // Check if password is empty
    if (password === "") {
        document.getElementById("passwordError").innerText = "Please fill out this field.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // If both fields are filled
    if (isValid) {
        // Uncomment this part once you have your database ready
        // function authenticateUser(username, password) {
        //     // Simulate database check
        //     // You can replace this with actual database validation
        //     if (username === "correctUsername" && password === "correctPassword") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

        // For now, simply redirect to another page
        window.location.href = "../main.html";
    }
});
