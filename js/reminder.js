// Pastikan flatpickr sudah di-inisialisasi pada element dengan ID 'time-picker'
flatpickr("#time-picker", {
    enableTime: true,          // Aktifkan pilihan waktu
    noCalendar: false,          // Hanya time picker (tanpa kalender)
    dateFormat: "H:i",         // Format jam dan menit
    time_24hr: true,           // Gunakan format 24 jam
    defaultHour: 9,           // Jam default
    defaultMinute: 0,          // Menit default
    onChange: function(selectedDates, dateStr, instance) {
      alert("Reminder set for: " + dateStr); // Tampilkan waktu yang dipilih
    }
  });
  

  function toggleDropdown() {
    var dropdown = document.getElementById("reminder-dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
  
  
  function setReminder(time) {
    alert("Reminder set for: " + time);
    document.getElementById("reminder-dropdown").style.display = "none";
  }
  
//   function setCustomReminder() {
//     var customTime = document.getElementById("custom-date").value;
//     if (customTime) {
//       alert("Custom reminder set for: " + customTime);
//       document.getElementById("reminder-dropdown").style.display = "none";
//     }
//   }
  

function setCustomReminder() {
    var selectedTime = document.getElementById("time-picker").value;
    if (selectedTime) {
      alert("Reminder set for: " + selectedTime);
      document.getElementById("reminder-dropdown").style.display = "none";
    }
  }