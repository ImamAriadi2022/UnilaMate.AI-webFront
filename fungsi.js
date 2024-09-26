let tugasDB = [
    { nama: "Tugas 1", deadline: "2024-09-18", },
    { nama: "Tugas 2", deadline: "2024-09-20" },
    { nama: "Tugas 3", deadline: "2024-09-22" }
];

let kegiatanDB = [
    { nama: "Kegiatan 1", tanggal: "2024-09-19" },
    { nama: "Kegiatan 2", tanggal: "2024-09-21" }
];

let currentTask; // current

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
function renderKegiatanList() {
    const kegiatanList = document.getElementById('kegiatanList');
    kegiatanList.innerHTML = ''; // Kosongkan daftar sebelumnya

    kegiatanDB.forEach(kegiatan => {
        let li = document.createElement('li');
        li.textContent = `${kegiatan.nama} - Tanggal: ${kegiatan.tanggal}`;
        li.classList.add('task-item');
        kegiatanList.appendChild(li);
    });
}

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
function showKegiatanDetails(kegiatan) {
    const detailsSection = document.getElementById('kegiatan-details');
    document.getElementById('kegiatan-title').textContent = kegiatan.nama;
    document.getElementById('kegiatan-tanggal').textContent = `Tanggal: ${kegiatan.tanggal}`;
    document.getElementById('kegiatan-description').textContent = kegiatan.deskripsi;
    detailsSection.classList.remove('hidden'); // Tampilkan sidebar detail
    detailsSection.style.display = 'block'; // Pastikan sidebar muncul
}


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


// Fungsi untuk menambah kegiatan baru
function openKegiatanPopup() {
    document.getElementById('kegiatanPopup').style.display = 'block';
}

function closeKegiatanPopup() {
    document.getElementById('kegiatanPopup').style.display = 'none';
}

function submitKegiatan() {
    const namaKegiatan = document.getElementById('kegiatanInput').value;
    const tanggalKegiatan = document.getElementById('kegiatanTanggal').value;

    if (namaKegiatan && tanggalKegiatan) {
        kegiatanDB.push({ nama: namaKegiatan, tanggal: tanggalKegiatan });
        renderKegiatanList();
        document.getElementById('kegiatanInput').value = ''; // Kosongkan input setelah kegiatan ditambahkan
        document.getElementById('kegiatanTanggal').value = '';
        alert("Kegiatan berhasil ditambahkan!");
        closeKegiatanPopup(); // Tutup pop-up setelah kegiatan ditambahkan
    } else {
        alert("Mohon isi nama kegiatan dan tanggal!");
    }
}


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
    const kegiatanPenting = document.getElementById('kegiatanPenting');

    tugasPenting.innerHTML = ''; // Kosongkan daftar sebelumnya
    kegiatanPenting.innerHTML = ''; // Kosongkan daftar sebelumnya

    // Urutkan tugas berdasarkan deadline dan ambil 2 terdekat
    const tugasTerdekat = tugasDB
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 2);

    // Urutkan kegiatan berdasarkan tanggal dan ambil 2 terdekat
    const kegiatanTerdekat = kegiatanDB
        .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
        .slice(0, 2);

    // Menampilkan 2 tugas terdekat
    tugasTerdekat.forEach(tugas => {
        let li = document.createElement('li');
        li.textContent = `${tugas.nama} - Deadline: ${tugas.deadline}`;
        li.classList.add('task-item');
        tugasPenting.appendChild(li);
    });

    // Menampilkan 2 kegiatan terdekat
    kegiatanTerdekat.forEach(kegiatan => {
        let li = document.createElement('li');
        li.textContent = `${kegiatan.nama} - Tanggal: ${kegiatan.tanggal}`;
        li.classList.add('task-item');
        kegiatanPenting.appendChild(li);
    });
}


// Event Listener untuk navigasi
document.getElementById('link-penting').addEventListener('click', function() { showMenu('penting-section'); });
document.getElementById('link-tugas').addEventListener('click', function() { showMenu('tugas'); });
document.getElementById('link-kegiatan').addEventListener('click', function() { showMenu('kegiatan'); });
document.getElementById('link-mengenali-diri').addEventListener('click', function() { showMenu('psychology-test'); });


//untuk hide tombol
document.getElementById('link-penting').addEventListener('click', function() {
    const tombolTugas = document.getElementById('tombolAddTugas')
    const tombolKegiatan = document.getElementById('tombolAddKegiatan')
    tombolTugas.style.display = 'none';
    tombolKegiatan.style.display = 'none';
})

document.getElementById('link-tugas').addEventListener('click', function() {
    const tombolTugas = document.getElementById('tombolAddTugas')
    const tombolKegiatan = document.getElementById('tombolAddKegiatan')
    tombolTugas.style.display = 'block';
    tombolKegiatan.style.display = 'none';
})

document.getElementById('link-kegiatan').addEventListener('click', function() {
    const tombolTugas = document.getElementById('tombolAddTugas')
    const tombolKegiatan = document.getElementById('tombolAddKegiatan')
    tombolTugas.style.display = 'none';
    tombolKegiatan.style.display = 'block';
})

document.getElementById('link-mengenali-diri').addEventListener('click', function() {
    const tombolTugas = document.getElementById('tombolAddTugas')
    const tombolKegiatan = document.getElementById('tombolAddKegiatan')
    tombolTugas.style.display = 'none';
    tombolKegiatan.style.display = 'none';
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

// Tampilkan tugas awal saat halaman dimuat
renderTugasList()

// Event listener untuk tombol hapus
document.getElementById("hapus-btn").addEventListener("click", function() {
    const taskTitle = document.getElementById('task-title').textContent;
    console.log(taskTitle);
    hapusTugas(taskTitle);
    document.getElementById('task-details').classList.add('hidden');
});






window.onload = function() {
    renderPenting(); // Jika bagian penting perlu di-render di awal
};
