// 1. Try & Catch

async function ambilData() {
  try {
    const data = await fetch("https://jsonplaeholder.typicode.com/todos/1");
    const response = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Gagal Mengambil Data");
  } finally {
    console.log("Selesai");
  }
}

ambilData();

//2. Dengan Throw // bikin error sendiri dan di tangkap catch

async function ambilData2() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) {
      throw new Error("Data tidak di temukan");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Gagal", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

ambilData2();
