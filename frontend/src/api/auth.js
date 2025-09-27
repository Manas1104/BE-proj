// Handles login/register API calls
export async function login(email, password) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include", // important for sessions/cookies
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function register(userData) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}
