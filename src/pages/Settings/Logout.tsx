import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/auth");
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Logout</h2>
      <button
        onClick={handleLogout}
        className="bg-pink-700 text-white px-4 py-2 rounded"
      >
        تسجيل الخروج
      </button>
    </div>
  );
};

export default Logout;
