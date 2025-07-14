
// 1. Srtuktur data

// object of array
const samsungs22ultra = {
    title: "Samsung S22 Ultra",
    specification: "Camera 50M, Ram 12GB, Fast Charger.",
    price: 5000000,
    discount: true,
    color: ["white", "black", "blue"],

}

const samsunggalaxym13 = {
    title: "Samsung galaxy M13",
    specification: "Camera 20M, Ram 6GB, internal up to 1TB.",
    price: 2000000,
    discount: true,
    color: ["white", "black", "blue"],
}

const samsunggalaxym33 = {
    title: "Samsung galaxy M33",
    specification: "Camera 30M, Ram 8GB, internal up to 1TB.",
    price: 3000000,
    discount: false,
    color: ["brown", "black", "white"],
}


const samsunggalaxym53 = {
    title: "Samsung galaxy M53",
    specification: "Camera 30M, Ram 8GB, chipset up to date.",
    price: 3500000,
    discount: true,
    color: ["brown", "black", "blue"],
}

// array of object

const samsungGalaxy = [
    {
    title: "Samsung S22 Ultra",
    specification: "Camera 50M, Ram 12GB, Fast Charger.",
    price: 5000000,
    discount: true,
    color: ["white", "black", "blue"],

    },
    {
    title: "Samsung galaxy M13",
    specification: "Camera 20M, Ram 6GB, internal up to 1TB.",
    price: 2000000,
    discount: true,
    color: ["white", "black", "blue"],
    },
    {
    title: "Samsung galaxy M33",
    specification: "Camera 30M, Ram 8GB, internal up to 1TB.",
    price: 3000000,
    discount: false,
    color: ["brown", "black", "white"],
    },
    {
    title: "Samsung galaxy M53",
    specification: "Camera 30M, Ram 8GB, chipset up to date.",
    price: 3500000,
    discount: true,
    color: ["brown", "black", "blue"],
    },
]

// 2. Cek nilai minimal KKM dari 5 data siswa

let KKM = 75;
let diogo = 80;
let jota = 85;
let andre = 70;
let silva = 75;
let ruth = 65;
// console.log(diogo >= KKM) // true
// console.log(jota >= KKM) // true
// console.log(andre >= KKM) // false
// console.log(silva >= KKM) // true
// console.log(ruth >= KKM) // false

// 3. Perbandingan login (object vs object)

let IdDaftar = {
    name: "Jaki",
    email: "jakiarpan@gmail.com",
    password: "12345"

}

let IdLogin = {
    name: "Jaki",
    email: "jakiarpan@gmail.com",
    password: "12345"
}
console.log(IdLogin == IdDaftar)

