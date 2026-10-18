// Mengambil function getUser dari file api.ts
import { getUser } from "./api.ts";

// Function utama untuk menjalankan program
async function main() {
  console.log("Loading...");

  try {
    const user = await getUser();

    // Menampilkan data yang sudah diterima
    console.log("Data:");
    console.log("ID:", user.id);
    console.log("Nama:", user.name);
    console.log("Email:", user.email);
    
  } catch (error) {
    console.log("Error: Gagal mengambil data");
  } finally {
    console.log("Selesai");
  }
}

main();