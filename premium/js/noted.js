function catatan() {
    let dropNote = document.getElementById("note-section");
    if (dropNote.style.display == "none" || dropNote.style.display == "") {
        dropNote.style.display = "block";
    } else {
        dropNote.style.display = "none";
    }
}


const saveNote = document.getElementById("save-note-btn");

saveNote.addEventListener("click", function(save) {
    const deskripsiTugas = document.getElementById('note-input');
    const tombolSimpan = document.getElementById('save-note-btn');
    const tombolKembali = document.getElementById('back-note-btn');



    // Fungsi untuk mengosongkan textarea dengan konfirmasi
    function kosongkanTextarea() {
        const konfirmasi = confirm("Apakah kamu yakin ingin mengosongkan deskripsi?");
        if (konfirmasi) {
            deskripsiTugas.value = '';
        }
    }

    // Fungsi untuk memvalidasi sebelum menyimpan deskripsi tugas
    function simpanTugas() {
        const deskripsi = deskripsiTugas.value.trim(); // Menghapus spasi di awal/akhir
        if (deskripsi === "") {
            alert("Deskripsi tugas tidak boleh kosong!");
        } else {
            alert("Tugas berhasil disimpan!");
            // Tambahkan logika untuk menyimpan tugas di sini
        }
    }

    // Tambahkan event listener pada tombol "Simpan" untuk memvalidasi
    tombolSimpan.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah aksi default
        simpanTugas(); // Panggil fungsi validasi dan penyimpanan
    });

    // Tambahkan event listener pada tombol selain "Simpan" untuk mengosongkan textarea
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            // Jika tombol yang diklik bukan tombol "Simpan", kosongkan textarea dengan konfirmasi
            if (event.target !== tombolSimpan) {
                kosongkanTextarea(); // Panggil fungsi konfirmasi dan pengosongan
            }
        });
    });




    console.log('tombol klik berfungsi', save);
    // addSave();
});

function addSave() {
    let note = document.getElementById("note-input").value;
    let saveNote = document.getElementById("save-note-btn");
    
}