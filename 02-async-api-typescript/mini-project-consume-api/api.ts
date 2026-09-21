export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const data = await response.json();

  return data;
}