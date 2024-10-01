// fungsi.js

// Fungsi untuk mengambil data dari API dan menampilkannya di console
async function getDataFromAPI() {
    try {
        const response = await fetch('https://backend-unila-mate-vercel.vercel.app');
        
        // Mengecek apakah respons sukses
        if (!response.ok) {
            throw new Error('Jaringan error: ' + response.status);
        }

        // Mengubah respons menjadi JSON
        const data = await response.json();

        // Menampilkan data di console
        console.log(data);
    } catch (error) {
        // Menampilkan error di console jika ada masalah
        console.error('Error mengambil data:', error);
    }
}

// Memanggil fungsi untuk mengambil data dari API dan menampilkan di console
getDataFromAPI();
