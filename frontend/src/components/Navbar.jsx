import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // ✅ true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ clear token
    setIsLoggedIn(false);
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="flex justify-between items-center px-10 py-4 shadow">
      {/* Left Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-900">
        CareConnect
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6">
        <Link to="/">HOME</Link>
        <Link to="/doctors">ALL DOCTORS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      {/* Right side (Login/Register or Profile/Logout) */}
      <div>
        {isLoggedIn ? (
          <div className="flex gap-4 items-center">
            <Link
              to="/profile"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            Create account
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
