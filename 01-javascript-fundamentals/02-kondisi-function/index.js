// 1. Kondisi (IF-ELSE)

// Contoh sederhana : cek umur
const umur = 17;
if (umur >= 18) {
  console.log("Kamu sudah dewasa, boleh bikin ktp.");
} else {
  console.log("Kamu masih di bawah umur.");
}

//menggunakan function
function cekLulus(nilai) {
  if (nilai >= 75) {
    return "Lulus";
  } else {
    return "Tidak Lulus";
  }
}

console.log(cekLulus(80));
console.log(cekLulus(65));

//contoh dengan else if : bsnysk kondisi
const nilai = 85;
if (nilai >= 90) {
  console.log("Grade :A (Sangat Baik)");
} else if (nilai >= 75) {
  console.log("Grade:B (Baik)");
} else if (nilai >= 60) {
  console.log("Grade:C (Cukup)");
} else {
  console.log("Grade: D (Perlu Belajar lagi)");
}

// 2. Function
// Cara Biasa
function tambah(a, b) {
  return a + b;
}

//arrow function
const kurang = (a, b) => {
  return a - b;
};

// arrow function super ringkas
const kurang2 = (a, b) => a - b;
console.log(kurang2(10, 4));

// 3. Mini Exercise : kalkulator sederhana
const prompt = require("prompt-sync")();
const a = Number(prompt("Masukkan angka pertama: "));
const operator = prompt("Mausukkan operator (+,-,*,/): ");
const b = Number(prompt("Masukkan angka kedua: "));

function kalkulatorMini(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "*") {
    return a * b;
  } else {
    return "Operator tidak valid";
  }
}

console.log("hasil:", kalkulatorMini(a, b, operator));
console.log(kalkulatorMini(2, 5, "+"));

//
