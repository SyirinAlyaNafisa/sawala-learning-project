import { getUser } from "./api.ts";

async function main() {
  console.log("Loading...");

  try {
    const user = await getUser();

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