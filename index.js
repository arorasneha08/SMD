// Wait for the page to load, then apply the rotation to the dashboard-title class
window.onload = () => {
    // Add a slight delay before rotating the title
    setTimeout(() => {
      // Add the class 'rotated' to the dashboard-title element
      document.querySelector('.dashboard-title').classList.add('rotated');
    }, 500); // 500ms delay to allow the fade-in effect to complete
  };
  
  // Example alert listeners for buttons
  document.getElementById('home').addEventListener('click', () => {
      alert('Home Page clicked');
  });
  
  document.getElementById('about-us').addEventListener('click', () => {
      alert('About Us clicked');
  });
  
  document.getElementById('profile').addEventListener('click', () => {
      alert('Profile clicked');
  });
  
  document.getElementById('privacy-policy').addEventListener('click', () => {
      alert('Privacy Policy clicked');
  });
  