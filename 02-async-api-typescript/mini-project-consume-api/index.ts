import { getUser } from "./api.ts";

const user = await getUser();

console.log("Nama:", user.name);
console.log("Username:", user.username);
console.log("Email:", user.email);