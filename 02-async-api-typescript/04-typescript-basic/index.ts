import type { Siswa, Produk } from "./type-interface.ts";

const siswa: Siswa = {
  nama: "Aldi",
  umur: 18,
  Gender : "Laki-laki",
};

const produk: Produk = {
  nama: "Laptop",
  harga: 10000000,
  stok: 5,
  tersedia: true,
};

console.log(siswa);
console.log(produk);