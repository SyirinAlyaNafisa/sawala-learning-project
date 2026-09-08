// MATERI: DESTRUCTURING & SPREAD OPERATOR

// ----- 1. Destructuring Object (cara mengambil nilai dari array atau object lalu menyimpannya ke dalam variabel.)-----
const produk = {
  nama: "Laptop",
  harga: 8000000,
  stok: 10,
};
// cara lama (tanpa destructuring)
const namaLama = produk.nama;
const hargaLama = produk.harga;

//cara baru (dengan destructuring) - ambil beberapa properti sekaligus
const { nama, harga } = produk;
console.log(nama, harga);

// ----- 2. Destructuring dengan nama variabel berbeda -----
const { nama: namaProduk, harga: hargaProduk } = produk;
console.log(namaProduk, hargaProduk);

// ----- 3. Destructruring Array -----
const buah = ["apel", "jeruk", "mangga"];
//cara lama
const buahPertamaLama = buah[0];
const buahKeduaLama = buah[1];
//cara baru
const [pertama, kedua, ketiga] = buah;
console.log(pertama, kedua, ketiga);


// ----- 1. Spread Operator pada Object -----
// spread = "membuka" isi object/array, lalu bisa dipakai buat gabung/copy
const produkBaru = { ...produk, diskon: true };
console.log(produkBaru);

// ----- 2. Spread Operator pada Array -----
const buahBaru = [...buah, "melon"];
console.log(buahBaru);

// gabungin 2 array menggunakan spread(menyalin&menggabungkan data)
const sayur = ["wortel", "bayam"];
const semuaMakananan = [...buah, ...sayur];
console.log(semuaMakananan);

// ----- 3. Update 1 properti object tanpa mengubah yang lain -----
const produkUpdate = { ...produk, harga: 7500000 };
console.log(produkUpdate);