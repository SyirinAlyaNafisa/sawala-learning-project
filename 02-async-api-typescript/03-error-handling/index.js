// 1. try && catch

// dasar

try {
  const data = null;
  console.log(data.nama); // ini bakal error
} catch (error) {
  console.log("Ada masalah:", error.message);
}

async function ambilData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Gagal megambil data");
  } finally {
    console.log("Selesai");
  }
}
ambilData();

//gabungan + throw (bikin function sendiri)
async function ambilData2() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2",
    );
    if (!response.ok) {
      throw new Error(`Gagal, status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error.message);
  } finally {
    console.log("Selesai");
  }
}
ambilData2();
