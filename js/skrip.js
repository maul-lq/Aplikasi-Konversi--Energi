function hitungKalori() {
    const lemak = parseFloat(document.getElementById('lemak').value) || 0;
    const protein = parseFloat(document.getElementById('protein').value) || 0;
    const karbohidrat = parseFloat(document.getElementById('karbohidrat').value) || 0;
    const mineral = parseFloat(document.getElementById('mineral').value) || 0;

    const kaloriLemak = lemak * 9;
    const kaloriProtein = protein * 4;
    const kaloriKarbohidrat = karbohidrat * 4;
    const kaloriMineral = 0; // Mineral tidak menghasilkan kalori

    const totalKalori = kaloriLemak + kaloriProtein + kaloriKarbohidrat;

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

    const hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = hasil;
    hasilDiv.classList.remove('show');
    void hasilDiv.offsetWidth;
    hasilDiv.classList.add('show');

    const mainFlex = document.querySelector('.main-flex');
    if (mainFlex && !mainFlex.classList.contains('show-result')) {
        mainFlex.classList.add('show-result');
    }
}