# Mini Project: React Dashboard (Materi Belajar)

## Deskripsi
Project ini adalah hasil praktik (output wajib) untuk Milestone 4: React Fundamentals. Aplikasi ini adalah sebuah dashboard sederhana untuk mengelola daftar materi belajar React. Project dibangun menggunakan **React**, **Vite**, dan **TypeScript**.

## Fitur Aplikasi
1. **Statistik Belajar**: Menampilkan total keseluruhan materi dan total materi yang sudah selesai secara *real-time*.
2. **Tambah Materi**: Form untuk menambahkan materi baru (judul dan deskripsi).
3. **Pencarian (Search)**: Fitur untuk mencari materi berdasarkan kata kunci.
4. **Manajemen Status**: Tombol untuk menandai materi sebagai "Selesai" atau "Batalin".
5. **Hapus Materi**: Menghapus materi dari daftar.

## Konsep React yang Diterapkan (Sesuai Silabus)
- **JSX & Component**: Memisahkan UI menjadi komponen kecil (seperti `Card.tsx`, `Button.tsx`).
- **Props & State**: Mengirim data materi (props) ke komponen Card, dan mengelola daftar materi (state) di komponen utama.
- **Event Handling**: Menangani interaksi user pada form input, tombol tambah, hapus, dan ubah status.
- **Conditional Rendering**: Menampilkan teks "Status: Sudah selesai" (hijau) atau "Belum selesai" (kuning) berdasarkan data.
- **List Rendering**: Merender daftar materi menggunakan method `.map()`.
- **useEffect**: Mengelola *side effects* (misalnya menghitung total materi otomatis saat data berubah).

## Struktur Folder
- `src/components/`: Berisi komponen UI yang *reusable* (Card, Button).
- `src/App.tsx`: Komponen utama tempat logika state dan perakitan UI.
- `src/main.tsx`: Entry point React.

## Cara Menjalankan
1. Buka terminal di dalam folder `mini-project-react-dashboard` ini.
2. Jalankan `npm install` untuk menginstall dependencies.
3. Jalankan server development dengan perintah:
   ```bash
   npm run dev
```
4. Buka browser dan akses alamat `http://localhost:5173` untuk melihat aplikasi berjalan.