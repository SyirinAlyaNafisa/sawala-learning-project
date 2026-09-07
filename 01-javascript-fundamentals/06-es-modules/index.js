// FILE PEMAKAI - IMPORT DARI MATH.JS

//named export -> wajib pakai {} dan nama harus sama persis

import { tambah, kurang, PI, luasLingkaran } from "./math.js";

// default import -> tanpa {}, nama bebas diganti
import kalkulator from "./math.js";
console.log(tambah(5, 3));
console.log(kurang(5, 3));
console.log(PI);
console.log(luasLingkaran(7));

console.log(kalkulator(10, 5, "+"));
console.log(kalkulator(10, 5, "-"));
