// FILE PEMAKAI - IMPORT DARI MATH.JS

//named export -> wajib pakai {} dan nama harus sama persis

import {tambah} from "./math.js";
console.log(tambah(5, 3));

// default import -> tanpa {}, nama bebas diganti
import kali from "./math.js";

console.log(kali(5,4));
