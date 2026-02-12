const BASE_URL = "https://equran.id/api/v2";

export const fetchAllSurah = async () => {
    const response = await fetch(`${BASE_URL}/surat`);
    const data = await response.json();
    return data.data;
};

export const fetchSurahDetail = async (nomor) => {
    const response = await fetch(`${BASE_URL}/surat/${nomor}`);
    const data = await response.json();
    return data.data;
};