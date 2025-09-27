// Get all clinics
export async function getClinics() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/clinics`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch clinics");
  return res.json();
}

// Add a new clinic
export async function addClinic(clinicData) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/clinics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clinicData),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to add clinic");
  return res.json();
}
