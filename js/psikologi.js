

function testPsikologi(){
    console.log("submit berhasil")
    // Mengambil semua elemen input yang dipilih dari setiap pertanyaan
    const form = document.forms['quizForm'];
    let totalScore = 0;
    let psikologi = document.getElementById("psikologi-div");

    if (psikologi.style.display == "block"){
        psikologi.style.display = "none";
     } else {
        psikologi.style.display = "block";
     }


    
    // Loop untuk menghitung nilai setiap jawaban
    for (let i = 1; i <= 13; i++) {
        const selected = form[`q${i}`].value;
        if (selected) {
            totalScore += parseInt(selected);
        }
    }
    
    // Memutuskan apakah introvert atau ekstrovert berdasarkan skor
    let resultText = "";
    if (totalScore >= 36 && totalScore <= 60) {
        resultText = "Anda cenderung ekstrovert.";
    } else if (totalScore >= 12 && totalScore <= 35) {
        resultText = "Anda cenderung introvert.";
    } else {
        resultText = "Silakan isi semua pertanyaan.";
        alert("tolong isi form terlebih dahulu");
        psikologi.style.display = "none";
    }
    
        // Menampilkan hasil di halaman
        document.getElementById('result').innerText = resultText;
}


function closePopUpAllert(){
    let psikologi = document.getElementById("psikologi-div");
    if (psikologi.style.display == "block"){
        psikologi.style.display = "none";
     } else {
        psikologi.style.display = "block";
     }
}


// fungsi menampilkan hasil 
// function calculateScore() {

// }