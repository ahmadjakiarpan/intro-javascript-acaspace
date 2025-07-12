// VAR
var name = "Jaki";
console.log (name) // "Jaki"

// Reassign (mengganti nilai)
name = "Jaber";
console.log (name) // "Jaber"

// Redeclare (deklarasi ulang, diperbolehkan)
var name = "Jipeng";
console.log (name)  // "Jipeng"

// LET
let age = 25;
console.log (age)  // 25

//Reassign (mengganti nilai)
age = 26;
console.log (age)  // 26

// Redeclare (TIDAK diperbolehkan, akan error)
//let age = 27; // syntaxError 'age' has already been declared

// CONST
const country = "Indonesia";
console.log (country)  // Indonesia

// reassign (TIDAK diperbolehkan, akan error)
// country = "Spanyol"; // TypeError: Assignment to constant variable.

// redeclare (TIDAK diperbolehkan, akan error)
// const country = "Belgia"; // SyntaxError: Identifier 'country has already been declared.

// Namun, Jika const berupa object atau array, isinya masih bisa diubah

const person = {name : "Jaki"};
person.name = "Jaber"
console.log (person) // { name : "Jaber" }