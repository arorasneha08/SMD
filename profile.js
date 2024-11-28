// Function to load the latest user data from localStorage and update the profile page
function loadProfileData() {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('signUpData');

    if (storedData) {
        const userDataArray = JSON.parse(storedData);

        const latestUserData = userDataArray[userDataArray.length - 1];

        document.getElementById('profile-username').textContent = latestUserData.username || '[Username]';
        document.getElementById('profile-email').textContent = latestUserData.email || '[Email]';
    } else {
        console.log("No user data found in localStorage.");
    }
}

// Call the function to load data when the page loads
window.onload = loadProfileData;
