let tugasDB = [
    { nama: "Tugas 1", deadline: "2024-09-18" },
    { nama: "Tugas 2", deadline: "2024-09-20" },
    { nama: "Tugas 3", deadline: "2024-09-22" }
];

// Fungsi untuk menampilkan daftar tugas
function tampilkanTugas() {
    const daftarTugasDiv = document.getElementById("daftar-tugas");
    daftarTugasDiv.innerHTML = ""; // Bersihkan konten sebelumnya
    tugasDB.forEach(tugas => {
        const tugasItem = document.createElement("div");
        tugasItem.textContent = `${tugas.nama} (Deadline: ${tugas.deadline})`;
        daftarTugasDiv.appendChild(tugasItem);
    });
}

// Fungsi untuk menghapus tugas berdasarkan nama
function hapusTugas(namaTugas) {
    tugasDB = tugasDB.filter(tugas => tugas.nama !== namaTugas);
    tampilkanTugas(); // Tampilkan ulang daftar tugas setelah penghapusan
}

// Tampilkan tugas awal saat halaman dimuat
tampilkanTugas();

// Event listener untuk tombol hapus
document.getElementById("hapus-btn").addEventListener("click", function() {
    const namaTugas = document.getElementById("task-title").value;
    hapusTugas(namaTugas);
});
