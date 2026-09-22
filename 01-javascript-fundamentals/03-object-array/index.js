// MATERI : OBJECT & ARRAY

// ---- 1. Array (sekumpulan data yang memiliki urutan)  dasar -----
const buah = ["apel", "jeruk", "mangga"];

console.log(buah[0]); // index pertama
console.log(buah.length); // jumlah item
buah.push("pisang"); // nambah item di akhir
console.log(buah);
buah.pop(); // hapus item terakhir
console.log(buah);

// ----- 2. Object (key:value) -----
const produk = {
  nama: "Komputer",
  harga: 12000000,
  stok: 10,
};
console.log(produk.nama);
console.log(produk.harga);

// ----- 3. Array berisi object -----
const daftarProduk = [
  { id: 1, nama: "laptop", harga: 8000000 },
  { id: 2, nama: "Mouse", harga: 150000 },
  { id: 3, nama: "Keyboard", harga: 350000 },
  { id: 4, nama: "Monitor", harga: 550000 },
];
console.log(daftarProduk);
console.log(daftarProduk[0].nama);
