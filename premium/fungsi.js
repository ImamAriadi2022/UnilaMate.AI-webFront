let tugasDB = [
    { nama: "Tugas 1", deadline: "2024-09-18", },
    { nama: "Tugas 2", deadline: "2024-09-20" },
    { nama: "Tugas 3", deadline: "2024-09-22" }
];

// let kegiatanDB = [
//     { nama: "Kegiatan 1", tanggal: "2024-09-19" },
//     { nama: "Kegiatan 2", tanggal: "2024-09-21" }
// ];

let currentTask; // current
// let currentKegiatan;



window.onload = function() {
    renderPenting(); // Jika bagian penting perlu di-render di awal
};
// Fungsi untuk menampilkan daftar tugas
function renderTugasList() {
    const tugasList = document.getElementById('tugasList');
    tugasList.innerHTML = ''; // Kosongkan daftar sebelumnya

    tugasDB.forEach(tugas => {
        let li = document.createElement('li');
        li.textContent = `${tugas.nama} - Deadline: ${tugas.deadline}`;
        li.classList.add('task-item');
        let activeTask = null;
        li.onclick = function() {
            if (activeTask === tugas) {
                // Jika tugas yang sama di klik lagi, tutup detail tugas
                document.getElementById('task-details').classList.add('hidden');
                activeTask = null; // Reset activeTask
            } else {
                // Tampilkan detail tugas
                showTaskDetails(tugas);
                activeTask = tugas; // Set activeTask ke tugas yang baru
            }
        };
        
        tugasList.appendChild(li);
    });
}

// Fungsi untuk menampilkan daftar kegiatan
// ALLERT ELLERT
// function renderKegiatanList(){
//     const kegiatanList = document.getElementById('kegiatanList');
//     kegiatanList.innerHTML = ''; // Kosongkan daftar sebelumnya

//     kegiatanDB.forEach(kegiatan => {
//         let li = document.createElement('li');
//         li.textContent = `${kegiatan.nama} - tanggal: ${kegiatan.tanggal}`;
//         li.classList.add('task-item');
//         let activeKegiatan  = null;
//         li.onclick = function() {
//             if (activeKegiatan === kegiatan) {
//                 // Jika kegiatan yang sama di klik lagi, tutup detail kegiatan
//                 document.getElementById('kegiatan-details').classList.add('hidden');
//                 activeKegiatan = null; // Reset activeKegiatan
//         } else {
//             // Tampilkan detail kegiatan
//             console.log('togle tugas telah berfungsi');
//             showKegiatanDetails(kegiatan);
//             activeKegiatan = kegiatan; // Set activeKegiatan ke kegiatan
//         }
//     };
//         kegiatanList.appendChild(li);
//     });
// }

// Fungsi untuk menampilkan detail tugas di sidebar kanan
function showTaskDetails(tugas) {
    const detailsSection = document.getElementById('task-details');
    document.getElementById('task-title').textContent = tugas.nama;
    document.getElementById('task-deadline').textContent = `Deadline: ${tugas.deadline}`;
    document.getElementById('task-description').textContent = tugas.deskripsi || "Deskripsi tidak tersedia."; // Cek jika deskripsi kosong
     // Pastikan sidebar muncul
    detailsSection.classList.remove("hidden");
    
}

// Fungsi untuk menampilkan detail kegiatan di sidebar kanan
// function showKegiatanDetails(kegiatan) {
//     const detailsSection = document.getElementById('kegiatan-details');
//     document.getElementById('kegiatan-title').textContent = kegiatan.nama;
//     document.getElementById('kegiatan-tanggal').textContent = `Tanggal: ${kegiatan.tanggal}`;
//     document.getElementById('kegiatan-description').textContent = kegiatan.deskripsi;
//     // Pastikan sidebar muncul
//     detailsSection.classList.remove('hidden'); // Tampilkan sidebar detail

// }


// Fungsi untuk menambah tugas baru

function openPopup() {
    document.getElementById('tugasPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('tugasPopup').style.display = 'none';
}

function submitTugas() {
    const namaTugas = document.getElementById('tugasInput').value;
    const deadlineTugas = document.getElementById('tugasDeadline').value;

    if (namaTugas && deadlineTugas) {
        tugasDB.push({ nama: namaTugas, deadline: deadlineTugas });
        renderTugasList();
        document.getElementById('tugasInput').value = ''; // Kosongkan input setelah tugas ditambahkan
        document.getElementById('tugasDeadline').value = '';
        alert("Tugas berhasil ditambahkan!");
        closePopup(); // Tutup pop-up setelah tugas ditambahkan
    } else {
        alert("Mohon isi nama tugas dan deadline!");
    }
}

// ini buat edit tugas







// Fungsi untuk menambah kegiatan baru
// function openKegiatanPopup() {
//     document.getElementById('kegiatanPopup').style.display = 'block';
// }

// function closeKegiatanPopup() {
//     document.getElementById('kegiatanPopup').style.display = 'none';
// }

// function submitKegiatan() {
//     const namaKegiatan = document.getElementById('kegiatanInput').value;
//     const tanggalKegiatan = document.getElementById('kegiatanTanggal').value;

//     if (namaKegiatan && tanggalKegiatan) {
//         kegiatanDB.push({ nama: namaKegiatan, tanggal: tanggalKegiatan });
//         renderKegiatanList();
//         document.getElementById('kegiatanInput').value = ''; // Kosongkan input setelah kegiatan ditambahkan
//         document.getElementById('kegiatanTanggal').value = '';
//         alert("Kegiatan berhasil ditambahkan!");
//         closeKegiatanPopup(); // Tutup pop-up setelah kegiatan ditambahkan
//     } else {
//         alert("Mohon isi nama kegiatan dan tanggal!");
//     }
// }


// Fungsi untuk menampilkan menu yang dipilih dan menyembunyikan menu lainnya
function showMenu(menuId) {
    const allSections = document.querySelectorAll('.menu-item, .form-section');
    allSections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua bagian
    });

    const activeSection = document.getElementById(menuId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Tampilkan bagian yang dipilih
    }

    // Render ulang jika membuka menu tugas atau kegiatan
    if (menuId === 'tugas') {
        renderTugasList();
    } else if (menuId === 'kegiatan') {
        renderKegiatanList();
    } else if (menuId === 'penting-section') {
        renderPenting();
    }
}

// Fungsi untuk menampilkan tugas dan kegiatan terdekat di bagian penting
function renderPenting() {
    const tugasPenting = document.getElementById('tugasPenting');
    // const kegiatanPenting = document.getElementById('kegiatanPenting');

    tugasPenting.innerHTML = ''; // Kosongkan daftar sebelumnya
    // kegiatanPenting.innerHTML = ''; // Kosongkan daftar sebelumnya

    // Urutkan tugas berdasarkan deadline dan ambil 2 terdekat
    const tugasTerdekat = tugasDB
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 2);

    // Urutkan kegiatan berdasarkan tanggal dan ambil 2 terdekat
    // const kegiatanTerdekat = kegiatanDB
    //     .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
    //     .slice(0, 2);

    // Menampilkan 2 tugas terdekat
    tugasTerdekat.forEach(tugas => {
        let li = document.createElement('li');
        li.textContent = `${tugas.nama} - Deadline: ${tugas.deadline}`;
        li.classList.add('task-item');
        tugasPenting.appendChild(li);
    });

    // Menampilkan 2 kegiatan terdekat
    // kegiatanTerdekat.forEach(kegiatan => {
    //     let li = document.createElement('li');
    //     li.textContent = `${kegiatan.nama} - Tanggal: ${kegiatan.tanggal}`;
    //     li.classList.add('task-item');
    //     kegiatanPenting.appendChild(li);
    // });
}


// Event Listener untuk navigasi
document.getElementById('link-penting').addEventListener('click', function() { showMenu('penting-section'); });
document.getElementById('link-tugas').addEventListener('click', function() { showMenu('tugas'); });
// document.getElementById('link-kegiatan').addEventListener('click', function() { showMenu('kegiatan'); });
document.getElementById('link-mengenali-diri').addEventListener('click', function() { showMenu('psychology-test'); });


//untuk hide tombol
document.getElementById('link-penting').addEventListener('click', function() {
    const tombolTugas = document.getElementById('tombolAddTugas')
    // const tombolKegiatan = document.getElementById('tombolAddKegiatan')
    // const tombolremoveKegiatan = document.getElementById('remove-kegiatan')
    tombolTugas.style.display = 'none';
    // tombolKegiatan.style.display = 'none';
    // tombolremoveKegiatan.style.display = 'none';
})

document.getElementById('link-tugas').addEventListener('click', function() {
    const tombolTugas = document.getElementById('tombolAddTugas')
    // const tombolKegiatan = document.getElementById('tombolAddKegiatan');
    // const tombolremoveKegiatan = document.getElementById('remove-kegiatan');
    tombolTugas.style.display = 'block';
    // tombolKegiatan.style.display = 'none';
    // tombolremoveKegiatan.style.display = 'none';
})

// document.getElementById('link-kegiatan').addEventListener('click', function() {
//     const tombolTugas = document.getElementById('tombolAddTugas')
    // const tombolKegiatan = document.getElementById('tombolAddKegiatan')
    // const tombolremoveKegiatan = document.getElementById('remove-kegiatan')
    // tombolTugas.style.display = 'none';
    // tombolKegiatan.style.display = 'block';
    // tombolremoveKegiatan.style.display = 'block';
// })

document.getElementById('link-mengenali-diri').addEventListener('click', function() {
    const tombolTugas = document.getElementById('tombolAddTugas')
    // const tombolKegiatan = document.getElementById('tombolAddKegiatan')
    // const tombolremoveKegiatan = document.getElementById('remove-kegiatan')
    tombolTugas.style.display = 'none';
    // tombolKegiatan.style.display = 'none';
    // tombolremoveKegiatan.style.display = 'none';
})

// Tombol untuk menutup detail tugas
document.getElementById('close-details-btn').addEventListener('click', function() {
    document.getElementById('task-details').classList.add('hidden');
    console.log('ini ilang cok');
});




// Fungsi untuk menghapus tugas berdasarkan nama
function hapusTugas(namaTugas) {
    tugasDB = tugasDB.filter(tugas => tugas.nama !== namaTugas);
    renderTugasList(); // Tampilkan ulang daftar tugas setelah penghapusan
}
// // Fungsi untuk menghapus kegiatan berdasarkan nama
// function hapusKegiatan(namaKegiatan) {
//     kegiatanDB = kegiatanDB.filter(kegiatan => kegiatan.nama !== namaKegiatan);
//     renderkegiatanList(); // Tampilkan ulang daftar tugas setelah penghapusan
// }

// Tampilkan tugas awal saat halaman dimuat
renderTugasList()
// renderkegiatanList()

// Event listener untuk tombol hapus
document.getElementById("hapus-btn").addEventListener("click", function() {
    const taskTitle = document.getElementById('task-title').textContent;
    console.log(taskTitle);
    hapusTugas(taskTitle);
    document.getElementById('task-details').classList.add('hidden');
});
// // Event listener untuk tombol hapus kegiatan
// function removeKegiatanPopup() {
//     const kegiatanTitle = document.getElementById('kegiatan-title').textContent; // Mengambil judul kegiatan
//     console.log(kegiatanTitle); // Menampilkan judul kegiatan di konsol
//     hapusKegiatan(kegiatanTitle); // Memanggil fungsi hapusKegiatan dengan judul kegiatan
//     document.getElementById('kegiatan-details').classList.add('hidden'); // Menyembunyikan detail kegiatan
// }

// ini buat edit tugas
// Fungsi untuk menampilkan popup edit
function showEditPopup(index) {
    const tugas = tugasDB[index];
    document.getElementById('editTugasInput').value = tugas.nama;
    document.getElementById('editTugasDeadline').value = tugas.deadline;
    document.getElementById('editTugasIndex').value = index; // Menyimpan indeks tugas yang diedit
    document.getElementById('editPopup').style.display = 'block'; // Menampilkan popup edit
}

// Fungsi untuk menyimpan perubahan deadline tugas
function editDeadlineTugas() {
    const index = document.getElementById('editTugasIndex').value;
    const newDeadline = document.getElementById('editTugasDeadline').value;

    if (newDeadline) {
        // Update deadline di array tugasDB
        tugasDB[index].deadline = newDeadline;
        renderTugasList(); // Render ulang daftar tugas
        alert("Deadline berhasil diedit!");
        closeEditPopup(); // Tutup popup edit
    } else {
        alert("Mohon isi deadline yang baru!");
    }
}

// Fungsi untuk menutup popup edit
function closeEditPopup() {
    document.getElementById('editPopup').style.display = 'none';
}

// Contoh render daftar tugas (pastikan ada tombol edit untuk setiap tugas)
function renderTugasList() {
    const tugasList = document.getElementById('tugasList');
    tugasList.innerHTML = ''; // Kosongkan daftar sebelumnya

    tugasDB.forEach((tugas, index) => {
        let li = document.createElement('li');
        li.textContent = `${tugas.nama} - Deadline: ${tugas.deadline}`;
        li.classList.add('task-item');

        // Tambahkan tombol edit
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit Deadline';
        editButton.classList.add('new-list-btn'); // Tambahkan kelas baru
        editButton.onclick = function(event) {
            event.stopPropagation(); // Menghindari event click pada li
            showEditPopup(index); // Tampilkan popup edit untuk tugas ini
        };
        
        // Tambahkan tombol edit ke li
        li.appendChild(editButton);

        let activeTask = null;
        li.onclick = function() {
            if (activeTask === tugas) {
                // Jika tugas yang sama di klik lagi, tutup detail tugas
                document.getElementById('task-details').classList.add('hidden');
                activeTask = null; // Reset activeTask
            } else {
                // Tampilkan detail tugas
                showTaskDetails(tugas);
                activeTask = tugas; // Set activeTask ke tugas yang baru
            }
        };
        
        tugasList.appendChild(li);
    });
}



// ini buat edit tugas
// ini buat edit tugas



// ini buat edit kegiatan
// ini buat edit kegiatan
// function renderKegiatanList() {
//     const kegiatanList = document.getElementById('kegiatanList');
//     kegiatanList.innerHTML = ''; // Kosongkan daftar sebelumnya

//     kegiatanDB.forEach(kegiatan => {
//         let li = document.createElement('li');
//         li.textContent = `${kegiatan.nama} - Tanggal: ${kegiatan.tanggal}`;
//         li.classList.add('task-item');
//         kegiatanList.appendChild(li);
//     });

//     // tombol edit
//     let editKegiatan =  document.createElement('button');
//     editKegiatan.textContent = 'Edit Jadwal';
//     editKegiatan.classList.add('new-list-btn');
//     editKegiatan.onclick = function(event){
//         event.stopPropagation();
//         showEditKegiatanPopUp(index);
//     };

//     // menambahkan menu edit di list kegiatan
//     li.appendChild(editKegiatan);

//     let activeKegiatan = null;
//     li.onclick = function(){
//         if (activeKegiatan === kegiatan) {
//             // Jika kegiatan yang sama di klik lagi, tutup detail kegiatan
//             document.getElementById('kegiatan-details').classList.add('hidden');
//             activeKegiatan = null; // Reset activeKegiatan
//     } else {
//         // Tampilkan detail kegiatan
//         showKegiatanDetails(kegiatan);
//         activeKegiatan = kegiatan;
//     }
// }
// }
// ini buat edit kegiatan
// ini buat edit kegiatan


// detail profil
// detail profil
function showDetailProfil() {
    // Clear previous content (optional)
    document.getElementById('app').innerHTML = '';

    // Create the outer card div
    const card = document.createElement('div');
    card.className = 'card';
    card.id = 'profile-card'; // Added an ID for reference

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.className = 'close-btn';
    closeButton.innerHTML = '&times;'; // × symbol for close
    closeButton.onclick = function() {
      // Remove the card when close button is clicked
      document.getElementById('profile-card').remove();
    };

    // Create the profile section
    const profile = document.createElement('div');
    profile.className = 'profile';

    const profileImg = document.createElement('img');
    profileImg.src = 'https://via.placeholder.com/50';
    profileImg.alt = 'Profile Picture';

    const profileInfo = document.createElement('div');
    profileInfo.className = 'profile-info';

    const profileName = document.createElement('h3');
    profileName.textContent = 'Clark Jeffery';

    const profileEmail = document.createElement('p');
    profileEmail.textContent = 'clark@email.com';

    // Append name and email to profile info
    profileInfo.appendChild(profileName);
    profileInfo.appendChild(profileEmail);

    // Append image and profile info to profile section
    profile.appendChild(profileImg);
    profile.appendChild(profileInfo);

    // Create the balance section
    const balance = document.createElement('div');
    balance.className = 'balance';

    const balanceIcon = document.createElement('div');
    balanceIcon.className = 'balance-icon';
    balanceIcon.innerHTML = '&#36;';

    const balanceInfo = document.createElement('div');
    balanceInfo.className = 'balance-info';

    const balanceText = document.createElement('p');
    balanceText.textContent = 'Current Balance';

    const balanceAmount = document.createElement('h2');
    balanceAmount.textContent = '$1476';

    // ini buat logout
    // ini buat logout
    const logout = document.createElement('button')
    logout.textContent = 'Logout';
    logout.className = 'new-list-btn';

    logout.onclick = function() {
        // Remove the card when logging out
        document.getElementById('profile-card').remove();
  
        // Clear localStorage (or sessionStorage)
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        alert('You have been logged out.');
        window.location.href = '../index.html'; 
      };

    // ini buat logout
    // ini buat logout

    // Append text and amount to balance info
    balanceInfo.appendChild(balanceText);
    balanceInfo.appendChild(balanceAmount);

    // Append icon and info to balance section
    balance.appendChild(balanceIcon);
    balance.appendChild(balanceInfo);

    // Create the orders section
    const orders = document.createElement('div');
    orders.className = 'orders';

    const recentOrdersTitle = document.createElement('h4');
    recentOrdersTitle.textContent = 'Recent orders';

    const wishlist = document.createElement('p');
    wishlist.textContent = 'Wishlist';

    const fashionStudio = document.createElement('p');
    fashionStudio.textContent = 'Fashion studio';

    // Append orders to orders section
    orders.appendChild(logout);

    // Append profile, balance, and orders to card
    card.appendChild(closeButton); // Append the close button
    card.appendChild(profile);
    card.appendChild(orders);

    // Finally, append the card to the #app div
    document.getElementById('app').appendChild(card);
  }
// detail profil
// detail profil







