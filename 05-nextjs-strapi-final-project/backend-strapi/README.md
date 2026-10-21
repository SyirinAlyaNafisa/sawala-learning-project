# Backend: Strapi CMS (Final Project)

## Deskripsi
Ini adalah bagian Backend (CMS) dari Final Project, dibangun menggunakan **Strapi** (Headless CMS). Backend ini berfungsi untuk mengelola data artikel (membuat, mengedit, menghapus) dan menyediakan REST API yang akan di-*consume* oleh Frontend Next.js.

## Cara Menjalankan (Sangat Penting untuk Mentor/Penilai)
Karena Frontend (Next.js) membutuhkan data dari backend ini, **Backend Strapi WAJIB dinyalakan terlebih dahulu** sebelum menjalankan Frontend.

1. Buka terminal di dalam folder `backend-strapi`.
2. Jalankan `npm install` untuk menginstall dependencies.
3. **Konfigurasi Environment (`.env`):**
   - Salin file `.env.example` menjadi `.env`.
   - Pastikan konfigurasi database (biasanya SQLite default Strapi) dan *App Keys* sudah terisi.
4. Jalankan server Strapi dalam mode development:
   ```bash
   npm run develop
   ```
5. Buka browser dan akses alamat `http://localhost:1337/admin` untuk masuk ke Dashboard Admin Strapi (untuk memasukkan data artikel).
6. Akses API (public) di `http://localhost:1337/api/articles` untuk memastikan data muncul.