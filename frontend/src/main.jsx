import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)

// ✅ Fetch profile with token
const token = localStorage.getItem("token");

if (token) {
  fetch(`${import.meta.env.VITE_API_URL}/api/users/profile`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`, // ✅ send JWT
    },
    credentials: "include",
  })
    .then(res => res.json())
    .then(data => console.log("Profile:", data))
    .catch(err => console.error("Error:", err));
} else {
  console.log("No token found. Please login first.");
}
