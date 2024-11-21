document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      // Here you would typically validate the credentials, e.g., call an API.
      alert("Login successful!");
      // For now, we just simulate a login alert.
      window.location.href = 'dashboard.html'; // Redirect to dashboard page (you can change this URL)
    } else {
      alert("Please fill in both fields.");
    }
  });
  
  // Link to signup (if needed in future)
  document.getElementById('signup-link').addEventListener('click', function() {
    alert("Redirecting to signup page...");
    // Redirect to signup page if necessary
  });
  