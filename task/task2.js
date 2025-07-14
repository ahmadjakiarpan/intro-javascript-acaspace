// 1️⃣ String Concatenation (Template Literals)
// Subjek: Undangan Rapat Proyek [Nama Proyek]
// Isi:
// Yth. [Nama Penerima],
// Saya harap email ini menjangkau Anda dalam keadaan baik. 
// Saya ingin mengundang Anda untuk menghadiri rapat proyek [Nama Proyek] yang akan diadakan pada:
// Hari/Tanggal: [Hari], [Tanggal]
// Waktu: [Waktu]
// Tempat: [Tempat/Link Google Meet]
// Tujuan rapat ini adalah untuk membahas perkembangan terkini proyek dan langkah selanjutnya. Mohon konfirmasi kehadiran Anda sebelum [Batas waktu konfirmasi]. 
// Terima kasih atas perhatian dan kerja samanya. 
// Hormat saya,
// [Nama Anda]
// [Jabatan/Posisi]
// [Perusahaan]
// [Kontak Anda]

const dataUntukEmail = {
    namaProyek: "Hambalang",
    namaPenerima: "Bos Proyek",
    hari: "Senin",
    tanggal: "15 Juli 2025",
    waktu: "14:00",
    tempat: "Gmeet",
    namaAnda: "Supardi",
    jabatan: "Manager",
    perusahaan: "PT. Hambalang",
    kontakAnda: "08123456789"
}

const dataUntukEmailKedua = {
    namaProyek: "IKN",
    namaPenerima: "Mandor",
    hari: "Rabu",
    tanggal: "16 Juli 2025",
    waktu: "10:00",
    tempat: "Gmeet",
    namaAnda: "Kasnudin",
    jabatan: "HRD",
    perusahaan: "PT. IKN",
    kontakAnda: "08123456689"   
}

console.log(`subjek undangan rapat proyek ${dataUntukEmail.namaProyek}`)
