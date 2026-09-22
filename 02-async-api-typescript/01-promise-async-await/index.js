// 1. promise dasar
const ambilData = new Promise((resolve, reject) => {
  const berhasil = true;

  if (berhasil) {
    resolve("Data berhasil diambil");
  } else {
    reject("Gagal mengambil data");
  }
});

ambilData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. PROMISE DENGAN setTimeout (simulasi proses butuh waktu)
function jualMartabak(pesanan) {
  return new Promise((berhasil, gagal) => {
    console.log("Pesanan sedang diproses....");
    setTimeout(() => {
      if (pesanan === "Coklat") {
        berhasil("Martabak Coklat berhasil dibuat!");
      } else {
        gagal("Maaf, stok Martabak Coklat habis.");
      }
    }, 1500);
  });
}

// 3. ASYNC/AWAIT — cara "buka" Promise yang lebih rapi
async function prosesPemesanan(pesanan) {
  try {
    const hasil = await jualMartabak(pesanan);
    console.log(hasil);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proses selesai!\n");
  }
}

//test
prosesPemesanan("Coklat"); // ini bakal berhasil (resolve)
prosesPemesanan("Keju"); // ini bakal gagal (reject)
