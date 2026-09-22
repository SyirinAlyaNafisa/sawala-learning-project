function tokoRoti(pesanan) {
  return new Promise(function (ditepati, tidakDitepati) {
    console.log("Pesanan sedang di proses....");
    setTimeout(() => {
      if (pesanan == "Roti Coklat") {
        ditepati("Ini roti coklatnya , selamat menikmati!");
      } else {
        return tidakDitepati("Maaf, stok Roti Coklat habis.");
      }
    }, 1500);
  });
}

async function prosesPemesanan() {
  try {
    const hasil = await tokoRoti("Roti Coklat");
    console.log(hasil);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proses selesai!");
  }
}
prosesPemesanan();
