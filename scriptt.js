
function saveToLocalStorage() {
    let existingData = JSON.parse(localStorage.getItem('signUpData')) || [];

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = {
        username: username,
        email: email,
        password: password,
    };

    existingData.push(newUser);

    localStorage.setItem('signUpData', JSON.stringify(existingData));
}

// Validate the form fields
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    if (username.trim() === "") {
        alert("Username is required.");
        isValid = false;
    }

    if (email.trim() === "") {
        alert("Email is required.");
        isValid = false;
    }

    if (password.trim() === "") {
        alert("Password is required.");
        isValid = false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        isValid = false;
    }

    if (confirmPassword.trim() === "") {
        alert("Please confirm your password.");
        isValid = false;
    } else if (confirmPassword !== password) {
        alert("Passwords do not match.");
        isValid = false;
    }

    return isValid;
}

function nextStep() {
    if (validateForm()) {
        saveToLocalStorage();
        window.location.href = "profile pg.html"; // Redirect to the profile page
    }
}

// Add an event listener for the form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    nextStep();
});
