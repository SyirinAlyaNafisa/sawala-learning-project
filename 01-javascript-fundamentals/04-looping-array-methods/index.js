// MATERI : LOOPING & ARRAY METHODS

// LOOPING
// ----- 1. for loop dasar (sudah tahu jumlah perulangan nya) -----
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// ---- 2. while loop (selama kondisi ini benar, lanjutkan) -----
let angka = 1;
while (angka <= 5) {
  console.log("while:", angka);
  angka++;
}

// ----- 3. do while (kode di jalankan lebih dahulu, baru kondisi di periksa) -----
let number = 1;
do {
  console.log(number);
  angka++;
} while (angka <= 3);
//note :
// do : tampilkan dulu
//while : baru di cek

// ----- 4. break (berhenti) ----
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // berhenti total pas ketemu angka 5
  console.log("break demo:", i);
}

// ----- 5. continue (skip) ----
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; //skip angka 3 aja
  console.log("continue demo :", i);
}

// ----- 6. Latihan: print angka genap 1-10 -----
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("genap:", i);
  }
}

// ARRAY METHODS

const daftarProduk = [
  { id: 1, nama: "Laptop", harga: 8000000 },
  { id: 2, nama: "Mouse", harga: 150000 },
  { id: 3, nama: "Keyboard", harga: 3500000 },
];

// map() - ubah tiap item, hasil array baru
const namaProduk = daftarProduk.map((p) => p.nama);
console.log("Nama produk:", namaProduk);

// filter() - ambil yang sesuai syarat
const produkMahal = daftarProduk.filter((p) => p.harga > 200000);
console.log("Produk mahal: ", produkMahal);

// find() - cari 1 item pertama yang cocok
const cariKeyboard = daftarProduk.find((p) => p.nama === "Keyboard");
console.log("Cari Keyboard: ", cariKeyboard);

// forEach() - loop biasa, gak return apa apa
daftarProduk.forEach((p) => {
  console.log(`${p.nama} : ${p.harga}`);
});

// reduce() - gabungin semua jadi 1 nilai
const hargaTotal = daftarProduk((p) => total + p.harga, 0);
console.log("Total harga:", hargaTotal);

// MINI EXERCISE : PENGOLAHAN DATA SISWA

const siswa = [
  { nama: "Aldi", nilai: 85 },
  { nama: "Bila", nilai: 60 },
  { nama: "Cici", nilai: 92 },
  { nama: "Donal", nilai: 45 },
  { nama: "Erlyta", nilai: 78 },
];
//1. Cari siswa yang lulus (nilai >=75)
function siswaLulus(data) {
  return data.filter((s) => s.nilai >= 75);
}

// 2. Hitung rata rata nilai
function nilaiRataRata(data) {
  const total = data.reduce((total, s) => total + s.nilai, 0);
  return total / data.length;
}

// 3. Buat daftar info string "nama: nilai"
function infoSiswa(data) {
  return data.map((s) => `${s.nama} : ${s.nilai}`);
}

// 4. Cari nilai tertinggi
function nilaiTertinggi(data) {
  return data.reduce((tertinggi, s) =>
    s.nilai > tertinggi.nilai ? s : tertinggi,
  );
}

console.log("Siswa lulus:", siswaLulus(siswa));
console.log("Rata-rata nilai:", nilaiRataRata(siswa));
console.log("Info siswa:", nilaiTertinggi(siswa));
