// Get all doctors
export async function getDoctors() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/doctors`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch doctors");
  return res.json();
}

// Get doctor by ID
export async function getDoctorById(id) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/doctors/${id}`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch doctor");
  return res.json();
}
