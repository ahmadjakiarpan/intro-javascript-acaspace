const namaDepan = "Ramdlan"
const namaBelakang = "Faqih"

const fullstackJavascript = {
    title: "Fullstack Javascript",
    description: "Kursus Fullstack Javascript Intensif",
    instructorName: "Ramdlan Faqih",
    location: "Indonesia",
    skill: ["HTML", "CSS", "Javascript", "React", "Node.js"],
}

// Kita akan belajar fullstackjavascript, dengan instruktur yang bernama Ramdlan Faqih asal dari Indonesia

// Concatenation
console.log("kita akan belajar" + " " + fullstackJavascript.title + " " + "dengan instruktur yang bernama" + " " + fullstackJavascript.instructorName)

// Tamplate Literals
// console.log('kita akan belajar ${fullstackJavascript.title} dengan instruktur yang bernama ${fullstackJavascript.instructorName}')

const dataUntukEmail = {
    namaProyek: "pertambangan",
    namaPenerima: "Bos Tambang",
    hari: "Sabtu",
    tanggal: "13 Jul 2025",
    tempat: "google Meet",
    namaPengirim: "Udin",
    jabatan: "Sekertaris",
    kontak: "081234567879"
}

console.log(dataUntukEmail.namaProyek)

const dataUntukEmailKedua = {
    namaProyek: "Jalan Tol",
    namaPenerima: "Client Tambang",
    hari: "Sabtu",
    tanggal: "13 Juli 2025",
    tempat: "Google Meet",
    namaPengirim: "Udin",
    jabatan: "Sekertaris",
    kontak: "08123456789"
}


// DRY : Don't Repeat Yourself
console.log(`
    Subjek: undangan Rapat Proyek ${dataUntukEmailKedua.namaProyek}
    YTH ${dataUntukEmailKedua.namaPenerima}`)