// Get all appointments
export async function getAppointments() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch appointments");
  return res.json();
}

// Book a new appointment
export async function createAppointment(appointmentData) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointmentData),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to create appointment");
  return res.json();
}
