export interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUser(): Promise<User> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil data");
  }

  return await response.json();
}