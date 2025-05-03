/**
 * Menghitung dan menampilkan konversi kalori dari input nutrisi.
 *
 * Fungsi ini mengambil nilai numerik dari field input dengan ID 'lemak', 'protein',
 * 'karbohidrat', dan 'mineral', lalu menghitung kontribusi kalori masing-masing:
 * - Lemak: dikalikan dengan 9,
 * - Protein: dikalikan dengan 4,
 * - Karbohidrat: dikalikan dengan 4,
 * - Mineral: diatur menjadi 0 (tidak memberikan kalori).
 *
 * Selanjutnya, fungsi ini menghitung total kalori (tanpa mineral) dan memperbarui inner HTML
 * dari elemen dengan ID 'hasil' untuk menampilkan rincian dan total kalori.
 * Selain itu, fungsi ini mengelola kelas CSS untuk menangani animasi dan transisi antarmuka,
 * khususnya dengan meng-remove dan menambahkan kelas 'show' pada kontainer hasil dan
 * menambahkan kelas 'show-result' pada kontainer utama.
 *
 * @function hitungKalori
 * @returns {void}
 */
function hitungKalori() {
    // Mengambil dan mengkonversi nilai input lemak ke angka, jika nilai tidak valid maka digunakan 0
    const lemak = parseFloat(document.getElementById('lemak').value) || 0; 
    // Mengambil dan mengkonversi nilai input protein ke angka, jika tidak valid maka digunakan 0
    const protein = parseFloat(document.getElementById('protein').value) || 0; 
    // Mengambil dan mengkonversi nilai input karbohidrat ke angka, jika tidak valid maka digunakan 0
    const karbohidrat = parseFloat(document.getElementById('karbohidrat').value) || 0; 
    // Mengambil dan mengkonversi nilai input mineral ke angka, jika tidak valid maka digunakan 0
    const mineral = parseFloat(document.getElementById('mineral').value) || 0; 

    // Menghitung kalori dari lemak (lemak * 9 kalori per gram)
    const kaloriLemak = lemak * 9;
    // Menghitung kalori dari protein (protein * 4 kalori per gram)
    const kaloriProtein = protein * 4;
    // Menghitung kalori dari karbohidrat (karbohidrat * 4 kalori per gram)
    const kaloriKarbohidrat = karbohidrat * 4;
    // Mineral tidak menghasilkan kalori, sehingga nilainya 0
    const kaloriMineral = 0; 

    // Menjumlahkan kalori yang didapat dari lemak, protein, dan karbohidrat untuk mendapatkan total kalori
    const totalKalori = kaloriLemak + kaloriProtein + kaloriKarbohidrat;

    // Membuat template HTML untuk menampilkan hasil konversi energi
    const hasil = `
        <div class="result-icon">⚡</div>
        <div class="result-title">Hasil Konversi Energi</div>
        <ul>
          <li><span>Lemak</span>: <b>${kaloriLemak}</b> Kalori</li>
          <li><span>Protein</span>: <b>${kaloriProtein}</b> Kalori</li>
          <li><span>Karbohidrat</span>: <b>${kaloriKarbohidrat}</b> Kalori</li>
          <li><span>Mineral</span>: <b>${kaloriMineral}</b> Kalori</li>
        </ul>
        <span class="total-energi">Total Energi: <b>${totalKalori}</b> Kalori</span>
    `;

    // Mengambil elemen dengan id 'hasil'
    const hasilDiv = document.getElementById('hasil');
    // Menyisipkan HTML hasil ke dalam elemen hasilDiv
    hasilDiv.innerHTML = hasil;
    // Menghapus kelas 'show' untuk mengatur ulang animasi atau tampilan jika diperlukan
    hasilDiv.classList.remove('show');
    // Membaca properti offsetWidth untuk memaksa reflow/restart animasi CSS
    void hasilDiv.offsetWidth;
    // Menambahkan kembali kelas 'show' agar tampilan hasil muncul dengan animasi
    hasilDiv.classList.add('show');

    // Mengambil elemen dengan kelas 'main-flex'
    const mainFlex = document.querySelector('.main-flex');
    // Jika elemen mainFlex ditemukan dan belum memiliki kelas 'show-result'
    if (mainFlex && !mainFlex.classList.contains('show-result')) {
        // Tambahkan kelas 'show-result' agar hasil tampilan bisa diubah tampilannya (misal: layout)
        mainFlex.classList.add('show-result');
    }
}