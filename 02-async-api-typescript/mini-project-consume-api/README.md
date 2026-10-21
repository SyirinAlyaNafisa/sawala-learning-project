# Mini Project: Consume API (Async & TypeScript)

## Deskripsi

Project ini adalah latihan untuk mengambil data dari API publik menggunakan JavaScript (Async/Await) dan menerapkan TypeScript untuk mendefinisikan struktur data (Interface).

API yang digunakan: [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Fitur & Konsep yang Dipelajari

1. **Fetch API**: Mengambil data dari URL API.
2. **Async/Await**: Menangani proses asynchronous agar kode lebih mudah dibaca.
3. **TypeScript Interface**: Mendefinisikan bentuk data (`User`) agar sesuai dengan response API.
4. **Error Handling**: Menggunakan `try`, `catch`, dan `finally` untuk menangani jika koneksi gagal atau data tidak ditemukan.

## Struktur File

- `api.ts`: Berisi definisi `interface User` dan fungsi `getUser()` untuk mengambil data dari API.
- `index.ts`: File utama yang memanggil fungsi `getUser()` dan menampilkan hasilnya ke terminal.

## Cara Menjalankan

Karena project ini menggunakan TypeScript dan membutuhkan akses internet untuk mengambil data dari API, ikuti langkah berikut:

1. Pastikan kamu sudah menginstall Node.js.
2. Buka terminal di dalam folder `mini-project-consume-api` ini.
3. Jalankan perintah berikut untuk mengeksekusi file TypeScript secara langsung:
   ```bash
   npx tsx index.ts
   ```
4. Kamu akan melihat output proses "Loading...", data user, dan "Selesai" di terminal.
