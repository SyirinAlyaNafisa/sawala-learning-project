// Menentukan struktur/bentuk data User
export interface User {
  id: number;
  name: string;
  email: string;
}

// Function untuk mengambil data User dari API
export async function getUser(): Promise<User> {
  // Mengirim request ke API dan menunggu response
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil data");
  }

  // Mengubah response JSON menjadi data User
  return await response.json();
}