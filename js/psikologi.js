// Membuat elemen HTML dan menambahkan CSS di dalam JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Membuat dan menambahkan elemen modal untuk hasil psikologi
    const modal = document.createElement('div');
    modal.id = 'resultModal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.textAlign = 'center';

    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#333';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';

    const message = document.createElement('p');
    message.innerText = 'Test psikologi telah selesai';
    
    const checkmark = document.createElement('div');
    checkmark.id = 'checkmark';
    checkmark.style.fontSize = '50px';
    checkmark.style.display = 'none';
    checkmark.innerText = '✔';

    const resultTextEl = document.createElement('p');
    resultTextEl.id = 'result';

    const backButton = document.createElement('button');
    backButton.innerText = 'Kembali';
    backButton.className = 'new-list-btn';
    backButton.onclick = function() {
        modal.style.display = 'none'; // Menyembunyikan modal
    };

    modalContent.appendChild(message);
    modalContent.appendChild(checkmark);
    modalContent.appendChild(resultTextEl);
    modalContent.appendChild(backButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Menambahkan CSS untuk animasi ceklis
    const style = document.createElement('style');
    style.textContent = `
        @keyframes checkmark-animation {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
        }
        #checkmark {
            color: green;
            animation: checkmark-animation 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);

    // Fungsi untuk menghitung hasil psikologi
    window.testPsikologi = function(event) {
        event.preventDefault(); // Mencegah halaman refresh

        try {
            console.log("submit berhasil");

            const form = document.forms['quizForm'];
            let totalScore = 0;

            // Loop untuk menghitung nilai setiap jawaban
            for (let i = 1; i <= 13; i++) {
                const selected = form[`q${i}`];
                if (selected && selected.value) {
                    totalScore += parseInt(selected.value);
                } else {
                    alert(`Silakan isi pertanyaan nomor ${i}`);
                    return; // Keluar dari fungsi jika ada pertanyaan yang belum diisi
                }
            }

            // Menentukan hasil kepribadian
            let resultText = "";
            if (totalScore >= 36 && totalScore <= 100) {
                resultText = "Anda cenderung ekstrovert.";
            } else if (totalScore >= 12 && totalScore <= 35) {
                resultText = "Anda cenderung introvert.";
            } else {
                alert("Silakan isi semua pertanyaan.");
                return;
            }

            // Menampilkan modal dan ceklis
            modal.style.display = "flex"; // Tampilkan modal
            checkmark.style.display = "block"; // Tampilkan ceklis

            // Menambahkan delay untuk animasi ceklis
            setTimeout(function() {
                resultTextEl.innerText = resultText; // Tampilkan hasil di modal
            }, 1000); // Tunda 1 detik untuk animasi ceklis
        } catch (error) {
            console.error("Terjadi kesalahan:", error.message);
            alert("Terjadi kesalahan. Silakan coba lagi.");
        }
    };
});






// ini js baru

function newTestPsikologi(event) {
    event.preventDefault(); // Mencegah refresh halaman
    console.log("submit berhasil");

    // Tampilkan div baru
    document.getElementById('new-psikologi-div').style.display = "block";
    
    // Ambil semua elemen input dari formulir baru (asumsi form bernama newQuizForm)
    const form = document.forms['newQuizForm'];
    let totalScore = 0;
    let newPsikologiDiv = document.getElementById("new-psikologi-div");

    // Loop untuk menghitung nilai setiap jawaban
    for (let i = 1; i <= 13; i++) {
        const selected = form[`q${i}`].value;
        if (selected) {
            totalScore += parseInt(selected);
        }
    }

    // Tentukan hasil berdasarkan skor
    let resultText = "";
    if (totalScore >= 36 && totalScore <= 100) {
        resultText = "Anda cenderung ekstrovert.";
    } else if (totalScore >= 12 && totalScore <= 35) {
        resultText = "Anda cenderung introvert.";
    } else {
        resultText = "Silakan isi semua pertanyaan.";
        alert("Tolong isi form terlebih dahulu");
        newPsikologiDiv.style.display = "none"; // Sembunyikan pop-up jika belum lengkap
        return;
    }
    
    // Tampilkan hasil pada halaman
    document.getElementById('new-result').innerText = resultText;
}

function newClosePopUpAlert() {
    const newPsikologiDiv = document.getElementById('new-psikologi-div');
    newPsikologiDiv.style.display = "none";
}
