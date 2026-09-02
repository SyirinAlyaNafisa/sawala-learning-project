// MATERI : OBJECT & ARRAY

// ---- 1. Array  dasar -----
const buah = ["apel", "jeruk", "mangga"];
console.log(buah[0]);
console.log(buah.length);

// ----- 2. Object  dasar -----
const produk = {
  nama: "Komputer",
  harga: 12000000,
  stok: 10,
};
console.log(produk.nama);
console.log(produk["harga"]);

// ----- 3. Array berisi object -----
const daftarProduk = [
  { id: 1, nama: "laptop", harga: 8000000 },
  { id: 2, nama: "Mouse", harga: 150000 },
  { id: 3, nama: "Keyboard", harga: 350000 },
];

// ----- 4. map() - ubah tiap item -----
const namaProduk = daftarProduk.map((p) => p.nama);
console.log(namaProduk);

//----- 5. filter() - ambil yang sesuai syarat -----
const produkMahal = daftarProduk.filter((p) => p.harga > 200000);
console.log(produkMahal);

//----- 6. Find() - cari satu item -----
const cariMouse = daftarProduk.find((p) => p.nama === "Mouse");
console.log(cariMouse);

//----- 7. forEach() - loop biasa -----
daftarProduk.forEach((p) => {
  console.log(`${p.nama}: Rp${p.harga}`);
});

//----- 8. reduce() - gabungin jadi 1 nilai -----
const totalHarga = daftarProduk.reduce((total, p) => total + p.harga, 0);
console.log("Total harga :", totalHarga);
