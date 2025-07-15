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
    batasWaktuConfirm: "14 Juli 2025",
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
    batasWaktuConfirm: "15 Juli 2025",
    namaAnda: "Kasnudin",
    jabatan: "HRD",
    perusahaan: "PT. IKN",
    kontakAnda: "08123456689"   
}

console.log(`
    subjek: undangan rapat proyek ${dataUntukEmailKedua.namaProyek}
    Yth. ${dataUntukEmailKedua.namaPenerima}
    Saya harap email ini menjangkau Anda dalam keadaan baik.
    Saya ingin mengundang Anda untuk menghadiri rapat proyek ${dataUntukEmailKedua.namaProyek} yang akan diadakan pada:
    Hari/tanggal: ${dataUntukEmailKedua.hari},${dataUntukEmailKedua.tanggal}
    Waktu: ${dataUntukEmailKedua.waktu}
    Tempat ${dataUntukEmailKedua.tempat}
    Tujuan rapat ini adalah untuk membahas perkembangan terkini proyek dan langkah selanjutnya. Mohon konfirmasi kehadiran Anda sebelum ${dataUntukEmailKedua.batasWaktuConfirm}.
    Terima kasih atas perhatian dan kerja samanya.
    Hormat Saya,
    ${dataUntukEmailKedua.namaAnda}
    ${dataUntukEmailKedua.jabatan}
    ${dataUntukEmailKedua.perusahaan}
    ${dataUntukEmailKedua.kontakAnda}`)


    console.log(`
    subjek: undangan rapat proyek ${dataUntukEmail.namaProyek}
    Yth. ${dataUntukEmail.namaPenerima}
    Saya harap email ini menjangkau Anda dalam keadaan baik.
    Saya ingin mengundang Anda untuk menghadiri rapat proyek ${dataUntukEmail.namaProyek} yang akan diadakan pada:
    Hari/tanggal: ${dataUntukEmail.hari},${dataUntukEmail.tanggal}
    Waktu: ${dataUntukEmail.waktu}
    Tempat ${dataUntukEmail.tempat}
    Tujuan rapat ini adalah untuk membahas perkembangan terkini proyek dan langkah selanjutnya. Mohon konfirmasi kehadiran Anda sebelum ${dataUntukEmail.batasWaktuConfirm}.
    Terima kasih atas perhatian dan kerja samanya.
    Hormat Saya,
    ${dataUntukEmail.namaAnda}
    ${dataUntukEmail.jabatan}
    ${dataUntukEmail.perusahaan}
    ${dataUntukEmail.kontakAnda}`)


    // 2. 2️⃣ Method & Property

const nama = "ramdlan faqih"
console.log(nama)

const namaTerpisah = nama.split (" ")
console.log(namaTerpisah)

const namaDepan = namaTerpisah[0]
console.log(namaDepan)

const namaBelakang = namaTerpisah[1]
console.log(namaBelakang)

const hurufAwalDepan = namaDepan.charAt(0)
console.log(hurufAwalDepan)

const hurufSisaDepan = namaDepan.slice(1)
console.log(hurufSisaDepan)

const hurufAwalBelakang = namaBelakang.charAt(0)
console.log(hurufAwalBelakang)

const hurufSisaBelakang = namaBelakang.slice(1)
console.log(hurufSisaBelakang)

const kapitalHurufAwalDepan = hurufAwalDepan.toUpperCase()
console.log(kapitalHurufAwalDepan)

const kapitalHurufAwalBelakang = hurufAwalBelakang.toUpperCase()
console.log(kapitalHurufAwalBelakang)

const formatNamaBaruDepan = kapitalHurufAwalDepan + hurufSisaDepan
console.log(formatNamaBaruDepan)

const formatNamaBaruBelakang = kapitalHurufAwalBelakang + hurufSisaBelakang
console.log(formatNamaBaruBelakang)

const formatBaru = formatNamaBaruDepan + " " + formatNamaBaruBelakang
console.log(formatBaru)