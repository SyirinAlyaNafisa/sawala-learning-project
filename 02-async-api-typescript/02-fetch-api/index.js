// Dengan try catch
async function getData() {
  try {
    console.log("Menunggu 2 detik...");

    // Memberikan jeda (delay) menggunakan setTimeout Promise
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2",
    );
    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error :", error.message);
  } finally {
    console.log("Selesai");
  }
}
getData();
