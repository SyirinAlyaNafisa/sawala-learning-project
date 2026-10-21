# Frontend: Next.js Sawala Learning Hub

## 🎥 Video Demonstrasi

Karena project ini Fullstack (membutuhkan Backend Strapi dan Frontend Next.js yang berjalan bersamaan), silakan tonton video demonstrasi cara menjalankan dan melihat hasil project melalui link berikut:

👉 **[Tonton Video Demo di sini](https://drive.google.com/file/d/12xhgaZTnkvN6KHdzJaLFqLpOjjH7g8aH/view?usp=sharing)**

## Deskripsi

Folder ini berisi aplikasi antarmuka (UI) untuk Final Project yang dibangun menggunakan **Next.js (App Router)** dan **TypeScript**. Desain komponennya menerapkan prinsip **Atomic Design** (Atoms, Molecules, Organisms) dan mengambil data secara langsung dari Strapi CMS.

## Fitur & Konsep (Sesuai Silabus Minggu 9-10)

- **App Router**: Menggunakan struktur `app/` dengan `layout.tsx` dan `page.tsx`.
- **Data Fetching**: Mengambil data langsung dari REST API Strapi.
- **Routing Dinamis**: Halaman detail materi menggunakan route `app/articles/[slug]/page.tsx` (atau sejenisnya).
- **Atomic Design**: Komponen dipecah menjadi `atoms/` (Button), `molecules/` (ArticleCard), dan `organisms/` (ArticleList).
- **Environment Variables**: Menggunakan `.env.local` untuk menyimpan URL API Strapi.

## ⚠️ Persiapan Penting Sebelum Menjalankan

Aplikasi ini **TIDAK AKAN MENAMPILKAN DATA (akan kosong/error)** jika Backend Strapi belum berjalan.
Pastikan kamu sudah menyalakan server Strapi di `http://localhost:1337` terlebih dahulu (lihat README di folder `backend-strapi`).

## Cara Menjalankan

1. Pastikan server Strapi (backend) sudah menyala di terminal terpisah.
2. Buka terminal di dalam folder `frontend-nextjs` ini.
3. Jalankan `npm install` untuk menginstall dependencies.
4. Salin file `.env.example` menjadi `.env.local` (jika belum ada), lalu pastikan isinya menunjuk ke URL Strapi:
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```
5. Jalankan `npm run dev` untuk menjalankan aplikasi.
6. Buka browser dan akses `http://localhost:3000` untuk melihat hasilnya.
