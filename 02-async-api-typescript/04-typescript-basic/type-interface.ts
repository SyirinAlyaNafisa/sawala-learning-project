export type Siswa = {
  nama: string;
  umur: number;
  Gender: "Laki-laki" | "Perempuan";
};

export interface Produk {
  nama: string;
  harga: number;
  stok: number;
  tersedia: boolean;
}
