import { fetchAllSurah, fetchSurahDetail } from './api.js';
import { renderSurahList, renderVerseDetail } from './ui.js';

const mainContent = document.getElementById('mainContent');
const loader = document.getElementById('loader');
const btnBack = document.getElementById('btnBack');

const init = async () => {
    showLoader(true);
    try {
        const surahs = await fetchAllSurah();
        mainContent.innerHTML = renderSurahList(surahs);
        attachCardListeners();
    } catch (err) {
        mainContent.innerHTML = `<div class="alert alert-danger">Gagal memuat data. Mohon cek koneksi.</div>`;
    } finally {
        showLoader(false);
    }
};

const attachCardListeners = () => {
    document.querySelectorAll('.card-surah').forEach(card => {
        card.addEventListener('click', () => {
            const nomor = card.dataset.nomor;
            loadDetail(nomor);
        });
    });
};

const loadDetail = async (nomor) => {
    showLoader(true);
    window.scrollTo(0, 0);
    try {
        const detail = await fetchSurahDetail(nomor);
        mainContent.innerHTML = renderVerseDetail(detail);
        btnBack.classList.remove('d-none');
    } catch (err) {
        alert("Gagal memuat ayat.");
    } finally {
        showLoader(false);
    }
};

const showLoader = (status) => {
    loader.classList.toggle('d-none', !status);
    if (status) mainContent.innerHTML = '';
};

// Event listener untuk tombol kembali
btnBack.addEventListener('click', () => {
    btnBack.classList.add('d-none');
    init();
});

// Jalankan aplikasi
init();