export const renderSurahList = (surahs) => {
    return `
        <div class="row g-4">
            ${surahs.map(s => `
                <div class="col-md-6 col-lg-4">
                    <div class="card card-surah p-3 h-100" data-nomor="${s.nomor}">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <span class="badge bg-success rounded-pill me-3">${s.nomor}</span>
                                <div>
                                    <h6 class="mb-0 fw-bold">${s.namaLatin}</h6>
                                    <small class="text-muted">${s.arti}</small>
                                </div>
                            </div>
                            <div class="arabic-text fs-4" style="line-height:1">${s.nama}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
};

export const renderVerseDetail = (data) => {
    let html = `
        <div class="text-center mb-5 bg-white p-4 rounded-4 shadow-sm">
            <h2 class="fw-bold" style="color: #195d11">${data.namaLatin}</h2>
            <p class="text-muted">${data.arti} • ${data.tempatTurun} • ${data.jumlahAyat} Ayat</p>
        </div>
    `;

    // Logika Basmallah: Bukan Al-Fatihah (1) & Bukan At-Taubah (9)
    if (data.nomor !== 1 && data.nomor !== 9) {
        html += `<div class="text-center basmallah mb-5">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>`;
    }

    html += `<div class="verses-wrapper">`;
    data.ayat.forEach(ayat => {
        html += `
            <div class="verse-container shadow-sm">
                <div class="arabic-text mb-4">
                    ${ayat.teksArab} <span class="verse-number">${ayat.nomorAyat}</span>
                </div>
                <div class="mt-3 border-start border-4 ps-3 border-success">
                    <p class="mb-0 text-secondary leading-relaxed">${ayat.teksIndonesia}</p>
                </div>
            </div>
        `;
    });
    html += `</div>`;

    return html;
};