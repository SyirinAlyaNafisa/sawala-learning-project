// FILE SUMBER EXPORT

//----- Named Export -----
export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export const PI = 3.14;
export function luasLingkaran(radius) {
  return PI * radius * radius;
}

// ----- Default export (cuma boleh 1 per file) -----
export default function kalkulator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operator tidak valid";
  }
}
