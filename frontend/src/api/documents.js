// Upload a document
export async function uploadDocument(file) {
  const formData = new FormData();
  formData.append("document", file);

  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/documents`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to upload document");
  return res.json();
}

// Get all documents
export async function getDocuments() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/documents`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch documents");
  return res.json();
}
