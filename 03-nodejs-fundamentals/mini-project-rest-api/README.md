# Mini Project: REST API Sederhana (Node.js + Express)

## Deskripsi

Project ini merupakan latihan membuat REST API (*Representational State Transfer Application Programming Interface*) menggunakan Node.js dan framework Express.js.

API ini digunakan untuk mengelola data artikel dengan konsep CRUD (Create, Read, Update, Delete). Data disimpan secara *in-memory* menggunakan array, sehingga belum menggunakan database dan data akan kembali ke kondisi awal ketika server dijalankan ulang.

## Fitur & Konsep yang Dipelajari

1. **Express.js** — Membuat server dan mengatur routing API.
2. **Middleware** — Membuat custom middleware `logger` untuk mencatat setiap request yang masuk ke terminal.
3. **Environment Variables** — Menggunakan `dotenv` untuk mengelola konfigurasi server, seperti `PORT`, melalui file `.env`.
4. **CRUD (Create, Read, Update, Delete)** — Mengimplementasikan method HTTP `GET`, `POST`, `PUT`, dan `DELETE` untuk mengelola data artikel.

## Struktur Folder

```text
mini-project-rest-api/
├── src/
│   ├── server.js
│   ├── routes/
│   │   └── articles.route.js
│   ├── controllers/
│   │   └── articles.controller.js
│   └── middlewares/
│       └── logger.middleware.js
├── .env
├── package.json
└── README.md
```

**Keterangan:**

- `src/server.js` — File utama untuk menjalankan server Express.
- `src/routes/articles.route.js` — Mengatur endpoint API untuk artikel.
- `src/controllers/articles.controller.js` — Menangani logika CRUD artikel.
- `src/middlewares/logger.middleware.js` — Mencatat request yang masuk ke server.
- `.env` — Menyimpan konfigurasi port server.

## Cara Menjalankan Project

1. Buka terminal di dalam folder `mini-project-rest-api`.
2. Install dependencies dengan perintah:

   ```bash
   npm install
   ```

3. Pastikan file `.env` berisi konfigurasi berikut:

   ```env
   PORT=7000
   ```

4. Jalankan server dengan perintah:

   ```bash
   node src/server.js
   ```

5. Buka browser atau Postman untuk mengakses API melalui alamat:

   ```text
   http://localhost:7000
   ```

## Cara Pengujian dengan Postman

Pengujian API dilakukan menggunakan **Postman** untuk memastikan setiap endpoint berjalan sesuai fungsinya.

### Persiapan

1. Pastikan server sudah berjalan menggunakan perintah `node src/server.js`.
2. Buka aplikasi Postman.
3. Buat request baru (*New Request*).
4. Pilih method HTTP dan masukkan URL sesuai endpoint yang ingin diuji.

### 1. Cek Status Server

- **Method:** `GET`
- **URL:** `http://localhost:7000/`

Klik **Send**.

Contoh response:

```json
{
  "message": "REST Api berjalan"
}
```

### 2. Mengambil Semua Artikel

- **Method:** `GET`
- **URL:** `http://localhost:7000/articles`

Klik **Send**.

**Response:** Menampilkan array yang berisi seluruh data artikel.

### 3. Menambahkan Artikel Baru

- **Method:** `POST`
- **URL:** `http://localhost:7000/articles`

Langkah-langkah:

1. Pilih tab **Body**.
2. Pilih **raw**.
3. Pilih format **JSON**.
4. Masukkan data berikut:

```json
{
  "title": "Belajar Postman",
  "body": "Postman sangat memudahkan testing API.",
  "author": "Kamu"
}
```

5. Klik **Send**.

**Response:** Status `201 Created` beserta data artikel baru yang berhasil ditambahkan.

### 4. Memperbarui Artikel

- **Method:** `PUT`
- **URL:** `http://localhost:7000/articles/1`

Ganti angka `1` dengan ID artikel yang ingin diperbarui.

Langkah-langkah:

1. Pilih tab **Body**.
2. Pilih **raw**.
3. Pilih format **JSON**.
4. Masukkan data berikut:

```json
{
  "title": "Belajar Node.js (Updated)",
  "body": "Materi ini telah diperbarui melalui Postman.",
  "author": "Syirin"
}
```

5. Klik **Send**.

**Response:** Menampilkan data artikel yang sudah diperbarui.

### 5. Menghapus Artikel

- **Method:** `DELETE`
- **URL:** `http://localhost:7000/articles/1`

Ganti angka `1` dengan ID artikel yang ingin dihapus.

Klik **Send**.

Contoh response:

```json
{
  "message": "Artikel berhasil dihapus"
}
```

## Catatan

- Pastikan server berjalan sebelum melakukan pengujian menggunakan Postman.
- Pastikan URL, method HTTP, dan format JSON sudah sesuai.
- Data artikel disimpan dalam array (*in-memory*), bukan database permanen.
- Endpoint `PUT` dan `DELETE` menggunakan ID artikel sebagai parameter untuk menentukan data yang akan diubah atau dihapus.

## Kesimpulan

Melalui mini project ini, dipelajari cara membuat REST API sederhana menggunakan Node.js dan Express.js, mengatur routing dan middleware, menggunakan environment variables, serta mengimplementasikan operasi CRUD. Pengujian menggunakan Postman membantu memastikan setiap endpoint berfungsi sesuai kebutuhan.