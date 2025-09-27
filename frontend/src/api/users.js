// src/api/users.js

// Get current user profile (requires JWT token from login)
export async function getProfile(token) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/profile`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}
