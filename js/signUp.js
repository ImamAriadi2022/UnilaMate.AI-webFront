// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting in the traditional way
      const email = emailInput.value;
  
      if (validateEmail(email)) {
        alert(`Sign up successful for email: ${email}`);
        window.location.href = '../page/formSignUp.html';
        // Here you can add any logic to send data to a server or API.
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    function validateEmail(email) {
      // Basic email validation using a regular expression
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  