// lib/users.ts
export type DemoUser = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.
  role: "admin" | "user";
};

export const USERS: DemoUser[] = [
  { username: "apip", password: "aku anak indo", role: "user" },
];
