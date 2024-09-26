// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const additionalForm = document.getElementById('additionalForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const welcomeText = document.getElementById('welcomeText');
  
    // Typing effect untuk welcome message
    const message = "Selamat Datang di GitHub!";
    let index = 0;
  
    function typeEffect() {
      if (index < message.length) {
        welcomeText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Kecepatan mengetik
      } else {
        document.getElementById('welcomeDescription').style.display = 'block';
      }
    }
  
    // Mulai efek mengetik pada welcome message
    typeEffect();
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Cegah pengiriman form default
      const email = emailInput.value;
  
      if (validateEmail(email)) {
        // Tampilkan form tambahan untuk password dan username
        signupForm.style.display = 'none';
        additionalForm.style.display = 'block';
      } else {
        alert('Silakan masukkan alamat email yang valid.');
      }
    });
  
    additionalForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      if (password.length >= 6 && username.length >= 3) {
        // Popup setelah username diinput
        alert(`Pendaftaran berhasil dengan username: ${username}. Silakan masuk melalui menu login.`);
        window.location.href = '../page/login.html';
      } else {
        alert('Nama pengguna minimal 3 karakter dan kata sandi minimal 6 karakter.');
      }
    });
  
    function validateEmail(email) {
      // Validasi email sederhana menggunakan regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  