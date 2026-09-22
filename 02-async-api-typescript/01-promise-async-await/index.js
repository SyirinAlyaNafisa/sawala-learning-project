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
function tokoRoti(pesanan) {
  return new Promise((resolve, reject) => {
    console.log("Pesanan sedang diproses....");
    setTimeout(() => {
      if (pesanan === "Roti Coklat") {
        resolve("Roti Coklat berhasil dibuat!");
      } else {
        reject("Maaf, stok Roti Coklat habis.");
      }
    }, 1500);
  });
}

// 3. ASYNC/AWAIT — cara "buka" Promise yang lebih rapi
async function prosesPemesanan(pesanan) {
  try {
    const hasil = await tokoRoti(pesanan);
    console.log(hasil);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proses selesai!\n");
  }
}

// =====================================================
// TESTING
// =====================================================
prosesPemesanan("Roti Coklat"); // ini bakal berhasil (resolve)
prosesPemesanan("Roti Keju"); // ini bakal gagal (reject)
