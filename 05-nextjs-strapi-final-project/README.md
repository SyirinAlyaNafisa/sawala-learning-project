# Final Project: Sawala Learning Hub (Fullstack)

## Deskripsi
Project ini adalah Final Project (Milestone 5) dari program belajar. Aplikasi bernama **Sawala Learning Hub** ini adalah platform sederhana untuk menampilkan daftar materi pembelajaran. 

Project ini mengimplementasikan arsitektur Fullstack:
- **Backend**: Strapi CMS (Headless CMS) sebagai penyedia data.
- **Frontend**: Next.js (App Router) dan TypeScript untuk menampilkan UI.

## Alur Data
`Database (Strapi)` -> `REST API (Strapi)` -> `Fetching (Next.js)` -> `UI (React Components)`

## Struktur Folder
- `backend-strapi/`: Folder untuk CMS, berisi konfigurasi API dan database.
- `frontend-nextjs/`: Folder untuk aplikasi Next.js (UI), menggunakan Atomic Design.

## ⚠️ Cara Menjalankan Project (WAJIB DIBACA)
Karena ini project Fullstack, **kedua server harus berjalan bersamaan** agar web bisa menampilkan data. 

1. **Jalankan Backend (Strapi) terlebih dahulu:**
   - Buka terminal, masuk ke folder `backend-strapi`.
   - Jalankan `npm install` lalu `npm run develop`.
   - Pastikan Strapi berjalan di `http://localhost:1337`.

2. **Jalankan Frontend (Next.js):**
   - Buka terminal baru (jangan tutup terminal Strapi), masuk ke folder `frontend-nextjs`.
   - Jalankan `npm install` lalu `npm run dev`.
   - Buka `http://localhost:3000` di browser.

*(Catatan: Detail cara menjalankan tiap folder bisa dilihat di README masing-masing folder).*