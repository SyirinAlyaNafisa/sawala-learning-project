import { daftarProduk } from "./data.js";

// Tampilkan semua nama produk
daftarProduk.forEach((item) => {
  console.log(item.nama);
});

// Cari produk berdasarkan nama
const cariProduk = (keyword) => {
  return daftarProduk.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );
};

// Filter produk berdasarkan harga maksimal
const filterByHarga = (maksimal) => {
  return daftarProduk.filter((item) => item.harga <= maksimal);
};

// Cari produk + filter harga
const cariDanFilterHarga = (keyword, maksimal) => {
  return daftarProduk
    .filter((item) =>
      item.nama.toLowerCase().includes(keyword.toLowerCase())
    )
    .filter((item) => item.harga <= maksimal);
};

// OUTPUT
console.log(cariProduk("laptop"));
console.log(filterByHarga(500000));
console.log(cariDanFilterHarga("kursi", 3000000));

//keyword = parameter yang nantinya di isi
// tolowecase mengubah teks menjadi huruf kecil 
// toUpperCase mengubah teks menjadi huruf besar 
// includes untuk mengecek apakah string mengandung teks tertentu