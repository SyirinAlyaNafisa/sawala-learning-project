import { daftarProduk } from "./data.js";

// FUNCTION 1: Cari produk berdasarkan nama (keyword)
function cariBerdasarkanNama(data, keyword) {
  return data.filter((produk) =>
    produk.nama.toLowerCase().includes(keyword.toLowerCase()),
  );
}
// FUNCTION 2: Filter produk berdasarkan harga maksimal
function filterBerdasarkanHarga(data, maksimal) {
  return data.filter((produk) => produk.harga <= maksimal);
}
// FUNCTION 3 (bonus): Gabungin cari + filter harga sekaligus
function cariDanFilterHarga(data, keyword, maksimal) {
  return data
    .filter((produk) =>
      produk.nama.toLowerCase().includes(keyword.toLowerCase()),
    )
    .filter((produk) => produk.harga <= maksimal);
}

//OUTPUT
console.log("--- Cari 'Laptop'---");
console.log(cariBerdasarkanNama(daftarProduk, "laptop"));

console.log("--- Filter harga di bawah 500000 ---");
console.log(filterBerdasarkanHarga(daftarProduk, 500000));

console.log("--- Cari 'kursi' + harga di bawah 3000000 ---");
console.log(cariDanFilterHarga(daftarProduk, "kursi", 3000000));
