function data() {
  return new Promise(function (berhasil, gagal) {
    const proses = true;
    setTimeout(() => {
      if (proses) {
        berhasil("Data berhasil diambil!");
      } else {
        gagal("Data gagal diambil!");
      }
    }, 5000);
  });
}

async function prosesData() {
  console.log("Memulai proses...");
  try {
    const hasil = await data();
    console.log(hasil);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proses selesai");
  }
}

prosesData();
