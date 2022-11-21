// SPREAD OPERATOR
// MEMECAH ITERABLE MENJADI SINGLE ELEMENT
// const MHS = [`Galih`, `Arizza`, `Candra`];
// console.log(...MHS);
// console.log(...MHS[0]);

// kapan menggunakan spread operator?
// 1. untuk menggabungkan 2 array
// const DOSEN = [`Doddy`, `Bambang`, `Taufan`];
// const ORANG = [...MHS, `Aji`, ...DOSEN];
// console.log(ORANG);

// 2. meng-copy array
// Jika menggunakan MHS1 = MHS ini bukan mengcopy tapi mereferensikan, sehingga jika nanti akan melakukan update pada varibale MHS1 akan mengupdate juga variabel MHS
// const MHS1 = [...MHS];
// MHS1[0] = `Fajar`;
// console.log(MHS1);
// console.log(MHS);

// contoh lain
// mengambil content dari element
// const LIMHS = document.querySelectorAll("ul li");
// // ubah return Nodelist menjadi array
// const MHS = [...LIMHS].map((m) => m.textContent);
// console.log(MHS);

// contoh lain
// membuat animasi pada setaip huruf jika di hover
const H1 = document.querySelector(".nama");
const HURUF = [...H1.textContent].map((h) => `<span>${h}</span>`).join("");
H1.innerHTML = HURUF;
// console.log(HURUF);
